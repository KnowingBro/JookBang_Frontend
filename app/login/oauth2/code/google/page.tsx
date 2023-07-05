"use client"

import { useRouter, useSearchParams } from 'next/navigation';
import { useQuery } from 'react-query';
import { postCode } from '../../../../../utils/api/auth';

export default function GoogleOauth() {
  const search = useSearchParams();
  const router = useRouter();
  const code = search.get('code') ?? "";

  useQuery("auth", () => postCode(code), {
    onSuccess: (data) => {
      console.log(data)
      const { accessToken, refreshToken } = data;
      
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      
      router.push('/');
    },
    onError: (error) => {
      console.log(error);
    }
  });

  return <></>;
}
