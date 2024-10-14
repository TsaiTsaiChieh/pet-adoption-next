import { MdPets } from "react-icons/md";
import styles from "./Navbar.module.css";
import { Center, Flex, Heading } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Center className={styles.nav}>
      <Flex className={styles.nav__iconContent}>
        <MdPets size={28} />
        <Heading className={styles.nav__title}>PET ADOPTION</Heading>
      </Flex>
    </Center>
  );
};

export default Navbar;
