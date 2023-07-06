export type themeType =
  | "모던"
  | "빈티지"
  | "미니멀리스트"
  | "프로페셔널"
  | "트로피칼"
  | "옵션을 선택하세요";

export type roomType =
  | "거실"
  | "식당"
  | "침실"
  | "화장실"
  | "사무실"
  | "옵션을 선택하세요";

export const themes: themeType[] = [
  "모던",
  "미니멀리스트",
  "프로페셔널",
  "트로피칼",
  "빈티지",
];
export const rooms: roomType[] = ["거실", "식당", "사무실", "침실", "화장실"];
