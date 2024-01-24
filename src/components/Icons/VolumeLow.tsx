import { FC } from "react";
import { ReactComponent as VolumeLowSVG } from "../../assets/icons/speakerLow.svg";
import { IconProps } from "./type";

const VolumeLow: FC<IconProps> = ({ color, size }) => {
  return <VolumeLowSVG color={color} width={size} height={size} />;
};

export default VolumeLow;
