import type { User } from "../../types/models";
import { axiosInstance } from "../client";
import endpoints from "../endpoints";

interface IPayload {
  code: string;
}

interface IResponse {
  access_token: string;
  token_type: string;
  user_info: User;
}

export const google_login = async (payload: IPayload): Promise<IResponse> => {
  const response = await axiosInstance.post(
    endpoints.exchangeGoogleAuthCode,
    payload
  );
  return response.data;
};
