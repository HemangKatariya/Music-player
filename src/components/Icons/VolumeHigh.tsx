import { FC } from "react";
import { ReactComponent as VolumeHighSVG } from "../../assets/icons/volumeHigh.svg";
import { IconProps } from "./type";

const VolumeHigh: FC<IconProps> = ({ color, size }) => {
  return <VolumeHighSVG color={color} width={size} height={size} />;
};

export default VolumeHigh;
