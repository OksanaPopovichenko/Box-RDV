/* eslint-disable react/button-has-type */
import React, { ReactNode } from "react";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variety: "primary" | "secondary" | "destructive" | "plain" | "outline";
  size: "xl" | "l" | "m" | "s";
  iconRight?: ReactNode;
  iconLeft?: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button(props: ButtonProps): JSX.Element {
  const {
    children,
    variety = "primary",
    size = "medium",
    iconRight,
    iconLeft,
    type = "button",
    onClick,
    ...rest
  } = props;

  const varietyList: { [key: string]: string } = {
    primary: "bg-[#48BB78] hover:bg-[#38A169]",
    secondary: "bg-[#2C5282] hover:bg-[#1F4282]",
    destructive: "bg-[#F56565] hover:bg-[#E53E3E]",
    outline:
      "bg-transparent border border-[#5F706A] text-[#34423E] hover:border-[#7F8C88] hover:text-[#5F706A]",
    plain:
      "bg-transparent p-0 m-2.5 text-[#34423E] rounded-none hover:text-[#5F706A]",
    common:
      "text-white leading-4 cursor-pointer font-semibold flex flex-row items-center",
  };

  const sizeList: { [key: string]: string } = {
    xl: "rounded-md p-[18px] text-[13px] gap-2",
    l: "rounded-md p-3.5 text-[13px] gap-2",
    m: "rounded p-2.5 text-[13px] gap-2",
    s: "rounded p-2 text-[13px] gap-1",
  };

  return (
    <button
      type={type}
      className={`${varietyList.common} ${varietyList[variety]} ${sizeList[size]}`}
      {...rest}
    >
      {iconLeft}
      {children && (
        <span
          className={
            variety === "plain"
              ? "border-b border-[#5F706A] hover:border-[#7F8C88]"
              : "border-0"
          }
        >
          {children}
        </span>
      )}
      {iconRight}
    </button>
  );
}
