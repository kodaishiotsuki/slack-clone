import { getUserData } from "@/actions/get-user-data";
import { redirect } from "next/navigation";

export default async function Home() {
  const userData = await getUserData();

  if (!userData) {
    return redirect("/auth");
  }

  const userWorkplaceId = userData.workspaces?.[0];

  if (!userWorkplaceId) return redirect("/create-workspace");

  if (userWorkplaceId) return redirect(`/workplace/${userWorkplaceId}`);
}
