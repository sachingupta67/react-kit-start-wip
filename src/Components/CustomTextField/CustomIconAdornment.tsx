import React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import { Box } from '@mui/material';

interface ICustomIconAdornmentProps {
  iconStart?: React.ReactElement;
  iconEnd?: React.ReactElement;
  onIconClickHandler?: React.MouseEventHandler<HTMLDivElement>;
}
const CustomIconAdornment: React.FC<ICustomIconAdornmentProps> = (props) => {
  const { iconEnd, iconStart, onIconClickHandler } = props;
  return (
    <>
      {iconStart && (
        <InputAdornment position="start">
          <Box onClick={onIconClickHandler}>{iconStart}</Box>
        </InputAdornment>
      )}
      {iconEnd && (
        <InputAdornment position="end">
          <Box onClick={onIconClickHandler}>{iconEnd}</Box>
        </InputAdornment>
      )}
    </>
  );
};

export default CustomIconAdornment;
