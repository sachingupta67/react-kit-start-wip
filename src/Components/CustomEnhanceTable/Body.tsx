import React from 'react';
import { IBodyProps } from './enhance-table';
import NoData from './NoData';

const Body: React.FC<IBodyProps> = (props) => {
  const { data, headRows, rowsUI } = props;
  const isData = data.length !== 0;
  return (
    <tbody>
      {isData ? (
        data.map((item, i) => {
          return (
            <tr className="astm-table-tr" key={i}>
              {headRows.map((cell) => {
                const isReactComponent = cell.isReactComp;
                if (isReactComponent) {
                  return (
                    <td className="astm-table-td" key={cell.key}>
                      {rowsUI[cell.key](item)}
                    </td>
                  );
                }
                return (
                  <td className="astm-table-td" key={cell.key}>
                    {item[cell.key]}
                  </td>
                );
              })}
            </tr>
          );
        })
      ) : (
        <NoData colSpan={headRows.length} />
      )}
    </tbody>
  );
};

export default Body;
