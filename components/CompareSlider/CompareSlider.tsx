"use client"
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import Slider from "react-slick"
import { styled } from "styled-components";

const PrevBtn = styled.button`
  width: 72px;
  height: 72px;
  border-radius: 36px;
  background-color: #F7F7F7;
  border: none;
  background-image: url(prev);
  background-size:cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CompareSlider = ({ original, restored }: {
  original: string;
  restored: string[];
}) => {
  const settings = {
    dots: true,
    Infinity: true,
    speed: 500,
    slidesToShow: 1,
    slideToScroll: 1,
    prev: <PrevBtn />,
    next: <PrevBtn />
  }
  return (
    <>
      <div style={{display: "flex", gap: "20px"}}>
        {restored.slice(0, 2).map((value, index) => {
          return (
            <ReactCompareSlider
              itemOne={<ReactCompareSliderImage src={original} alt="original photo" />}
              itemTwo={<ReactCompareSliderImage src={value} style={{ position: "absolute" }} alt="generated photo" />}
              className="flex w-[550px] mt-5 h-96"
              style={{ borderRadius: "16px" }}
            />
          )
        })}
      </div>
      <div style={{display: "flex", gap: "20px"}}>
        {restored.slice(2, 4).map((value, index) => {
          return (
            <ReactCompareSlider
              itemOne={<ReactCompareSliderImage src={original} alt="original photo" />}
              itemTwo={<ReactCompareSliderImage src={value} style={{ position: "absolute" }} alt="generated photo" />}
              className="flex w-[582px] mt-5 h-96"
              style={{ borderRadius: "16px" }}
            />
          )
        })}
      </div>
    </>
  );
};
