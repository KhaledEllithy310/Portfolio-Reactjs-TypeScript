import { ReactNode } from "react";

interface IButtonProps {
  className?: string;
  children?: ReactNode;
}
const Button = ({ children, className }: IButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center gap-1 capitalize rounded ${className}`}
    >
      {children && <span>{children}</span>}
    </button>
  );
};

export default Button;
