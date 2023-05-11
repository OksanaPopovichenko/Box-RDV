import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCheck } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../components/atoms";
import { Card, ButtonGroup } from "../../components/molecules";

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
            <ButtonGroup gap="m">
              <Button
                variety="outline"
                size="m"
                iconRight={
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    className="w-[18px] h-[18px]"
                  />
                }
              />
              <Button
                variety="primary"
                size="m"
                iconRight={
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="w-[20px] h-[20px]"
                  />
                }
              />
            </ButtonGroup>
          ),
        }}
      >
        <div className="py-5 px-7 flex flex-col gap-4">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </Card>
    </div>
  );
}

export default App;
