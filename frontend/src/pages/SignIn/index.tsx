import React from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FormSignin } from '../../components/form-login';
import { signIn } from '../../services/auth';
import { setItem } from '../../utils/local-storage';
import { onSuccessAuth } from '../../features/user/userSlice';

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { mutateAsync, isLoading } = useMutation<any>(signIn, {
    onError: (error: any) => {
      console.log(error);
    },
    onSuccess(response: any) {
      dispatch(onSuccessAuth(response.data));
      setItem('token', response.data);
      navigate('/dashboard');
    },
  });

  return (
    <>
      <FormSignin signIn={mutateAsync} isLoading={isLoading} />
    </>
  );
}

export { SignIn };