import { FC } from "react";
import { ReactComponent as PauseSVG } from "../../assets/icons/pauseIcon.svg";
import { IconProps } from "./type";

const PauseIcon: FC<IconProps> = ({ color, size }) => {
  return <PauseSVG color={color} width={size} height={size} />;
};

export default PauseIcon;
