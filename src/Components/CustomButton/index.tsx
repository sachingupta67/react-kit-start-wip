import React from 'react';

interface ICustomButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  label?: string | number;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  icon?: any;
  color?:
    | 'light'
    | 'primary'
    | 'secondary'
    | 'outline-secondary'
    | 'outline-success'
    | 'outline-danger'
    | 'disabled';
  className?: string;
}

const CustomButton: React.FC<ICustomButtonProps> = (props) => {
  const {
    onClick,
    label = '',
    disabled = false,
    size = 'medium',
    icon,
    color = 'primary',
    className = '',
  } = props;
  let btn = <></>;
  const isLableOnly = label !== null;
  const isIconOnly = icon !== null;
  const isBothLabelAndIcon = isLableOnly && isIconOnly;

  const overRideColor = disabled ? 'disabled' : color;

  btn = (
    <button
      type="button"
      disabled={disabled}
      className={`btn astm-btn ${color ? `btn-${overRideColor}` : ''} ${
        size ? `btn--${size}` : ''
      } ${className} `}
      onClick={onClick}>
      {label}
    </button>
  );

  // if (isBothLabelAndIcon) {
  //   btn = (
  //     <Button
  //       className={className}
  //       variant={variant}
  //       endIcon={icon}
  //       onClick={onClick}
  //       disabled={disabled}
  //       size={size}
  //       color={color}
  //       fullWidth={fullWidth}
  //     >
  //       {label}
  //     </Button>
  //   );
  // } else {
  //   if (isLableOnly) {
  //     btn = (
  //       <Button
  //         className={className}
  //         variant={variant}
  //         onClick={onClick}
  //         disabled={disabled}
  //         size={size}
  //         color={color}
  //         fullWidth={fullWidth}
  //       >
  //         {label}
  //       </Button>
  //     );
  //   }
  //   if (isIconOnly) {
  //     btn = (
  //       <IconButton aria-label="delete" size={size} color={color} onClick={onClick}>
  //         {icon}
  //       </IconButton>
  //     );
  //   }
  // }
  return btn;
};

export default CustomButton;
