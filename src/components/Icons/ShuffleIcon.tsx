import { FC } from "react";
import { ReactComponent as ShuffleSVG } from "../../assets/icons/shuffleIcon.svg";
import { IconProps } from "./type";

const ShuffleIcon: FC<IconProps> = ({ color, size }) => {
  return <ShuffleSVG color={color} width={size} height={size} />;
};

export default ShuffleIcon;
