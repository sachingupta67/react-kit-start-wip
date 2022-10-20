import { Box, Table, TableCell, TableHead, TableRow } from '@mui/material';
import { userData } from '../../common/mock-data';
import CustomAutoSearch from '../CustomAutoSearch';
import { useState } from 'react';
import CustomTableBody from './CustomTableBody';
import { trimAndLowerCaseHandler } from '../../common/utility/handlers';
import CustomSearchField from '../CustomSearchField';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import CustomButton from '../CustomButton';

interface ICustomTableProps {
  data: any;
  headData: string[];
  isAutoCompleteSearch?: boolean;
  isGeneralSearch?: boolean;
  omitCellKeys?: string[];
}

const CustomTable: React.FC<ICustomTableProps> = (props) => {
  const {
    data,
    headData,
    isAutoCompleteSearch = false,
    isGeneralSearch = false,
    omitCellKeys = [],
  } = props;
  const [selected, setSelected] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage] = useState(24);

  const onAutoSearchItemClickHandler = (val: string): void => setSelected(val);
  const onSearchHandler = (val: string): void => setSelected(val);

  const backHandler = (): void => {
    setCurrentPage(currentPage - 1);
  };

  const forwardHandler = (): void => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <Box>
      {isGeneralSearch && (
        <CustomSearchField
          value={selected}
          onChangeHandler={(e) => onSearchHandler(e.target.value)}
        />
      )}
      {isAutoCompleteSearch && (
        <CustomAutoSearch
          data={userData}
          onClickOnItem={onAutoSearchItemClickHandler}
          placeHolder="Enter Title"
        />
      )}
      <Table>
        <TableHead>
          <TableRow>
            {headData.map((item: string, i: number) => {
              return <TableCell key={i}>{item}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <CustomTableBody
          totalCells={headData.length}
          omitCellKeys={omitCellKeys}
          data={
            data.length
              ? data
                  .filter(
                    (item: any, i: number) =>
                      i + 1 >= currentPage * 10 - 9 && i + 1 <= currentPage * 10
                  )
                  .filter((item: any) => {
                    if (selected.length > 0 && (!isAutoCompleteSearch || !isGeneralSearch)) {
                      if (isAutoCompleteSearch) {
                        return item.title === selected;
                      } else {
                        return trimAndLowerCaseHandler(item.title).match(
                          trimAndLowerCaseHandler(selected)
                        );
                      }
                    } else {
                      return item;
                    }
                  })
              : []
          }
        />
      </Table>
      <Box>
        <span style={{ border: '1px solid black', marginRight: '5px' }}>Rows per page: 9</span>
        <span>
          {currentPage} of {totalPage}
        </span>
        <CustomButton
          icon={<ArrowBackIosNewOutlinedIcon fontSize="small" />}
          onClick={backHandler}
          disabled={currentPage === 1}
        />
        <CustomButton
          icon={<ArrowForwardIosOutlinedIcon fontSize="small" />}
          onClick={forwardHandler}
          disabled={currentPage === totalPage}
        />
      </Box>
    </Box>
  );
};

export default CustomTable;
