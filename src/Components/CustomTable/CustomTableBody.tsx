import { TableBody, TableRow } from '@mui/material';
import _ from 'lodash';
import React from 'react';
import CustomTableCell from './CustomTableCell';
import NoDataCell from './NoDataCell';

interface ICustomTableBodyProps {
  data: any[];
  totalCells?: number;
  rows?: string[];
  omitCellKeys?: string[];
}

const CustomTableBody: React.FC<ICustomTableBodyProps> = (props) => {
  const { data, totalCells = 0, omitCellKeys = [] } = props;

  return (
    <TableBody>
      {data.length ? (
        data.map((item: any, i: number) => {
          const rowsValuesArr = _.values(_.omit(item, omitCellKeys)) || [];
          return (
            <TableRow key={i}>
              {rowsValuesArr.map.length
                ? rowsValuesArr.map((cell, i) => {
                    return <CustomTableCell val={cell} key={i} />;
                  })
                : null}
            </TableRow>
          );
        })
      ) : (
        <TableRow>
          <NoDataCell totalCells={totalCells} />
        </TableRow>
      )}
    </TableBody>
  );
};
export default React.memo(CustomTableBody);
