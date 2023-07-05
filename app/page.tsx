"use client";
import Link from "next/link";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SquigglyLines from "../components/SquigglyLines";
import Image from "next/image"; // Import the Image component
import * as S from "./Style";
import Main01 from "../public/asset/MainImage01.png";
import Main02 from "../public/asset/MainImage02.png";

export default function HomePage() {
  return (
    <>
      <S.Container>
        <Header />
        <S.MainText>
          <S.Title>
            <S.Under />
            <span>AI와 함께 당신이 원하던방을 만들어보세요</span>
          </S.Title>
          <S.SubTitle>
            방 사진을 업로드하고 죽방AI가 리모델링한 새로운 방을
            둘러보세요.죽방은 방의 새로운 가치를 발굴합니다.
          </S.SubTitle>
        </S.MainText>
        <Link href="/dream">
          <S.Btn>내 방 리모델링하기</S.Btn>
        </Link>
        <S.MainImages>
          <div>
            <Image src={Main01} alt="Main Image 1" width={582} />
            <S.Name>Before</S.Name>
          </div>
          <div>
            <Image src={Main02} alt="Main Image 2" width={582} />
            <S.Name>After</S.Name>
          </div>
        </S.MainImages>
      </S.Container>
      <Footer />
    </>
  );
}
