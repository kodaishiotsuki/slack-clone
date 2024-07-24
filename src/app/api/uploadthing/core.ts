import { getUserData } from "@/actions/get-user-data";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

const currentUser = async () => {
  const user = await getUserData();
  return { userId: user?.id };
};

export const ourFileRouter = {
  workspaceImage: f({ image: { maxFileSize: "4MB" } })
    .middleware(() => currentUser())
    .onUploadComplete(() => {}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
