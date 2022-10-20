import { TableCell } from '@mui/material';
import React from 'react';

interface INoDataRowProps {
  totalCells?: number;
}

const NoDataCell: React.FC<INoDataRowProps> = ({ totalCells = 0 }) => {
  return (
    <TableCell colSpan={totalCells} align="center">
      No Data
    </TableCell>
  );
};

export default NoDataCell;
