import type React from "react";
import { Button } from "../atoms/Button";
import { Link } from "react-router";

interface ButtonGroupProps {
  className?: string;
  linkTo: string;
  label: string;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  className,
  linkTo,
  label,
}) => {
  return (
    <div>
      <Link to={linkTo}>
        <Button className={className}>
          {label}
        </Button>
      </Link>
    </div>
  );
};



