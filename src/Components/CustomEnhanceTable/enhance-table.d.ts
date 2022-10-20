interface IHeadRows {
  headRows: Array<{ label: string; key: string }>;
}

interface IBodyProps {
  data: any[];
  headRows: Array<{ label: string; key: string; isReactComp?: boolean }>;
  rowsUI?: any;
}

interface ICustomEnhanceTableProps {
  data: any[];
  headRows: Array<{ label: string; key: string; isReactComp?: boolean }>;
  rowsPerPage?: number;
  rowsUI?: any;
}

interface INoDataProps {
  colSpan: number;
}

interface IPaginationProps {
  dataForPagination: number[];
  isPrevDisabled: Boolean;
  prevHandler: React.MouseEventHandler<HTMLLIElement>;
  currentPage: number;
  dynamicPageCount: number;
  currentPageHandler: any;
  isNextDisabled: Boolean;
  nextHandler: React.MouseEventHandler<HTMLLIElement>;
}
export { IBodyProps, ICustomEnhanceTableProps, IHeadRows, INoDataProps, IPaginationProps };
