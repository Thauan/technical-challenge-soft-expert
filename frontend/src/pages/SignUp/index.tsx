import React from 'react';
import { useMutation } from 'react-query';
import { FormSignUp } from '../../components/form-register';
import { signUp } from '../../services/auth';
import { setItem } from '../../utils/local-storage';

const SignUp: React.FC = () => {
  const { mutateAsync, isLoading } = useMutation<any>(signUp, {
    onError: (error: any) => {
      console.log(error);
    },
    onSuccess(data: any) {
      setItem('token', data)
    },
  });

  return (
    <>
      <FormSignUp signUp={mutateAsync} isLoading={isLoading} />
    </>
  );
}

export { SignUp };