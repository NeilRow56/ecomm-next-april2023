import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

import Image from "next/image";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  return (
    <div className="text-blue-900 flex justify-between">
      <h2>
        Hello, <b>{session?.user?.name}</b>
      </h2>
      <div className="flex  bg-gray-300 gap-1 text-black rounded-lg overflow-hidden items-center">
        <Image src={session?.user?.image} alt="" width={50} height={50} />
        <span className="px-2">{session?.user?.name}</span>
      </div>
    </div>
  );
}
