import Layout from "@/components/Layout/layout";
import { environment } from "@/environment";
import { useRouter } from "next/router";
import { NextResponse } from "next/server";
import { useState } from "react";

interface BlogProps {
  dataBlog: ModelPOST[];
}

interface ModelPOST {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const tambah = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [formData, SetFormData] = useState({});

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      let data = await fetch(`${environment.api}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(formData),
      });
      let result = await data.json();

      return NextResponse.json(result);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    SetFormData({ ...formData, [name]: value });
  };

  // useEffect(()=>{

  // },[onSubmit])

  return (
    <>
      <Layout>
        <div className="grid gap-3 w-full p-4">
          <form onSubmit={onSubmit}>
            <div className="flex">
              <div className="flex flex-col">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Judul
                  </label>
                  <input
                    id="Name"
                    name="title"
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Username"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Isi
                  </label>
                  <textarea
                    id="Password"
                    name="body"
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <div className="flex flex-col gap-3 my-4">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default tambah;
