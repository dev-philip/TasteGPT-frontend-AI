import { create } from "zustand";
import { v4 as uuidv4 } from "uuid"; 


type ClaimEntry = {
  id: string;
  claim: string;
  claimResult: any; // You can make this more specific if needed
};

type ClaimStore = {
  claim: string;
  setClaim: (value: string) => void;
  prevClaim: string;
  setPrevClaim: (value: string) => void;
  isListening: boolean;
  setIsListening: (value: boolean) => void;
  isClaimLoading: boolean;
  setIsClaimLoading: (value: boolean) => void;

  claimData: any | null;
  setClaimData: (data: any) => void;

  claimDataForChat: ClaimEntry[];
  setClaimDataForChat: (claim: string, result: any) => void;

    // 🔽 Add these two:
  resetKey: number;
  clearAll: () => void;
};

export const useClaimStore = create<ClaimStore & { clearAll: () => void}>((set) => ({
  claim: "",
  setClaim: (value) => set({ claim: value }),
  prevClaim: "",
  setPrevClaim: (value) => set({ prevClaim: value }),
  isListening: false,
  setIsListening: (value) => set({ isListening: value }),
  isClaimLoading: false,
  setIsClaimLoading: (value) => set({ isClaimLoading: value }),

  claimData: null,
  setClaimData: (data) => set({ claimData: data }),


  claimDataForChat: [],
  setClaimDataForChat: (claim, result) =>
    set((state) => ({
      claimDataForChat: [
        ...state.claimDataForChat,
        {
          id: uuidv4(),
          claim,
          claimResult: result,
        },
      ],
    })),

resetKey: 0,
incrementResetKey: () => set((state) => ({ resetKey: state.resetKey + 1 })),

clearAll: () => {
  console.log("Clearing store..."); // ✅ Add this
  set({
    claim: "",
    prevClaim: "",
    isListening: false,
    isClaimLoading: false,
    claimData: null,
    claimDataForChat: [],
    resetKey: Date.now(), // Ensures uniqueness to trigger useEffect
  });
}

}));
