'use client'
import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import * as S from "./Style";

export default function Header() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    async function fetchUserName() {
      try {
        const response = await fetch('http://192.168.10.142:8080/user', {
          headers: {
            Authorization: `Bearer ${localStorage.accessToken}`,
          },
        });
        const data = await response.json();
        setUserName(data.name);
      } catch (error) {
        console.error('Failed to fetch user name:', error);
      }
    }

    if (localStorage.accessToken) {
      fetchUserName();
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <S.Container>
      <Link href="/" className="flex space-x-2">
        <Image
          alt="header text"
          src="/asset/logo.svg"
          width={81}
          height={32}
        />
      </Link>
      <div>
        {localStorage.accessToken ? (
          <>
            <button className="bg-orange100 w-[88px] h-[36px] text-white mr-3 rounded-lg">
              마이룸{/* {userName} */}
            </button>
            <button
              className="bg-gray100 w-[88px] h-[36px] text-gary200 rounded-lg"
              onClick={handleLogout}
            >
              로그아웃
            </button>
          </>
        ) : (
          <Link href={process.env.NEXT_PUBLIC_OAUTH_URI as string}>
            <S.Btn>로그인</S.Btn>
          </Link>
        )}
      </div>
    </S.Container>
  );
}
