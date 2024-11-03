import styles from "./NotFound.module.scss";
import { Image } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Image
      className={styles.petNotFound}
      src='/imgs/empty-pet.svg'
      alt='pet-not-found'
    ></Image>
  );
};

export default NotFound;
