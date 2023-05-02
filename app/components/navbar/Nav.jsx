import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Login from "../auth/Login";
import Logout from "../auth/Logout";
import Sidebar from "./Sidebar";

export default async function Nav({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <>
      {/* <main className="bg-blue-900 w-screen min-h-screen flex items-center">
        <div className="text-center w-full">{!session?.user && <Login />}</div>
      </main> */}
      {!session?.user && (
        <div className="bg-blue-900 w-screen h-screen flex items-center">
          <div className="text-center w-full">
            <Login />
          </div>
        </div>
      )}
      {session?.user && (
        <div className="bg-blue-900 w-screen min-h-screen  flex ">
          <Sidebar />
          {/* <Logout /> */}
          <div className="p-4 bg-white flex-grow mr-2 mt-2 mb-2 rounded-lg">
            {children}
          </div>
        </div>
      )}
    </>
  );
}
