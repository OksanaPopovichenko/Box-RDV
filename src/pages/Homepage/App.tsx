import React from "react";
import { Card, Button } from "../../components/ui";

function App(): JSX.Element {
  return (
    <div className="bg-[#CDCDCD] min-h-screen h-full w-full pt-4">
      <h1 className="text-center text-2xl font-bold color-[#34423E] py-3">
        Box RDV
      </h1>
      <Card
        header={{
          title: "Rendez-vous",
          buttonGroup: (
            <Button variety="primary" size="medium">
              Button
            </Button>
          ),
        }}
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </Card>
    </div>
  );
}

export default App;
