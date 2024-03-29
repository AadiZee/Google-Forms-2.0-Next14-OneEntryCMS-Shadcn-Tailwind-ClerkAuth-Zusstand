import { IFormsEntity } from "oneentry/dist/forms/formsInterfaces";
import React, { Suspense } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import IconButton from "./IconButton";
import { FolderIcon, MoreVertical, StarIcon } from "lucide-react";
import SendForm from "./SendForm";
import { UserButton } from "@clerk/nextjs";
import FormPageHeaderBottom from "./FormPageHeaderBottom";
import { FormPageHeaderBottomSkeleton } from "./Skeletons";

const FormPageHeader = ({ form }: { form: IFormsEntity }) => {
  return (
    <header className="flex flex-col items-start sm:items-center gap-y-4 fixed w-full pt-4 px-4 bg-white shadow z-50">
      <div className="flex items-start w-full sm:items-center justify-between">
        <div className="flex flex-col sm:flex-row sm:items-center gap-y-4">
          <Button asChild variant={"ghost"} size={"icon"}>
            <Link href={"/dashboard"}>
              <Image src={logo} alt="logo" className="w-10 h-10" />
            </Link>
          </Button>

          <p className="pl-1 sm:pl-4 pr-3">{form.localizeInfos.title}</p>

          <IconButton Icon={FolderIcon} className="hidden sm:inline-flex" />
          <IconButton Icon={StarIcon} className="hidden sm:inline-flex" />
        </div>

        <div className="flex items-center gap-x-4">
          <SendForm />
          <IconButton Icon={MoreVertical} className="mr-2 sm:mr-0" />
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>

      <Suspense fallback={<FormPageHeaderBottomSkeleton />}>
        <FormPageHeaderBottom form={form} />
      </Suspense>
    </header>
  );
};

export default FormPageHeader;
