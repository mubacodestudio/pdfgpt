import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Page = () => {
  const { getUser } = getKindeServerSession();
  const user = getUser();

  if (!user || !user.id) return redirect(`/auth-callback?origin=dashboard`);

  console.log("u", user?.email);

  return <div>{user?.email}</div>;
};

export default Page;
