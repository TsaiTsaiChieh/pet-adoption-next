"use clinent";
import styles from "./TopFilter.module.scss";
import { Button, Flex } from "@chakra-ui/react";
import { ReactElement } from "react";
import { useAppDispatch } from "@lib/hooks";
import { LuDog, LuCat } from "react-icons/lu";
import { MdFilterAlt } from "react-icons/md";
import { toggleDrawer } from "@app/features/drawerSlice";
import { RiBearSmileLine } from "react-icons/ri";
import { queryPet } from "@app/features/petSlice";

const TopFilter = () => {
  const dispatch = useAppDispatch();

  const iconSize = 28;
  const BUTTON_SETTING: {
    label: string;
    icon: ReactElement;
    onClick: () => void;
  }[] = [
    {
      label: "搜尋",
      icon: <MdFilterAlt size={iconSize} />,
      onClick: () => dispatch(toggleDrawer()),
    },
    {
      label: "全部",
      icon: <RiBearSmileLine size={iconSize} />,
      onClick: () => dispatch(queryPet({ kind: undefined, page: 1 })),
    },
    {
      label: "汪汪",
      icon: <LuDog size={iconSize} />,
      onClick: () => dispatch(queryPet({ kind: "狗", page: 1 })),
    },
    {
      label: "喵喵",
      icon: <LuCat size={iconSize} />,
      onClick: () => dispatch(queryPet({ kind: "貓", page: 1 })),
    },
  ];
  return (
    <Flex className={styles.topFilter}>
      <Flex className={styles.topFilter__filter}>
        <Flex className={styles.topFilter__filterContent}>
          <Button
            className={styles.topFilter__button}
            aria-label={BUTTON_SETTING[0].label}
            leftIcon={BUTTON_SETTING[0].icon}
            onClick={BUTTON_SETTING[0].onClick}
          >
            {BUTTON_SETTING[0].label}
          </Button>
          <Flex className={styles.topFilter__kindFilterWrap}>
            {BUTTON_SETTING.splice(1, 4).map(ele => (
              <Button
                key={ele.label}
                className={styles.topFilter__button}
                aria-label={ele.label}
                leftIcon={ele.icon}
                onClick={ele.onClick}
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

export default TopFilter;
