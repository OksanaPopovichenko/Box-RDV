import React from "react";
import { Button } from "../../atoms";

export interface TabbarProps {
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
    </div>
  );
}
