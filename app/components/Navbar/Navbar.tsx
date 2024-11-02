import { MdPets } from "react-icons/md";
import styles from "./Navbar.module.scss";
import { Center, Flex, Heading } from "@chakra-ui/react";
import CompositeFilter from "../CompositeFilter/CompositeFilter";

const Navbar = () => {
  return (
    <Flex className={styles.nav}>
      <CompositeFilter />
      <Center className={styles.nav__iconContent}>
        <MdPets size={30} />
        <Heading className={styles.nav__title}>PET ADOPTION</Heading>
      </Center>
    </Flex>
  );
};

export default Navbar;
