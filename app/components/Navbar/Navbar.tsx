import styles from "./Navbar.module.scss";
import { Center, Flex, Heading } from "@chakra-ui/react";
import CompositeFilter from "@app/components/pet/CompositeFilter/CompositeFilter";
import Icon from "@app/components/Icon/Icon";

const Navbar = () => {
  return (
    <Flex className={styles.nav}>
      <CompositeFilter />
      <Center className={styles.nav__iconContent}>
        <Icon src='/icons/pet.svg' size={30} />
        <Heading className={styles.nav__title}>PET ADOPTION</Heading>
      </Center>
    </Flex>
  );
};

export default Navbar;
