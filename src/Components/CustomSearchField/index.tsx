import React from 'react';
import CustomTextField from '../CustomTextField';

interface ICustomSearchFieldProps {
  onChangeHandler?: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  placeholder?: string;
  className?: string;
  resetInputField?: React.MouseEventHandler<HTMLElement>;
}
const CustomSearchField: React.FC<ICustomSearchFieldProps> = (props) => {
  const { onChangeHandler, value = '', placeholder = '', className = '', resetInputField } = props;
  return (
    <div className="search-input-group">
      <CustomTextField
        type="search"
        onChangeHandler={onChangeHandler}
        value={value}
        placeholder={placeholder}
        className={className}
        iconEnd={
          value.length !== 0 ? (
            <i className="fas fa-times" onClick={resetInputField}></i>
          ) : (
            <i className="fas fa-search"></i>
          )
        }
      />
    </div>
  );
};
export default CustomSearchField;
