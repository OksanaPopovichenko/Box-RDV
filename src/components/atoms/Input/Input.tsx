/* eslint-disable no-unneeded-ternary */
import React, { ReactNode, useState, useRef, useEffect } from "react";
import Button from "../Button/Button";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  type: "simple" | "labelInside" | "double";
  placeholder?: string;
  className?: string;
  wrapClassName?: string;
  pattern?: string;
  value?: string;
  setValue?: (value: string) => void;
  icon?: ReactNode;
  action?: {
    btnText: string;
    onClick: () => void;
    display?: boolean;
  };
  disabled?: boolean;
  data?: {
    input1Props: {
      value?: string;
      placeholder?: string;
      setValue?: (value: string) => void;
      className?: string;
      disabled?: boolean;
    };
    input2Props: {
      value?: string;
      placeholder?: string;
      setValue?: (value: string) => void;
      className?: string;
      disabled?: boolean;
    };
  };
}

export default function Input(props: InputProps): JSX.Element {
  const {
    type,
    placeholder,
    className,
    wrapClassName,
    value,
    setValue,
    icon,
    action,
    data,
    pattern,
    ...rest
  } = props;

  const [inputValue, setInputValue] = useState(value ? value : "");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    if (setValue) {
      setValue(newValue);
    }
  };

  useEffect(() => {
    setInputValue(value ? value : "");
  }, [value]);

  const handleLabelClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const typeList: { [key: string]: string } = {
    simple:
      "border border-[#ECEEED] rounded-md px-3 py-4 focus:outline-none focus:border-[#48BB78] focus:shadow-sm disabled:bg-[#ECEEED]",
    double:
      "text-center border border-[#ECEEED] px-3 py-4 focus:outline-none focus:border-[#48BB78] focus:shadow-sm disabled:bg-[#F9F9F9]",
    labelInside:
      "border border-[#ECEEED] rounded-md px-3 py-4 focus:outline-none focus:border-[#48BB78] focus:shadow-sm disabled:bg-[#ECEEED]",
    common:
      "text-[#34423E] text-[13px] leading-4 h-12 placeholder-[#7F8C88] cursor-text",
  };

  return (
    <div className={wrapClassName}>
      {type !== "double" ? (
        <div className="flex flex-row items-center gap-2.5">
          {icon && <div className="text-[#7F8C88] text-l">{icon}</div>}
          <div className="relative flex flex-1">
            <div className="relative flex flex-1">
              <input
                type="text"
                placeholder={type !== "labelInside" ? placeholder : ""}
                className={`${typeList.common} ${typeList[type]} ${
                  inputValue && type === "labelInside" ? "pt-6 pb-2" : ""
                } ${action ? "pr-[71px]" : ""} ${className || ""}`}
                value={inputValue}
                onChange={handleChange}
                ref={inputRef}
                pattern={pattern}
                {...rest}
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
            {inputValue && action && action.display && (
              <div className="absolute right-2 top-2">
                <Button variety="primary" size="s" onClick={action.onClick}>
                  {action.btnText}
                </Button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-row gap-2 items-center">
          {icon && <div className="text-[#7F8C88] text-l">{icon}</div>}
          <div className="flex flex-row">
            <input
              type="text"
              placeholder={data?.input1Props.placeholder}
              className={`${typeList.common} ${typeList[type]} ${
                data?.input1Props.className || ""
              } rounded-l-md border-r-[0.5px]`}
              value={data?.input1Props.value}
              disabled={data?.input1Props?.disabled}
            />
            <input
              type="text"
              placeholder={data?.input2Props.placeholder}
              className={`${typeList.common} ${typeList[type]} ${
                data?.input2Props.className || ""
              } rounded-r-md border-l-[0.5px]`}
              value={data?.input2Props.value}
              disabled={data?.input2Props?.disabled}
            />
          </div>
        </div>
      )}
    </div>
  );
}
