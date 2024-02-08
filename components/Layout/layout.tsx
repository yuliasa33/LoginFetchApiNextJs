import Link from "next/link";
import { Router, useRouter } from "next/router";
import React, { ReactNode } from "react";
import showCustomAlert from "../utils/alert";

interface LayoutProps {
  children: ReactNode;
}

// eslint-disable-next-line react-hooks/rules-of-hooks

const layout = (props: LayoutProps) => {
  const { children } = props;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  const onLogout = () => {
    return showCustomAlert
      .customAlert("success", "Berhasil", "LogOut Sukses")
      .then(() => {
        router.push("/authentication/loginPage");
      });
  };

  return (
    <div>
      <nav className="flex items-center flex-wrap bg-sky-400 p-3 fixed top-0 w-screen mb-3">
        <div className="flex w-2/12">
          <Link href="/" legacyBehavior>
            <a className="inline-flex items-center p-2 mr-4 ">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current text-white h-8 w-8 mr-2"
              >
                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
              </svg>
              <span className="text-xl text-white font-bold uppercase tracking-wide">
                YuliAlf17
              </span>
            </a>
          </Link>
        </div>
        <div className="flex w-9/12 justify-end items-end">
          <div className="flex flex-col justify-between">
            <button role="button" className="button-name" onClick={onLogout}>
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="flex flex-row">
        <div className="flex flex-col w-2/12 h-screen bg-slate-500"></div>
        <div className="flex flex-col w-10/12 gap-3 mt-4 mb-3 p-3 h-screen overflow-y-scroll">
          <div className="flex flex-row border border-t-4 border-t-teal-600 rounded-md shadow-md p-5 mt-16 mb-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default layout;
