import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faCakeCandles,
  faInfoCircle,
  faGift,
  faFileAlt,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Input, Switch, Tab } from "../../atoms";
import { useClient } from "../../../hooks/useClient";
import { initialState } from "../../../states/client";

export default function Client(): JSX.Element {
  const [createClient, handleCreationOfClient] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const { client, updateClientInfo } = useClient();

  const resetClientCreation = () => {
    handleCreationOfClient(false);
    updateClientInfo(initialState);
  };

  return (
    <div className="p-5 bg-white rounded-lg flex flex-col gap-4">
      <div className="flex flex-row justify-between gap-4">
        <Input
          type="labelInside"
          placeholder="Choisir un client"
          icon={<FontAwesomeIcon icon={faCircleUser} />}
          wrapClassName="flex-1 max-w-[396px]"
          className="w-full"
          value={client.name}
          setValue={(value) => updateClientInfo({ ...client, name: value })}
          action={{
            btnText: "Créer",
            onClick: () => handleCreationOfClient(true),
            display: !createClient,
          }}
        />
        <Input
          type="labelInside"
          placeholder="Téléphone"
          wrapClassName="flex-1 max-w-[240px]"
          className="w-full"
          value={client.phone}
          setValue={(value) => updateClientInfo({ ...client, phone: value })}
          pattern="\+\d{1,3}\d{9}"
          disabled={!createClient}
        />
        <Input
          type="labelInside"
          placeholder="Email"
          wrapClassName="flex-1 max-w-[356px]"
          className="w-full"
          value={client.email}
          setValue={(value) => updateClientInfo({ ...client, email: value })}
          pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
          disabled={!createClient}
        />
        {createClient && (
          <Button
            variety="outline"
            size="l"
            className="w-[48px]"
            iconRight={<FontAwesomeIcon icon={faTrashAlt} />}
            type="reset"
            onClick={resetClientCreation}
          />
        )}
      </div>
      {createClient && (
        <div className="px-10 flex flex-col gap-4">
          <div className="flex flex-row gap-4 items-center justify-start">
            <Tab
              options={[
                { value: "homme", label: "Homme" },
                { value: "femme", label: "Femme" },
                { value: "enfant", label: "Enfant" },
              ]}
              onChange={(value) =>
                updateClientInfo({ ...client, gender: value })
              }
              icon={<FontAwesomeIcon icon={faUser} />}
              value={client.gender}
            />
            <Input
              type="double"
              icon={<FontAwesomeIcon icon={faCakeCandles} />}
              data={{
                input1Props: {
                  placeholder: "day",
                  value: "20",
                  setValue: () => {},
                  className: "w-[108px]",
                },
                input2Props: {
                  placeholder: "month",
                  value: "Sept",
                  setValue: () => {},
                  className: "w-[108px]",
                },
              }}
            />
            <Switch
              onChange={() =>
                updateClientInfo({
                  ...client,
                  toggleRappel: !client.toggleRappel,
                })
              }
              name="rappel"
              label="SMS de rappel"
              checked={client.toggleRappel}
            />
            <Switch
              onChange={() =>
                updateClientInfo({
                  ...client,
                  toggleMarketing: !client.toggleMarketing,
                })
              }
              name="marketing"
              label="SMS marketing"
              checked={client.toggleMarketing}
            />
          </div>
          <div className="flex flex-col gap-4">
            {showInfo ? (
              <Input
                type="labelInside"
                placeholder="Info client"
                wrapClassName="flex-1"
                className="w-full"
                value="Quam inposita tranquillis pleraeque sunt primigenia eis quae institutores ad."
                icon={<FontAwesomeIcon icon={faInfoCircle} />}
              />
            ) : (
              <Button
                size="m"
                className="!p-0 !m-0"
                variety="plain"
                iconLeft={<FontAwesomeIcon icon={faInfoCircle} />}
                onClick={() => setShowInfo(true)}
              >
                Info client
              </Button>
            )}
            <div className="flex flex-row items-center gap-5">
              <div className="flex flex-row gap-1 items-center">
                <Button
                  size="m"
                  className="!p-0 !m-0"
                  variety="plain"
                  iconLeft={<FontAwesomeIcon icon={faGift} />}
                >
                  Carte de fidélité
                </Button>
                <span className="text-[#5F706A] text-[13px] font-normal">
                  : Points : 42 - Gains : 10,00€ (+)
                </span>
              </div>
              <div className="flex flex-row gap-1 items-center">
                <Button
                  size="m"
                  className="!p-0 !m-0"
                  variety="plain"
                  iconLeft={<FontAwesomeIcon icon={faFileAlt} />}
                >
                  Forfait brushing par 5 - cheveux courts
                </Button>
                <span className="text-[#5F706A] text-[13px] font-normal">
                  (4)
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
