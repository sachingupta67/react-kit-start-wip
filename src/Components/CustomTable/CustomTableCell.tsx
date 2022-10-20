import { TableCell } from '@mui/material';
import React from 'react';

interface ICustomTableCellProps {
  val?: string;
}
const CustomTableCell: React.FC<ICustomTableCellProps> = ({ val = '' }) => {
  return <TableCell>{val}</TableCell>;
};

export default CustomTableCell;
