import styles from "./Icon.module.scss";
import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  alt?: string;
  size: number;
  color?: string;
}
const Icon = ({ src, alt, size, color }: Props) => {
  return (
    <Image
      className={`${styles.icon} ${color ? styles["white"] : ""}`}
      alt={alt ?? "icon"}
      width={size}
      height={size}
      src={src}
    ></Image>
  );
};

export default Icon;
