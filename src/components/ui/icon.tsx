import {
  CaretRight,
  IconProps,
  CaretLeft,
  LockKey,
  List,
  X,
} from "phosphor-react";

interface IconType {
  [key: string]: React.FC<IconProps>;
}

const Icon: IconType = {
  CaretRight,
  CaretLeft,
  LockKey,
  List,
  X,
};

export default Icon;
