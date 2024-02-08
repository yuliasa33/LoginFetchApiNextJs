/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Notif } from "@/templates/LandingPage/utils/notification";
import { environment } from "@/environment";
import showCustomAlert from "@/components/utils/alert";

const loginPage = () => {
  const [Name, SetName] = useState("");
  const [Password, SetPassword] = useState("");
  const router = useRouter();

  let name = "asa";
  let pass = "123";

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("name :", Name);
    console.log("password :", Password);
    if (Name == name && Password == pass) {
      showCustomAlert
        .customAlert("success", "Berhasil", "Login Sukses")
        .then(() => {
          router.push("/features/beranda");
        });
    } else {
      showCustomAlert.customAlert(
        "error",
        "Oops...",
        "Username/Password Salah"
      );
    }

    SetName("");
    SetPassword("");
  };

  return (
    <div className="bg-slate-400">
      <div className="flex items-center justify-center gap-3 p-6 h-screen">
        <div className="w-full bg-white rounded-2xl shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0  items-center justify-center">
          <div className="p-6 space-y-3 md:space-y-6 sm:p-8 border-b-5">
            <div className="flex items-center justify-center bottom-0 px-6">
              <h1 className="text-2xl font-medium justify-items-center">
                <span className="text-2xl text-sky-500">Login</span>
              </h1>
            </div>
            <div className="flex flex-col gap-3">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Username
                  </label>
                  <input
                    id="Name"
                    value={Name}
                    onChange={(e) => {
                      SetName(e.target.value);
                    }}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Username"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Password
                  </label>
                  <input
                    id="Password"
                    value={Password}
                    onChange={(e) => {
                      SetPassword(e.target.value);
                    }}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="password"
                    placeholder="Username"
                  />
                </div>

                <div className="flex flex-col gap-3 my-4">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
                <div className="flex flex-col items-center justify-center">
                  Version {environment.version}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default loginPage;
