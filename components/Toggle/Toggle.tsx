import { Switch } from "@headlessui/react";
import * as S from "./style";
import { SetStateAction } from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export interface ToggleProps extends React.HTMLAttributes<HTMLDivElement> {
  sideBySide: boolean;
  setSideBySide: (sideBySide: boolean) => void;
  setFlag: React.Dispatch<SetStateAction<boolean>>;
}

export default function Toggle({
  sideBySide,
  setSideBySide,
  setFlag,
  ...props
}: ToggleProps) {
  return (
    <S.Container>
      <Switch.Group as="div" {...props}>
        <S.Wrap className="gray">
          <S.Button
            className={!sideBySide ? "primary" : ""}
            onClick={() => {
              setSideBySide(!sideBySide);
              setFlag(false);
            }}
          >
            나란히 보기
          </S.Button>
          <S.Button
            className={sideBySide ? "primary" : ""}
            onClick={() => {
              setSideBySide(!sideBySide);
              setFlag(true);
            }}
          >
            겹쳐서 보기
          </S.Button>
        </S.Wrap>
      </Switch.Group>
    </S.Container>
  );
}
