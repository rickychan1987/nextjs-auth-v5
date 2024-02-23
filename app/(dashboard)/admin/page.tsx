import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const page = async () => {
  const session = await getServerSession(authOptions);
  
  if(session?.user) {
    return <h2 className="text-2xl">Admin Page - Welcome back {session?.user.username}</h2>
  }
  return <h2 className="text-2xl">Please login in to see the info</h2>
};

export default page;
