import React from 'react';
import { message, ColorPicker } from 'antd';

const CreateColorPicker = ({ enableSettingName, text, setEnableSettingName, enableDisabledOption }) => {
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
      <ColorPicker
        disabled={enableDisabledOption}
        color={enableSettingName}
        onChange={(value) => {
          setEnableSettingName(value);
          saveCurrentSetting(enableSettingName, value);
        }}
      />
    </div>
  );
};

export default CreateColorPicker;

/* exemplo de uso

      <CreateColorPicker
        enableSettingName={backgroundColor}
        text="Select Background Color:"
        setEnableSettingName={setBackgroundColor}
        enableDisabledOption={false}
      />

*/