import React, { useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useAppSelector } from '../../core/redux';
import { commonSelector } from '../../core/redux/selector/common';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomToast: React.FC = () => {
  const { err, success } = useAppSelector(commonSelector);
  const [open, setOpen] = React.useState(true);

  const handleClose = (): void => {
    setOpen(false);
  };

  useEffect(() => {
    setOpen(Boolean(err.msg || success || false));
  }, [err, success]);

  let jsx = <></>;
  if (err.msg || success) {
    const severity = err.msg ? 'error' : 'success';
    jsx = (
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
            {err.msg || success}
          </Alert>
        </Snackbar>
      </Stack>
    );
  }
  return jsx;
};

export default CustomToast;
