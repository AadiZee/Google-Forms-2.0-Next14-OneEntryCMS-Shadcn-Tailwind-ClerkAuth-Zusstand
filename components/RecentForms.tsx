import { ArrowUpAz, Folder, List } from "lucide-react";
import { buttonVariants } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import IconButton from "./IconButton";
import { Suspense } from "react";
import { FormListSkeleton } from "./Skeletons";
import FormList from "./FormList";

const RecentForms = () => {
  return (
    <section className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <p className="font-medium">Recent Forms</p>

        <div className="flex items-center gap-x-12">
          <Select defaultValue="anyone">
            <SelectTrigger
              className={buttonVariants({
                variant: "ghost",
                className: "outline-none border-none gap-x-2 text-neutral-600",
              })}
            >
              <SelectValue placeholder="Owned by anyone" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="anyone">Owned by anyone</SelectItem>
              <SelectItem value="me">Owned by me</SelectItem>
              <SelectItem value="others">Not owned by me</SelectItem>
            </SelectContent>
          </Select>

          <div className="hidden md:flex items-center gap-x-1">
            <IconButton Icon={List} />
            <IconButton Icon={ArrowUpAz} />
            <IconButton Icon={Folder} />
          </div>
        </div>
      </div>

      <Suspense fallback={<FormListSkeleton />}>
        <FormList />
      </Suspense>
    </section>
  );
};

export default RecentForms;
