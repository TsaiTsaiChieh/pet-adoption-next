import styles from "./Avatar.module.scss";
import useProgressiveImage from "@app/utils/hooks/useProgressiveImage";
import { Box, Image, Skeleton } from "@chakra-ui/react";
import LazyLoad from "react-lazyload";

interface Props {
  src: string;
  alt: string;
}
const Avatar = ({ src, alt }: Props) => {
  const loadedSrc = useProgressiveImage(src);

  return (
    <Box className={styles.avatarBox}>
      <Skeleton
        className={styles.avatarBox__skeleton}
        isLoaded={loadedSrc === "" ? true : !!loadedSrc}
        fadeDuration={0.5}
      >
        <LazyLoad className={styles.avatar__lazyloading} offset={100}>
          <Image
            src={loadedSrc || "/imgs/no-pic.svg"}
            alt={alt}
            className={styles.avatar}
          />
        </LazyLoad>
      </Skeleton>
    </Box>
  );
};

export default Avatar;
