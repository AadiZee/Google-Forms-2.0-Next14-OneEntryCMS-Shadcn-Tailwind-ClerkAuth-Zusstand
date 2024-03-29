"use client";
import IconButton from "./IconButton";
import { SearchIcon } from "lucide-react";
import { useCommandDialogStore } from "@/store/store";

const SearchMobile = () => {
  const { open } = useCommandDialogStore();
  return <IconButton Icon={SearchIcon} onClick={open} className="md:hidden" />;
};

export default SearchMobile;
