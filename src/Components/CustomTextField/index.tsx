import * as React from 'react';
import './styles.scss';

interface ICustomTextFieldProps {
  type?: 'text' | 'email' | 'number' | 'search' | 'password';
  label?: string;
  className?: string;
  placeholder?: string;
  iconStart?: React.ReactElement;
  iconEnd?: React.ReactElement;
  onIconClickHandler?: React.MouseEventHandler<HTMLDivElement>;
  onChangeHandler?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  helperText?: string;
  error?: boolean;
  value?: string;
  id?: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const CustomTextField: React.FC<ICustomTextFieldProps> = (props) => {
  const {
    type = 'text',
    className = '',
    label,
    placeholder,
    iconEnd,
    onChangeHandler,
    helperText,
    error = false,
    value = '',
    id = '',
    onBlur,
  } = props;

  return (
    <div className={`form-group ${className}`}>
      {label ? (
        <label htmlFor={id} className={error ? 'is-invalid' : ''}>
          {label}
        </label>
      ) : (
        <></>
      )}
      <input
        type={type}
        className={`form-control ${error ? 'is-invalid' : ''}`}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
        onBlur={onBlur}
      />
      {iconEnd ? <div className="input-group-append">{iconEnd}</div> : <></>}
      {error ? <div className="invalid-feedback">{helperText}</div> : <></>}
    </div>
  );
};

export default CustomTextField;
