"use client"

import Header from "../../components/Header/Header";
import { useEffect, useState } from 'react';
import * as S from './Style'

export default function Myroom() {
  const dummy02 = [
    {
      key: 1,
      name: '1',
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/4478b151-233b-46f7-a046-388c45242477.png",
      imgae2:
        "https://www.burgerking.co.kr/dist/img/ico_flag_new02.250255f3.png",
      imgae3:
        "https://www.burgerking.co.kr/dist/img/ico_flag_new02.250255f3.png",
      imgae4:
        "https://www.burgerking.co.kr/dist/img/ico_flag_new02.250255f3.png",
    },
    {
      key: 2,
      name: '2',
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/4478b151-233b-46f7-a046-388c45242477.png",
      imgae2:
        "https://www.burgerking.co.kr/dist/img/ico_flag_new02.250255f3.png",
      imgae3:
        "https://www.burgerking.co.kr/dist/img/ico_flag_new02.250255f3.png",
      imgae4:
        "https://www.burgerking.co.kr/dist/img/ico_flag_new02.250255f3.png",
    },
    {
      key: 3,
      name: '3',
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/4478b151-233b-46f7-a046-388c45242477.png",
      imgae2:
        "https://www.burgerking.co.kr/dist/img/ico_flag_new02.250255f3.png",
      imgae3:
        "https://www.burgerking.co.kr/dist/img/ico_flag_new02.250255f3.png",
      imgae4:
        "https://www.burgerking.co.kr/dist/img/ico_flag_new02.250255f3.png",
    },
    {
      key: 4,
      name: '4',
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/4478b151-233b-46f7-a046-388c45242477.png",
      imgae2:
        "https://www.burgerking.co.kr/dist/img/ico_flag_new02.250255f3.png",
      imgae3:
        "https://www.burgerking.co.kr/dist/img/ico_flag_new02.250255f3.png",
      imgae4:
        "https://www.burgerking.co.kr/dist/img/ico_flag_new02.250255f3.png",
    },
    {
      key: 5,
      name: '5',
      image:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/4478b151-233b-46f7-a046-388c45242477.png",
      imgae2:
        "https://www.burgerking.co.kr/dist/img/ico_flag_new02.250255f3.png",
      imgae3:
        "https://www.burgerking.co.kr/dist/img/ico_flag_new02.250255f3.png",
      imgae4:
        "https://www.burgerking.co.kr/dist/img/ico_flag_new02.250255f3.png",
    },
  ];

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
  
  return (
    <S.Container>
      <Header />
      <S.NameDiv/>
        <S.NameBox>
          <S.UserName>{userName}</S.UserName>님의 마이룸
          <S.CountBall>{ dummy02.length }</S.CountBall>
        </S.NameBox>
      <S.NameBox2 />
      <S.MainDiv>
        <S.PicDiv>
          {dummy02.map((ele) => (
            <S.Pic key={ele.key}>
              <S.RoomName>
                <S.Rooms>
                  <S.RoomText>{ ele.name }</S.RoomText>
                  {/* <button className="bg-orange100 w-[100px] h-[36px] text-white rounded-lg text-sm"
                  >전체 다운로드</button> */}
                </S.Rooms>
              </S.RoomName>
                  <S.PictureTable>
                    <S.PicturesDiv>
                      <img src={ele.image} alt="" width={150} height={150} />
                    </S.PicturesDiv>
                    <S.PicturesDiv>
                      <img src={ele.image} alt="" width={150} height={150} />
                    </S.PicturesDiv>
                    <S.PicturesDiv>
                      <img src={ele.image} alt="" width={150} height={150} />
                    </S.PicturesDiv>
                    <S.PicturesDiv>
                      <img src={ele.image} alt="" width={150} height={150} />
                    </S.PicturesDiv>
                  </S.PictureTable>    
            </S.Pic>
          ))}
        </S.PicDiv>
      </S.MainDiv>
    </S.Container>
  )
}