"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { UploadDropzone } from "react-uploader";
import { Uploader } from "uploader";
import { CompareSlider } from "../../components/CompareSlider/CompareSlider";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import LoadingDots from "../../components/LoadingDots";
import ResizablePanel from "../../components/ResizablePanel";
import Toggle from "../../components/Toggle/Toggle";
import appendNewToName from "../../utils/appendNewToName";
import downloadPhoto from "../../utils/downloadPhoto";
import DropDown from "../../components/DropDown";
import { roomType, rooms, themeType, themes } from "../../utils/dropdownTypes";
import * as S from "./style";
import Link from "next/link";
import { styled } from "styled-components";
import { instance } from "../../utils/instance";
import { headers } from "next/headers";
import { useRouter } from "next/navigation";

// Configuration for the uploader
const uploader = Uploader({
  apiKey: !!process.env.NEXT_PUBLIC_UPLOAD_API_KEY
    ? process.env.NEXT_PUBLIC_UPLOAD_API_KEY
    : "free",
});

const options = {
  maxFileCount: 1,
  mimeTypes: ["image/jpeg", "image/png", "image/jpg"],
  editor: { images: { crop: false } },
  styles: {
    colors: {
      primary: "#FF6C3E", // Primary buttons & links
      error: "#d23f4d", // Error messages
      shade100: "#fff", // Standard text
      shade200: "#fffe", // Secondary button text
      shade300: "#fffd", // Secondary button text (hover)
      shade400: "#828282", // Welcome text
      shade500: "#fff9", // Modal close button
      shade600: "#A3A3A3", // Border
      shade700: "#000", // Progress indicator background
      shade800: "#00529a", // File item background
      shade900: "#ffff", // Various (draggable crop buttons, etc.)
    },
  },
};

const Container = styled.div<{ flag: boolean }>`
  width: 100%;
  height: 116vh;
  display: flex;
  flex-direction: column;
  padding: 0 123px;
  max-height: 200vh;
  height: ${({ flag }) => (flag ? "140vh" : "116vh")};
`;

