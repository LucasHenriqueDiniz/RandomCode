import React from 'react';
import { message, Select } from 'antd';

const { Option } = Select;

const CreateSelector = ({ enableSettingName, text, setEnableSettingName, enableDisabledOption, options }) => {
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
      <Select
        disabled={enableDisabledOption}
        value={enableSettingName}
        onChange={(value) => {
          setEnableSettingName(value);
          saveCurrentSetting(enableSettingName, value);
        }}
      >
        {options.map((option) => (
          <Option key={option} value={option}>
            {option}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default CreateSelector;


/* EXEMPLO DE USO

      <ConfigurationItem
        enableSettingName={borderStyle}
        text="Select Border Style:"
        setEnableSettingName={setBorderStyle}
        enableDisabledOption={false}
        options={['solid', 'dotted', 'dashed', 'double', 'groove', 'ridge', 'inset', 'outset', 'none']}
      />

*/      