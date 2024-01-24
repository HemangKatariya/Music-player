import { FC } from "react";
import { ReactComponent as BackwardSVG } from "../../assets/icons/backwardIcon.svg";
import { IconProps } from "./type";

const BackwardIcon: FC<IconProps> = ({ color, size }) => {
  return <BackwardSVG color={color} width={size} height={size} />;
};

export default BackwardIcon;
