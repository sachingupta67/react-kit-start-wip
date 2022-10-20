import { TablePagination } from '@mui/material';
import React, { useEffect } from 'react';
import { trimAndLowerCaseHandler } from '../../common/utility/handlers';
import CustomSearchField from '../CustomSearchField';
import Body from './Body';
import { ICustomEnhanceTableProps } from './enhance-table';
import _ from 'lodash';
import Pagination from './Pagination';

const CustomEnhanceTable: React.FC<ICustomEnhanceTableProps> = (props) => {
  const { data, headRows, rowsUI } = props;
  const [rowsPerPage, setRowsPerPage] = React.useState(props.rowsPerPage || 10);
  const [page, setPage] = React.useState(0);
  const [freeSearch, setFreeSearch] = React.useState('');
  const [freeSearchData, setFreeSearchedData] = React.useState([] as any);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [dynamicPageCount, setDynamicPageCount] = React.useState(3);

  const totalData = data.length || 0;
  const numberOfPage =
    totalData % rowsPerPage === 0
      ? totalData / rowsPerPage
      : Math.floor(totalData / rowsPerPage) + 1;

  const isFrontDot = numberOfPage > 3 ? currentPage > 1 : false;
  const isBackDot = false;

  const dataForPagination = numberOfPage > 0 ? _.range(numberOfPage) : [];
  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = currentPage === numberOfPage;

  // TODO : It will be always 3 because of ASTM Stylesheet
  // const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>): void => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

  // const handleChangePage = (event: unknown, newPage: number): void => {
  //   setPage(newPage);
  // };
  const prevHandler = (): void => {
    if (!isPrevDisabled) {
      setCurrentPage(currentPage - 1);
      if (currentPage > 3 && currentPage <= dynamicPageCount) {
        setDynamicPageCount(currentPage - 1);
      }
    }
  };

  const nextHandler = (): void => {
    if (!isNextDisabled) {
      setCurrentPage(currentPage + 1);
      if (currentPage >= dynamicPageCount) {
        setDynamicPageCount(currentPage + 1);
      }
    }
  };

  const currentPageHandler = (page = 1): void => {
    setCurrentPage(page);
    if (numberOfPage !== dynamicPageCount && page === dynamicPageCount) {
      setDynamicPageCount(page + 2);
    }
  };
  const resetInputField = (): void => {
    setFreeSearch('');
  };
  useEffect(() => {
    if (freeSearch.length) {
      let filterData = [] as any;
      if (data.length) {
        filterData = data.filter((item) => {
          const valuesArr = _.values(item) || [];
          return trimAndLowerCaseHandler(valuesArr.join()).match(freeSearch);
        });
      }
      setFreeSearchedData(filterData);
    } else {
      setFreeSearchedData(data);
    }
  }, [data, freeSearch]);

  return (
    <div>
      <CustomSearchField
        value={freeSearch}
        placeholder="Search..."
        onChangeHandler={(e) => setFreeSearch(e.target.value)}
        resetInputField={resetInputField}
      />

      <table className="table table-striped astm-table">
        <thead>
          <tr className="astm-table-tr">
            {headRows.map((item, i) => (
              <th scope="col" key={i}>
                {item.label}
              </th>
            ))}
          </tr>
        </thead>

        <Body
          data={
            freeSearchData.length
              ? freeSearchData.slice(
                  page * rowsPerPage,
                  Number(page * rowsPerPage) + Number(rowsPerPage)
                )
              : []
          }
          headRows={headRows || []}
          rowsUI={rowsUI}
        />
      </table>
      <Pagination
        dataForPagination={dataForPagination}
        isPrevDisabled={isPrevDisabled}
        prevHandler={prevHandler}
        currentPage={currentPage}
        dynamicPageCount={dynamicPageCount}
        currentPageHandler={(val: number) => currentPageHandler(val)}
        isNextDisabled={isNextDisabled}
        nextHandler={nextHandler}
      />
    </div>
  );
};

export default CustomEnhanceTable;
