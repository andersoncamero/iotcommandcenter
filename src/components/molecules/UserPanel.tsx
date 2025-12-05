import { LogOut, User } from "lucide-react";
import type React from "react";
import { Lable } from "../atoms/Label";
import { Button } from "../atoms/Button";

interface UserPanelProps {
    userName: string
}

export const UserPanel: React.FC<UserPanelProps> = ({userName}) => {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center md:flex-wrap">
      <div className="flex flex-col gap-2 sm:flex-row md:flex-wrap ">
        <div className="rounded-full shadow-sm p-4">
          <User className="w-6 h-6"></User>
        </div>
        <div className="pt-4 flex flex-col">
          <Lable className="text-left">Hola, bienvenido</Lable>
          <Lable className="text-left">{userName}</Lable>
        </div>
      </div>
      <Button className="gap-2 inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold text-[#0b2536] bg-white border border-[rgba(11,37,54,0.06)]">
        <LogOut className="w-4 h-4" />
      </Button>
    </div>
  );
};
