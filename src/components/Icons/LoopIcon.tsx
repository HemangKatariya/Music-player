import { FC } from "react";
import { ReactComponent as LoopSVG } from "../../assets/icons/loopIcon.svg";
import { IconProps } from "./type";

const LoopIcon: FC<IconProps> = ({ color, size }) => {
  return <LoopSVG color={color} width={size} height={size} />;
};

export default LoopIcon;
