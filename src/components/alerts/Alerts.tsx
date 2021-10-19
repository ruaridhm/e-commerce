import { forwardRef, useContext, useState } from 'react';
//Context
import AlertContext from '../../context/alert/AlertContext';
//MUI
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const Alerts = () => {
  const alertContext = useContext(AlertContext);

  const [open, setOpen] = useState(true);
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      {alertContext.alerts.length > 0 &&
        alertContext.alerts.map((alert) => (
          <Snackbar
            key={alert.id}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          >
            <Alert
              onClose={handleClose}
              severity={alert.type}
              sx={{ width: '100%' }}
            >
              {alert.msg}
            </Alert>
          </Snackbar>
        ))}
    </>
  );
};

export default Alerts;
