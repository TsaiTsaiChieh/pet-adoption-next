import styles from "./Avatar.module.scss";
import useProgressiveImage from "@app/utils/hooks/useProgressiveImage";
import { Box, Image, Skeleton } from "@chakra-ui/react";

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
        isLoaded={!!loadedSrc}
        fadeDuration={0.5}
      >
        <Image
          src={loadedSrc || "/imgs/no-pic.svg"}
          alt={alt}
          className={styles.avatar}
        />
      </Skeleton>
    </Box>
  );
};

export default Avatar;
