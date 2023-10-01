import { db } from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { Dashboard } from "./components/dashboard";

const Page = async () => {
  const { getUser } = getKindeServerSession();
  const user = getUser();

  if (!user || !user.id) return redirect(`/auth-callback?origin=dashboard`);

  const dbUser = await db.user.findFirst({
    where: {
      id: user.id,
    },
  });

  if (!dbUser) {
    redirect(`/auth-callback?origin=dashboard`);
  }

  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default Page;
