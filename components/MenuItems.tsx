import { fetchMenuItems } from "@/lib/data";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import docs from "@/public/icons/docs.png";
import forms from "@/public/icons/forms.png";
import sheets from "@/public/icons/sheets.png";
import slides from "@/public/icons/slides.png";
import Image from "next/image";

const iconMap = {
  Docs: docs,
  Forms: forms,
  Sheets: sheets,
  Slides: slides,
};

const MenuItems = async () => {
  const menuItems: any = await fetchMenuItems("sidebargoogleforms");

  //   console.log(menuItems);

  return (
    <div className="flex flex-col border-y py-2">
      {menuItems &&
        menuItems?.pages &&
        menuItems?.pages.map((page: any) => (
          <Button
            key={page.id}
            asChild
            variant={"ghost"}
            className="justify-start px-6 w-[95%] gap-x-3 rounded-r-full"
          >
            <Link href={`/dashboard/${page.pageUrl}`}>
              <Image
                src={
                  iconMap[page.localizeInfos.menuTitle as keyof typeof iconMap]
                }
                alt={page.localizeInfos.menuTitle as string}
                width={15}
                height={15}
              />
              <p>{page.localizeInfos.menuTitle as string}</p>
            </Link>
          </Button>
        ))}
    </div>
  );
};

export default MenuItems;
