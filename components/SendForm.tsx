"use client";

import { Facebook, Link2, Send, Twitter } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import IconButton from "./IconButton";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import LinkTabContent from "./LinkTabContent";

const SendForm = () => {
  const tabs = [
    {
      value: "link",
      icon: Link2,
    },
  ] as const;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          <IconButton Icon={Send} className="md:hidden" />
          <Button variant={"brand"} size="sm" className="px-6 hidden md:inline">
            Send
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="p-0">
        <DialogHeader>
          <DialogTitle className="font-normal text-2xl px-4 py-3">
            Send form
          </DialogTitle>
          <DialogDescription className="bg-gray-100 text-accent-foreground flex justify-between items-center p-4">
            Collect email address
            <Select defaultValue="do-not-collect">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Do not collect" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="do-not-collect">Do not collect</SelectItem>
                <SelectItem value="verified">Verified</SelectItem>
                <SelectItem value="responder">Responder input</SelectItem>
              </SelectContent>
            </Select>
          </DialogDescription>
        </DialogHeader>
        <div>
          <Tabs defaultValue="link" className="p-0">
            <TabsList className="!w-full gap-x-5 px-4 pt-2 pb-0 bg-transparent h-full border-b flex items-center justify-between">
              <div className="flex items-center gap-x-3">
                <p className="text-sm font-medium mb-2">Send via</p>
                {tabs.map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="flex-col !p-0 group after:content-[''] after:h-[3px] data-[state=active]:after:bg-violet-900 after:w-full after:mt-2 after:rounded-t-full"
                    asChild
                  >
                    <div className="w-16 space-y-1.5 cursor-pointer">
                      <tab.icon className="w-5 h-5" />
                    </div>
                  </TabsTrigger>
                ))}
              </div>

              <div className="space-x-2">
                <IconButton Icon={Facebook} className="h-8 w-8" />
                <IconButton Icon={Twitter} className="h-8 w-8" />
              </div>
            </TabsList>

            <LinkTabContent />
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SendForm;
