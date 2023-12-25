import { ReactNode, RefAttributes } from "react";
import { Link, LinkProps } from "react-router-dom";

interface ILinkProps extends RefAttributes<HTMLAnchorElement>, LinkProps {
  title: string;
  height?: string;
  width?: string;
  className?: string;
  children?: ReactNode;
}
const ButtonLink = ({
  title,
  className,
  height = "h-8",
  width = "w-20",
  children,
  ...rest
}: ILinkProps) => {
  return (
    <>
      <Link
        className={`flex items-center justify-center gap-1 capitalize  ${height} ${width}  rounded ${className}`}
        {...rest}
      >
        {children && <span>{children}</span>}
        {title}
      </Link>
    </>
  );
};

export default ButtonLink;
