/*global chrome*/

import React from 'react';
import { message, InputNumber, Input } from 'antd';

const CreateValueBox = ({
  enableSettingName,
  text,
  setEnableSettingName,
  enableDisabledOption,
  allowPositive,
  allowNegative,
  step,
  minValue,
  maxValue
}) => {
  const saveCurrentSetting = (name, value) => {
    chrome.storage.sync.set(
      {
        [name]: value
      },
      () => {
        message.success(`${value} foi salvo`); // Exibir mensagem de sucesso
      }
    );
  };

  const handleValueChange = (value) => {
    if ((allowPositive && value >= 0) || (allowNegative && value <= 0)) {
      setEnableSettingName(value);
      saveCurrentSetting(enableSettingName, value);
    }
  };

  return (
    <div className='configuration-item' id={enableSettingName}>
      <span>{text}</span>
      <InputNumber
        disabled={enableDisabledOption}
        value={enableSettingName}
        onChange={handleValueChange}
        min={minValue}
        max={maxValue}
        step={step}
        precision={2}
        formatter={(value) =>
          (allowNegative || value >= 0) ? `${value}` : `-${Math.abs(value)}`
        }
        parser={(value) =>
          (allowNegative || value >= 0) ? value.replace(/[^0-9.-]/g, '') : `-${value.replace(/[^0-9.]/g, '')}`
        }
      />
    </div>
  );
};


const CreateTextBox = ({
    enableSettingName,
    text,
    setEnableSettingName,
    enableDisabledOption,
  }) => {
    const saveCurrentSetting = (name, value) => {
      chrome.storage.sync.set(
        {
          [name]: value
        },
        () => {
          message.success(`${value} was saved`); // Display success message
        }
      );
    };
  
    return (
      <div className='configuration-item' id={enableSettingName}>
        <span>{text}</span>
        <Input
          disabled={enableDisabledOption}
          value={enableSettingName}
          onChange={(e) => {
            setEnableSettingName(e.target.value);
            saveCurrentSetting(enableSettingName, e.target.value);
          }}
        />
      </div>
    );
  };
  

export { CreateTextBox, CreateValueBox };

/*

<CreateValueBox
  enableSettingName={messageValue}
  text="Escreva a mensagem que vai ser mostrada"
  setEnableSettingName={setMessageValue}
  enableDisabledOption={false} // Provide the appropriate boolean value
  allowPositive={false}
  allowNegative={true}
  step={1}
  minValue={0}
  maxValue={100}
/>

*/
