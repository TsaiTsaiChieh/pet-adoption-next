import { Image } from "@chakra-ui/react";
import styles from "./PetNotFound.module.scss";

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
