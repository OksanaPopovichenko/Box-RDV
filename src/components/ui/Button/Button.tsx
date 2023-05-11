/* eslint-disable react/button-has-type */
import React, { ReactNode } from "react";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variety: "primary" | "secondary" | "destructive" | "plain" | "outline";
  size: "slim" | "medium" | "large";
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
    primary: "bg-green-500 hover:bg-green-600",
  };

  const sizeList: { [key: string]: string } = {
    medium: "text-md p-2",
  };

  return (
    <button
      type={type}
      className={`${varietyList[variety]} ${sizeList[size]}`}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
