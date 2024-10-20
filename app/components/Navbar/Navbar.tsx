import { MdPets } from "react-icons/md";
import styles from "./Navbar.module.scss";
import { Button, Center, Flex, Heading } from "@chakra-ui/react";
import { MdFilterAlt } from "react-icons/md";
import { RiBearSmileLine } from "react-icons/ri";
import { LuCat } from "react-icons/lu";
import { LuDog } from "react-icons/lu";

const Navbar = () => {
  const iconSize = 28;
  const BUTTON_SETTING = [
    {
      label: "搜尋",
      icon: <MdFilterAlt size={iconSize} />,
    },
    {
      label: "全部",
      icon: <RiBearSmileLine size={iconSize} />,
    },
    {
      label: "汪汪",
      icon: <LuDog size={iconSize} />,
    },
    {
      label: "喵喵",
      icon: <LuCat size={iconSize} />,
    },
  ];

  return (
    <Flex className={styles.nav}>
      <Center className={styles.nav__iconContent}>
        <MdPets size={30} />
        <Heading className={styles.nav__title}>PET ADOPTION</Heading>
      </Center>
      {/* bottom */}
      <Flex className={styles.nav__filter}>
        <Flex className={styles.nav__filterContent}>
          <Button
            className={styles.nav__button}
            aria-label={BUTTON_SETTING[0].label}
            leftIcon={BUTTON_SETTING[0].icon}
          >
            {BUTTON_SETTING[0].label}
          </Button>
          <Flex className={styles.nav__kindFilterWrap}>
            {BUTTON_SETTING.splice(1, 4).map(ele => (
              <Button
                key={ele.label}
                className={styles.nav__button}
                aria-label={ele.label}
                leftIcon={ele.icon}
              >
                {ele.label}
              </Button>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
