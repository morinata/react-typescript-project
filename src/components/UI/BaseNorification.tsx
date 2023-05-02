import React, {FC} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';
import {ToastPosition} from 'react-toastify/dist/types';

interface IProps {
  hideProgressBar: boolean;
  pauseOnHover: boolean;
  autoClose: number;
  position?: ToastPosition;
}

const BaseNotification: FC<IProps> = ({hideProgressBar, pauseOnHover, position = "top-right", autoClose}) => (
  <ToastContainer
    pauseOnHover={pauseOnHover}
    position={position}
    hideProgressBar={hideProgressBar}
    autoClose={autoClose}
  />
);

export default BaseNotification;