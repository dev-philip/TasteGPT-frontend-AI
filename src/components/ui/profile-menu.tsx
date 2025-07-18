import type React from "react";
import { Link } from "react-router-dom";
import type { User } from "../../types/models";

// import UserIcon from "@/assets/images/svg/user.svg";
// import SettingIcon from "@/assets/images/svg/gear.svg";
// import HelpIcon from "@/assets/images/svg/users.svg";
// import InviteIcon from "@/assets/images/svg/user-plus.svg";
// import TermsIcon from "@/assets/images/svg/note-text.svg";
import GithubIcon from "@/assets/images/svg/github.svg";
import CloudIcon from "@/assets/images/svg/cloud.svg";
import LogoutIcon from "@/assets/images/svg/log-out.svg";

interface IProfileMenuProps {
  user: User;
  onLogout: VoidFunction;
}

export const ProfileMenu: React.FC<IProfileMenuProps> = (props) => {
  const { user, onLogout } = props;

  return (
    <div className="shadow-md rounded-[12px] overflow-hidden border border-[#E2E8F0] w-full bg-surface-light dark:bg-surface-dark">
      <div className="py-[5px] w-full border-b border-b-[#E2E8F0]">
        <div className="px-[8px] py-[6px]">
          <p className="text-[#020617B2] text-sm font-medium leading-[20px]">
            {user.name}
          </p>
        </div>
      </div>

      {/* <div className="p-[5px] border-b border-b-[#E2E8F0]">
        <Link
          to={"#"}
          className="block px-[8px] py-[6px] flex flex-row items-center gap-2"
        >
          <UserIcon />
          <p>Profile</p>
        </Link>

        <Link
          to={"#"}
          className="block px-[8px] py-[6px] flex flex-row items-center gap-2"
        >
          <SettingIcon />
          <p>Settings</p>
        </Link>
      </div> */}

      {/* <div className="p-[5px] border-b border-b-[#E2E8F0]">
        <Link
          to={"#"}
          className="block px-[8px] py-[6px] flex flex-row items-center gap-2"
        >
          <HelpIcon />
          <p>Help and Support</p>
        </Link>

        <Link
          to={"#"}
          className="block px-[8px] py-[6px] flex flex-row items-center gap-2"
        >
          <InviteIcon />
          <p>Invite users</p>
        </Link>

        <Link
          to={"#"}
          className="block px-[8px] py-[6px] flex flex-row items-center gap-2"
        >
          <TermsIcon />
          <p>Terms and policies</p>
        </Link>
      </div> */}

      <div className="px-[5px] border-b border-b-[#E2E8F0]">
        <Link
          to={"/github"}
          className="block px-[8px] py-[6px] flex flex-row items-center gap-2"
        >
          <GithubIcon />
          <p>Github</p>
        </Link>

        <Link
          to={"/api"}
          className="block px-[8px] py-[6px] flex flex-row items-center gap-2"
        >
          <CloudIcon />
          <p>API</p>
        </Link>
      </div>

      <div className="p-[5px]">
        <button
          type="button"
          onClick={onLogout}
          className="px-[8px] py-[6px] flex flex-row items-center gap-2 cursor-pointer"
        >
          <LogoutIcon />
          <p>Logout</p>
        </button>
      </div>
    </div>
  );
};
