import React, { ReactElement, ReactNode } from "react";
import Image from "next/image";
interface ButtonProps {
  onClick?: () => void;
  children: string;
  className?: string;
  icon?: ReactElement;
}

export const Button: React.FC<ButtonProps> = <
  PROPS extends ButtonProps & React.HTMLAttributes<any>
>({
  onClick,
  children,
  className,
  icon,
  ...rest
}: PROPS): JSX.Element => {
  return (
    <button
      {...rest}
      className={className}
      id="ctn__button"
      onClick={onClick}
      type="button"
    >
      {icon && icon}
      {children}
    </button>
  );
};
