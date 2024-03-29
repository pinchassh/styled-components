import {toast} from 'react-toastify';

export const toastError = (message: string) => {
  toast.error(message, {
    // position: toast.POSITION.BOTTOM_CENTER,
    autoClose: 1500,
  });
};

export const toastSuccess = (message: string) => {
  toast.success(message, {
    // position: toast.POSITION.BOTTOM_CENTER,
    autoClose: 1500,
  });
};