import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

interface ICustomAutoSearchProps {
  data: any[];
  onClickOnItem?: any;
  placeHolder?: string;
  label?: string;
  searchLimit?: number;
  className?: string;
}

const CustomAutoSearch: React.FC<ICustomAutoSearchProps> = (props) => {
  const { data, onClickOnItem, placeHolder = '', label, searchLimit, className } = props;
  const OPTIONS_LIMIT = searchLimit || 5;
  const filterOptions = createFilterOptions({
    limit: OPTIONS_LIMIT,
  });

  return (
    <Autocomplete
      className={className}
      freeSolo
      selectOnFocus
      filterOptions={filterOptions}
      disableClearable
      onInputChange={(_e, val, reason) => {
        if (reason === 'reset') {
          onClickOnItem(val);
        } else {
          onClickOnItem('');
        }
      }}
      size="small"
      options={data.map((option) => option.title)}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          placeholder={placeHolder || ''}
          InputProps={{
            ...params.InputProps,
            type: 'search',
          }}
        />
      )}
    />
  );
};

export default CustomAutoSearch;
