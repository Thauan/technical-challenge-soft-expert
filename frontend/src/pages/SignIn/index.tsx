import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FormSignin } from '../../components/form-login';
import { signIn } from '../../services/auth';
import { setItem } from '../../utils/local-storage';
import { onSuccessAuth } from '../../features/user/userSlice';
import { Alert, Snackbar } from '@mui/material';

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [typeSnackBar, setTypeSnackBar] = useState<any>("success");
  const [messageSnackBar, setMessageSnackBar] = useState<any>("");
  const [isLoading, setLoading] = useState(false);

  const login = async (user: any) => {
    try {
      setLoading(true);
      const response = await signIn(user);
      dispatch(onSuccessAuth(response?.data?.data));
      setItem('user', response?.data?.data);
      navigate('/dashboard');
    } catch (error: any) {
      setOpen(true)
      setTypeSnackBar("error");
      setMessageSnackBar(error?.response?.data?.message);
    }

    setLoading(false);
  }

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <FormSignin signIn={login} isLoading={isLoading} />
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={typeSnackBar} sx={{ width: '100%' }}>
          {messageSnackBar}
        </Alert>
      </Snackbar>
    </>
  );
}

export { SignIn };