const DEFAULT = "옵션을 선택하세요";
export default function DreamPage() {
  const route = useRouter();
  const [originalPhoto, setOriginalPhoto] = useState<string | null>(null);
  const [restoredImage, setRestoredImage] = useState<string[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [restoredLoaded, setRestoredLoaded] = useState<boolean>(false);
  const [sideBySide, setSideBySide] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [photoName, setPhotoName] = useState<string | null>(null);
  const [theme, setTheme] = useState<themeType>(DEFAULT);
  const [room, setRoom] = useState<roomType>(DEFAULT);
  const [isRemodeled, setIsRemodeled] = useState<boolean>(false);
  const [flag, setFlag] = useState<boolean>(false);
  const [nonchecked, setNonchecked] = useState<boolean>(false);

  const UploadDropZone = () => (
    <UploadDropzone
      uploader={uploader}
      options={options}
      onUpdate={(file) => {
        if (file.length !== 0) {
          setPhotoName(file[0].originalFile.originalFileName);
          setOriginalPhoto(file[0].fileUrl.replace("raw", "thumbnail"));
        }
      }}
      width="582px"
      height="280px"
    />
  );

  const click = () => {
    if (theme === DEFAULT || room === DEFAULT) {
      setNonchecked(true);
      return;
    }
    setNonchecked(false);
    generatePhoto(originalPhoto);
    setIsRemodeled(true);
  };

  async function generatePhoto(fileUrl: string | null) {
    await new Promise((resolve) => setTimeout(resolve, 200));
    setLoading(true);
    const newArr = [];
    for (let i = 0; i < 4; i++) {
      const res = await fetch("/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ imageUrl: fileUrl, theme, room }),
      });
      const newPhoto = await res.json();
      if (res.status !== 200) {
        setError(newPhoto);
      } else {
        newArr.push(newPhoto[1]);
      }
    }
    setRestoredImage(newArr);
    setTimeout(() => {
      setLoading(false);
    }, 1300);
  }

  useEffect(() => {
    console.log(restoredImage);
  }, [restoredImage]);

  const saveMyHome = () => {
    const name = theme + "한 " + room;
    if (restoredImage !== null) {
      const data = {
        name: name,
        originUrl: originalPhoto,
        newUrl1: restoredImage[0],
        newUrl2: restoredImage[1],
        newUrl3: restoredImage[2],
        newUrl4: restoredImage[3],
      };
      instance
        .post("/image", data, {
          headers: {
            Authorization: localStorage.accessToken,
          },
        })
        .then((response) => {
          console.log("good");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <Container flag={flag}>
        <Header />
        <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-4 sm:mb-0 mb-8">
          <S.H1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-slate-100 sm:text-6xl mb-5">
            방 리모델링하기
          </S.H1>
          <ResizablePanel>
            <AnimatePresence mode="wait">
              <motion.div className="flex justify-between items-center w-full flex-col mt-4">
                {!restoredImage && (
                  <>
                    <div className="space-y-4 w-full max-w-sm">
                      <div className="flex mt-3 items-center space-x-3">
                        <S.P1 className="text-left font-medium">
                          방 테마 선택하기
                        </S.P1>
                      </div>
                      <DropDown
                        theme={theme}
                        setTheme={(newTheme) =>
                          setTheme(newTheme as typeof theme)
                        }
                        themes={themes}
                      />
                    </div>
                    <div className="space-y-4 w-full max-w-sm">
                      <div className="flex mt-10 items-center space-x-3">
                        <S.P1 className="text-left font-medium">
                          방 유형 선택
                        </S.P1>
                      </div>
                      <DropDown
                        theme={room}
                        setTheme={(newRoom) => setRoom(newRoom as typeof room)}
                        themes={rooms}
                      />
                      {nonchecked && (
                        <div className="warning">옵션을 선택해주세요.</div>
                      )}
                    </div>
                    <div className="mt-4 w-full max-w-sm">
                      <div className="flex mt-6 w-96 items-center space-x-3">
                        <S.P2 className="text-left font-medium marginBottom">
                          방 사진 업로드
                        </S.P2>
                      </div>
                    </div>
                  </>
                )}
                {isRemodeled && (
                  <div
                    className={`${
                      !loading && restoredLoaded ? "visible mt-6" : "invisible"
                    }`}
                  >
                    <Toggle
                      className={`${
                        !loading && restoredLoaded
                          ? "visible mb-6"
                          : "invisible"
                      }`}
                      sideBySide={sideBySide}
                      setSideBySide={(newVal) => setSideBySide(newVal)}
                      setFlag={setFlag}
                    />
                  </div>
                )}
                {restoredLoaded && sideBySide && (
                  <CompareSlider
                    original={originalPhoto!}
                    restored={restoredImage!}
                  />
                )}
                {!originalPhoto && <UploadDropZone />}
                {originalPhoto && !restoredImage && (
                  <Image
                    alt="original photo"
                    src={originalPhoto}
                    className="rounded-2xl h-96"
                    width={582}
                    height={450}
                  />
                )}
                {originalPhoto && !restoredImage && (
                  <S.Button onClick={click}>
                    {loading ? (
                      <LoadingDots color="white" style="large" />
                    ) : (
                      "리모델링하기"
                    )}
                  </S.Button>
                )}
                {restoredImage && originalPhoto && !sideBySide && (
                  <div className="flex sm:space-x-4 sm:flex-row flex-col">
                    <div>
                      <Image
                        alt="original photo"
                        src={originalPhoto}
                        style={{
                          width: "582px",
                          height: "370px",
                          borderRadius: "16px",
                        }}
                        width={582}
                        height={370}
                      />
                      <h2 className="mb-1 font-medium text-lg h4">Before</h2>
                    </div>
                    <div className="sm:mt-0 mt-8">
                      <S.ResultImage>
                        {restoredImage.slice(0, 2).map((value: string) => {
                          return (
                            <Image
                              alt="restored photo"
                              style={{ borderRadius: "16px" }}
                              src={value}
                              width={281}
                              height={175}
                              onLoadingComplete={() => setRestoredLoaded(true)}
                            />
                          );
                        })}
                      </S.ResultImage>
                      <S.ResultImage>
                        {restoredImage.slice(2, 4).map((value: string) => {
                          return (
                            <Image
                              alt="restored photo"
                              style={{ borderRadius: "16px" }}
                              src={value}
                              width={281}
                              height={175}
                              onLoadingComplete={() => setRestoredLoaded(true)}
                            />
                          );
                        })}
                      </S.ResultImage>
                      <h2 className="mb-1 font-medium text-lg h4">After</h2>
                    </div>
                  </div>
                )}
                {error && (
                  <div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl mt-8"
                    role="alert"
                  >
                    <span className="block sm:inline">{error}</span>
                  </div>
                )}
                <div className="flex space-x-2 justify-center">
                  {restoredLoaded && (
                    <button
                      onClick={() => {
                        saveMyHome();
                        route.push("/myroom");
                      }}
                      className={`save ${!sideBySide && "sbs"}`}
                    >
                      마이홈에 저장
                    </button>
                  )}
                  {restoredLoaded && (
                    <button className={`download ${!sideBySide && "sbs"}`}>
                      다시 생성하기
                    </button>
                  )}
                  {restoredLoaded && (
                    <button
                      onClick={() => {
                        downloadPhoto(
                          restoredImage!,
                          appendNewToName(photoName!),
                        );
                      }}
                      className={`download ${!sideBySide && "sbs"}`}
                    >
                      전체 다운로드
                    </button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </ResizablePanel>
        </main>
      </Container>
      <Footer />
    </>
  );
}
