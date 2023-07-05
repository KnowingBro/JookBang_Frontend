'use client'
import Image from "next/image";
import Link from "next/link";
import * as S from "./Style";

export default function Header() {
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
      <Link href="/login"><S.Btn>로그인</S.Btn></Link>
    </S.Container>
  );
}