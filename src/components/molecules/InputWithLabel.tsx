import type React from "react";
import { Lable } from "../atoms/Label";
import { Input } from "../atoms/Input";

interface InputWithLabelProps {
  classNameLable?: string;
  classNameInput?: string;
  lable: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  value: string;
  id: string;
  required?: boolean
}

export const InputWithLabel: React.FC<InputWithLabelProps> = ({
  classNameInput,
  classNameLable,
  lable,
  id,
  onChange,
  value, 
  placeholder = "",
  type,
  required=true
}) => {
  return (
    <div className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <Lable htmlFor={id} className={classNameLable}>
          {lable}
        </Lable>
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className={classNameInput}
        />
      </div>
    </div>
  );
};
