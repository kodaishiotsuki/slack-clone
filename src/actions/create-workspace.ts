"use server";

export const createWorkspace = async ({
  name,
  imageUrl,
  slug,
  invite_code,
}: {
  name: string;
  imageUrl?: string;
  slug: string;
  invite_code: string;
}) => {
  console.log(name, imageUrl, slug, invite_code);
};
