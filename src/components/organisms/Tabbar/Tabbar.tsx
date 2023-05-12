import React from "react";
import { Button } from "../../atoms";
import {
  PayActions,
  ModifyActions,
  None,
  Venu,
  PasVenu,
  ChoisiVenu,
} from "./components";

interface TabbarProps {
  state: "choisie" | "pas venu" | "none" | "choisi & venu" | "venu";
}

export default function Tabbar(props: TabbarProps): JSX.Element {
  const { state } = props;

  return (
    <div className="flex justify-between flex-row items-center h-[80px]">
      {state === "choisie" && (
        <Button variety="plain" size="s">
          Choisi(e)
        </Button>
      )}
      {state === "none" && (
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-row gap-4 items-center">
            <None />
            <div className="w-[1px] h-[36px] bg-[#ECEEED]" />
            <ModifyActions />
          </div>
          <PayActions />
        </div>
      )}
      {state === "venu" && (
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-row gap-4 items-center">
            <Venu />
            <div className="w-[1px] h-[36px] bg-[#ECEEED] mr-2.5" />
            <ModifyActions />
          </div>
          <PayActions />
        </div>
      )}
      {state === "pas venu" && (
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-row gap-4 items-center">
            <PasVenu />
            <div className="w-[1px] h-[36px] bg-[#ECEEED] mr-2.5" />
            <ModifyActions />
          </div>
          <PayActions />
        </div>
      )}
      {state === "choisi & venu" && (
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-row gap-4 items-center">
            <ChoisiVenu />
            <div className="w-[1px] h-[36px] bg-[#ECEEED] mr-2.5" />
            <ModifyActions />
          </div>
          <PayActions />
        </div>
      )}
    </div>
  );
}
