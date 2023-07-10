import React from 'react';
import { useMutation } from 'react-query';
import { FormSignin } from '../../components/form-login';
import { signIn } from '../../services/auth';
import { setItem } from '../../utils/local-storage';
import { useNavigate } from 'react-router-dom';

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const { mutateAsync, isLoading } = useMutation<any>(signIn, {
    onError: (error: any) => {
      console.log(error);
    },
    onSuccess(data: any) {
      setItem('token', data);
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