import styles from "./PetNotFound.module.scss";
import { Image } from "@chakra-ui/react";

const PetNotFound = () => {
  return (
    <Image
      className={styles.petNotFound}
      src='/imgs/empty-pet.svg'
      alt='pet-not-found'
    ></Image>
  );
};

export default PetNotFound;
