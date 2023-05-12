import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCheck,
  faFileAlt,
  faPencilAlt,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../components/atoms";
import { Card, ButtonGroup } from "../../components/molecules";
import { Client, Date, Service, Tabbar } from "../../components/organisms";

function App(): JSX.Element {
  const [chosenServices, setChosenServices] = useState([{ id: uuidv4() }]); // eslint-disable-line

  const addService = () => {
    const newService = { id: uuidv4() }; // eslint-disable-line
    setChosenServices([...chosenServices, newService]);
  };

  const deleteService = (id: string) => {
    if (chosenServices.length === 1) {
      setChosenServices([]);
    } else {
      const updatedServices = chosenServices.filter(
        (service) => service.id !== id
      );
      setChosenServices(updatedServices);
    }
  };

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
        {chosenServices.map((service) => (
          <Service
            key={service.id} // eslint-disable-line
            numberOfServices={chosenServices.length}
            onDelete={() => deleteService(service.id)} // eslint-disable-line
          />
        ))}
        <div
          className="cursor-pointer flex flex-row justify-center rounded-md border border-dashed border-[#98A29F] p-4 items-center gap-2 text-[#5F706A]"
          aria-hidden="true"
          onClick={addService}
        >
          <FontAwesomeIcon icon={faPlusCircle} className="text-lg" />
          <span className="text-[13px]">Ajouter une prestation à la suite</span>
        </div>
        <div className="flex flex-row justify-start gap-4">
          <Button
            variety="plain"
            size="s"
            iconLeft={<FontAwesomeIcon icon={faFileAlt} />}
            className="!p-0 !m-0"
          >
            Ajouter un titre
          </Button>
          <Button
            variety="plain"
            size="s"
            iconLeft={<FontAwesomeIcon icon={faPencilAlt} />}
            className="!p-0 !m-0"
          >
            Ajouter une note
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default App;
