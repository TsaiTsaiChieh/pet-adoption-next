import styles from "./Navbar.module.scss";
import { MdPets } from "react-icons/md";
import { Center, Flex, Heading } from "@chakra-ui/react";
import CompositeFilter from "@app/components/pet/CompositeFilter/CompositeFilter";

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
