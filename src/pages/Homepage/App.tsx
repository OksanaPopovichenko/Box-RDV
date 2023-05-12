import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCheck } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../components/atoms";
import { Card, ButtonGroup } from "../../components/molecules";
import { Client, Date, Tabbar } from "../../components/organisms";

function App(): JSX.Element {
  return (
    <div className="bg-[#CDCDCD] min-h-screen h-full w-full py-4">
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
        footer={<Tabbar state="choisi & venu" />}
      >
        <Client />
        <Date />
      </Card>
    </div>
  );
}

export default App;
