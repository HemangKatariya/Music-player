import { FC } from "react";
import { ReactComponent as VolumeOffSVG } from "../../assets/icons/volumeOff.svg";
import { IconProps } from "./type";

const VolumeOff: FC<IconProps> = ({ color, size }) => {
  return <VolumeOffSVG color={color} width={size} height={size} />;
};

export default VolumeOff;
