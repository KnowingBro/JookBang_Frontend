"use client";

import axios from "axios";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import * as S from "./Style";
import { useQuery } from "react-query";
import { getImages, getUserInfo } from "../../utils/api/auth";

interface ImagesType {
  name: string;
  originUrl: string;
  newUrl1: string;
  newUrl2: string;
  newUrl3: string;
  newUrl4: string;
}

export default function Myroom() {
  const [userName, setUserName] = useState("");
  const [images, setImages] = useState([]);
  const [accessToken, setAccessToken] = useState(false);

  useQuery(["user"], () => getUserInfo(), {
    onSuccess: (data) => {
      setUserName(data.name);
    },
    enabled: accessToken,
  });

  useQuery(["getImage"], () => getImages(), {
    onSuccess: (data) => {
      setImages(data);
    },
    enabled: accessToken,
  });

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setAccessToken(!accessToken);
    } else {
      setAccessToken(false);
    }
  }, [localStorage.getItem("accessToken")]);

  return (
    <S.Container>
      <Header />
      <S.NameDiv />
      <S.NameBox>
        <S.UserName>{userName}</S.UserName>님의 마이룸
        <S.CountBall>{accessToken ? images.length : 0}</S.CountBall>
      </S.NameBox>
      <S.NameBox2 />
      <S.MainDiv>
        <S.PicDiv>
          {accessToken ? (
            images.map((ele: ImagesType, index) => (
              <S.Pic key={index}>
                <S.RoomName>
                  <S.Rooms>
                    <S.RoomText>{ele.name}</S.RoomText>
                  </S.Rooms>
                </S.RoomName>
                <S.PictureTable>
                  <S.PicturesDiv>
                    <S.Img src={ele.newUrl1} alt="" width={150} height={150} />
                  </S.PicturesDiv>
                  <S.PicturesDiv>
                    <S.Img src={ele.newUrl2} alt="" width={150} height={150} />
                  </S.PicturesDiv>
                  <S.PicturesDiv>
                    <S.Img src={ele.newUrl3} alt="" width={150} height={150} />
                  </S.PicturesDiv>
                  <S.PicturesDiv>
                    <S.Img src={ele.newUrl4} alt="" width={150} height={150} />
                  </S.PicturesDiv>
                </S.PictureTable>
              </S.Pic>
            ))
          ) : (
            <></>
          )}
        </S.PicDiv>
      </S.MainDiv>
    </S.Container>
  );
}
