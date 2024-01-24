import { FC } from "react";
import { ReactComponent as ForwardSVG } from "../../assets/icons/forwardIcon.svg";
import { IconProps } from "./type";

const ForwardIcon: FC<IconProps> = ({ color, size }) => {
  return <ForwardSVG color={color} width={size} height={size} />;
};

export default ForwardIcon;
