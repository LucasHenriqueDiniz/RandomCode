import { useEffect, useState } from "react";
import { Button, Form, Select, Popconfirm } from "antd";
import { sendCommand } from "./services/webClientService";
import { getCommandByName, getCommandOptionsByPin } from "./CommandFunctions";
import { getMicrocontrollerByModel } from "./MicrocontrollerFunctions";
import { ICommandGrid } from "./types/commandGrid";
import { Graphic } from "./components/Graphic";
import { ActiveCommand } from "./types/activeCommand";
import { CommandOption } from "./types/command";
import "./PinGrid.css";
import { PinGridForm } from "./components/PinGridForm";

export function getChannelNumber(pinNumber: number) {
  return pinNumber < 36 ? pinNumber - 28 : pinNumber - 36
}

export function PinGrid(props: ICommandGrid & { commandData: ActiveCommand }) {
  const { isOtherPinClicked, setIsOtherPinClicked, commandData, microcontroller, updateList } = props;

  const [isClicked, setIsClicked] = useState(false);
  const [editEnabled, setEditEnabled] = useState(false);

  function resetPinGrid() {
    setIsClicked(false);
    setIsOtherPinClicked(false);
    setEditEnabled(false);
  }

  function popConfirm() {
    if (isClicked) {
      setIsClicked(false);
      setIsOtherPinClicked(false);
      setEditEnabled(false);
    }

    sendCommand(commandData.pin_number, 'NULL', {});
    setTimeout(updateList, 500);
  }

  function onClickHandle() {
    if (!isClicked && !isOtherPinClicked) {
      setIsClicked(true);
      setIsOtherPinClicked(true);
    }
  }

  function onClickCancelHandle() {
    if (isClicked) {
      setIsClicked(false);
      setIsOtherPinClicked(false);
      setEditEnabled(false);
    }
  }

  if (!isClicked) {
    return (
      <div className="pinBlock" onClick={onClickHandle}>
        <div className="pinInfo">
          <p>{commandData.command}</p>
          <p>Nome do comando</p>
          <p>{commandData.pin_number}</p>
        </div>
        <div className="pinContent">
          {!!commandData.data?.length ? <p>Raw: {commandData.data.at(0)?.reading}</p> : <p>No data</p>}
        </div>
      </div>
    );
  }

  if (!editEnabled) {
    return (

      <div className="pinBlock" onClick={onClickHandle}>
        <div className="pinInfo">

          <p>{commandData.command}</p>
          <p>Meu teste</p>
          <p>{commandData.pin_number}</p>
        </div>
        <div className="pinContent">
          {!!commandData.data?.length ?
            <Graphic parsedData={commandData.data} maxGraphPoints={10} />
            :
            <p>
              No data
            </p>
          }

          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '75%' }}>

            <Button type="primary" key="edit" onClick={() => setEditEnabled(true)}>
              Edit
            </Button>
            <Button type="primary" danger onClick={onClickCancelHandle}>
              Cancel
            </Button>

            <Popconfirm
              title="Delete the command"
              description="Are you sure to delete this task?"
              onConfirm={popConfirm}
              onCancel={() => { }}
              okText="Yes"
              cancelText="No"
            >
              <Button type="text" style={{ backgroundColor: '#66cc66', color: '#fff' }}>
                Delete
              </Button>
            </Popconfirm>
          </div>
        </div>
      </div>
    );
  }

  return (
  <PinGridForm 
    resetPinGrid={resetPinGrid} 
    updateList={updateList} 
    commandData={commandData} 
    onPopConfirm={popConfirm}
    onClickHandle={onClickHandle}
    onClickCancelHandle={onClickCancelHandle}
    microcontroller={microcontroller}
  />
  )
}
