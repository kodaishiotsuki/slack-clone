import { useCreateWorkspaceValues } from "@/hooks/create-workspace-values";
import { UploadDropzone } from "@/lib/uploadthing";
import Image from "next/image";
import { ImCancelCircle } from "react-icons/im";

const ImageUpload = () => {
  const { imageUrl, updateImageUrl } = useCreateWorkspaceValues();
  if (imageUrl) {
    return (
      <div className="flex items-center justify-center h-32 w-32 relative">
        <Image
          src={imageUrl}
          alt="workspace"
          className="object-cover w-full h-full rounded-md"
          width={320}
          height={320}
        />
        <ImCancelCircle
          size={30}
          className="absolute -top-2 -right-2 cursor-pointer z-10 hover:scale-110"
          onClick={() => updateImageUrl("")}
        />
      </div>
    );
  }

  return (
    <UploadDropzone
      endpoint="workspaceImage"
      onClientUploadComplete={(res) => {
        updateImageUrl(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        alert(`ERROR! ${error.message}`);
      }}
    />
  );
};

export default ImageUpload;
