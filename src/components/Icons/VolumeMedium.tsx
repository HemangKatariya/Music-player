import { FC } from "react";
import { ReactComponent as VolumeMediumSVG } from "../../assets/icons/volumeMedium.svg";
import { IconProps } from "./type";

const VolumeMedium: FC<IconProps> = ({ color, size }) => {
  return <VolumeMediumSVG color={color} width={size} height={size} />;
};

export default VolumeMedium;
