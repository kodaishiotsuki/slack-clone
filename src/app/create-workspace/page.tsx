"use client";

import ImageUpload from "@/components/image-upload";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Typography from "@/components/ui/typography";
import { useCreateWorkspaceValues } from "@/hooks/create-workspace-values";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateWorkSpace() {
  const { currStep } = useCreateWorkspaceValues();

  let stepInView = null;

  switch (currStep) {
    case 1:
      stepInView = <Step1 />;
      break;
    case 2:
      stepInView = <Step2 />;
      break;
    default:
      stepInView = <Step1 />;
  }

  return (
    <div className="w-full h-screen grid place-content-center bg-neutral-800 text-white">
      <div className="p-3 max-w-[550px]">
        <Typography
          variant="p"
          className="text-neutral-400"
          text={`step ${currStep} of 2`}
        />
        {stepInView}
      </div>
    </div>
  );
}

const Step1 = () => {
  const { name, updateValues, setCurrStep } = useCreateWorkspaceValues();

  return (
    <>
      <Typography
        text="What is the name of your company or team"
        className="my-4"
      />
      <Typography
        text="This will be the name of your Slackzz workspace - choose something that your team will recognize."
        className="text-neutral-300"
        variant="p"
      />

      <form className="mt-6">
        <fieldset>
          <Input
            className="bg-neutral-700 text-white border-neutral-600"
            type="text"
            placeholder="Enter your company name"
            value={name}
            onChange={(e) => updateValues({ name: e.target.value })}
          />
          <Button
            type="button"
            className="mt-10"
            onClick={() => setCurrStep(2)}
            disabled={!name}
          >
            <Typography text="Next" variant="p" />
          </Button>
        </fieldset>
      </form>
    </>
  );
};

const Step2 = () => {
  const { setCurrStep, updateImageUrl, imageUrl, name } =
    useCreateWorkspaceValues();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // const slug = slugify(name);
    // const invite_code = uuid();
    // const error = await createWorkspace({ imageUrl, name, slug, invite_code });
    // setIsSubmitting(false);
    // if (error?.error) {
    //   console.log(error);
    //   return toast.error("Couldn't create workspace. Please try again.");
    // }
    // toast.success("Workspace created successfully");
    // router.push("/");
  };

  return (
    <>
      <Button
        size="sm"
        className="text-white"
        variant="link"
        onClick={() => setCurrStep(1)}
      >
        <Typography text="Back" variant="p" />
      </Button>

      <form>
        <Typography text="Add workspace avatar" className="my-4" />
        <Typography
          text="This image can be changed later in your workspace settings."
          className="text-neutral-300"
          variant="p"
        />

        <fieldset
          disabled={isSubmitting}
          className="mt-6 flex flex-col items-center space-y-9"
        >
          <ImageUpload />

          <div className="space-x-5">
            <Button
              onClick={() => {
                updateImageUrl("");
                handleSubmit();
              }}
            >
              <Typography text="Skip for now" variant="p" />
            </Button>

            {imageUrl ? (
              <Button
                type="button"
                size="sm"
                variant="destructive"
                onClick={handleSubmit}
              >
                <Typography text="Submit" variant="p" />
              </Button>
            ) : (
              <Button
                size="sm"
                className="text-white bg-gray-500"
                type="button"
              >
                <Typography text="Select and Image" variant="p" />
              </Button>
            )}
          </div>
        </fieldset>
      </form>
    </>
  );
};
