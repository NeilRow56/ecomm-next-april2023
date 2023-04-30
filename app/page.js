import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="bg-blue-900 w-screen h-screen flex items-center">
      <div className="text-center w-full">
        {!session?.user && <Login />}
        {session?.user && (
          <div>
            <Logout />
            <div className="p-2 text-white">{session.user.email}</div>
          </div>
        )}
      </div>
    </main>
  );
}
