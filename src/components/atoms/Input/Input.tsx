/* eslint-disable no-unneeded-ternary */
import React, { ReactNode, useState, useRef } from "react";
import Button from "../Button/Button";

interface InputProps {
  type: "simple" | "labelInside" | "double";
  placeholder?: string;
  className?: string;
  value?: string;
  setValue?: (value: string) => void;
  icon?: ReactNode;
  action?: {
    btnText: string;
    onChange: () => void;
  };
}

export default function Input(props: InputProps): JSX.Element {
  const { type, placeholder, className, value, setValue, icon, action } = props;

  const [inputValue, setInputValue] = useState(value ? value : "");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    if (setValue) {
      setValue(newValue);
    }
  };

  const handleLabelClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const typeList: { [key: string]: string } = {
    simple:
      "border border-[#ECEEED] rounded-md px-3 py-4 focus:outline-none focus:border-[#48BB78] focus:shadow-sm",
    double: "",
    labelInside:
      "border border-[#ECEEED] rounded-md px-3 py-4 focus:outline-none focus:border-[#48BB78] focus:shadow-sm",
    common: "text-[13px] leading-4 h-12 placeholder-[#7F8C88] cursor-text",
  };

  return (
    <div className="flex flex-row items-center gap-2.5">
      {icon && <div className="text-[#7F8C88] text-xl">{icon}</div>}
      <div className="relative">
        <div className="relative">
          <input
            type="text"
            placeholder={type !== "labelInside" ? placeholder : ""}
            className={`${typeList.common} ${typeList[type]} ${
              inputValue && type === "labelInside" ? "pt-6 pb-2" : ""
            } ${action ? "pr-[71px]" : ""} ${className || ""}`}
            value={inputValue}
            onChange={handleChange}
            ref={inputRef}
          />
          {type === "labelInside" && (
            <label
              className={`absolute left-3 cursor-pointer text-[#7F8C88] transition-all ${
                inputValue
                  ? "top-2 text-[12px] text-[#7F8C88] leading-4"
                  : "top-3.5 text-[13px]"
              }`}
              htmlFor="input"
              onClick={handleLabelClick}
              aria-hidden="true"
            >
              {placeholder}
            </label>
          )}
        </div>
        {action && (
          <div className="absolute right-2 top-2">
            <Button variety="primary" size="s">
              {action.btnText}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
