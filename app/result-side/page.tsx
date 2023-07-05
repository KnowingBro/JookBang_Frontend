"use client"
import Link from "next/link";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import * as S from "./Style"
import React from "react";

const Result = () => {
    return (
        <>
           <S.Container>
                <Header />
                <S.MainBox>
                    <S.Title>방 리모델링 완료!</S.Title>
                    <S.ToggleArea>
                        <Link href="/result-side"><S.Btn>나란히 보기</S.Btn></Link>
                        <Link href="/result-overlap"><S.Btn style={{backgroundColor: "#F7F7F7", color: "#828282"}}>겹쳐서 보기</S.Btn></Link>
                    </S.ToggleArea>
                    <S.ImgArea>
                        
                    </S.ImgArea>
                </S.MainBox>
            </S.Container>
            <Footer />
        </>
    );
};

export default Result;