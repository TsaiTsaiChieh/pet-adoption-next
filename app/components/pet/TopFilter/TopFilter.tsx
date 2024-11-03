import styles from "./TopFilter.module.scss";
import { Button, Flex } from "@chakra-ui/react";
import { ReactElement } from "react";
import { useAppDispatch } from "@lib/hooks";
import { toggleDrawer } from "@app/features/drawerSlice";
import { queryPet } from "@app/features/petSlice";
import Icon from "@app/components/Icon/Icon";

const TopFilter = () => {
  const iconSize = 28;
  const dispatch = useAppDispatch();

  const BUTTON_SETTING: {
    label: string;
    icon: ReactElement;
    onClick: () => void;
  }[] = [
    {
      label: "搜尋",
      icon: <Icon src='/icons/filter.svg' size={iconSize} />,
      onClick: () => dispatch(toggleDrawer()),
    },
    {
      label: "全部",
      icon: <Icon src='/icons/bear.svg' size={iconSize} />,
      onClick: () => dispatch(queryPet({ kind: undefined, page: 1 })),
    },
    {
      label: "汪汪",
      icon: <Icon src='/icons/dog.svg' size={iconSize} />,
      onClick: () => dispatch(queryPet({ kind: "狗", page: 1 })),
    },
    {
      label: "喵喵",
      icon: <Icon src='/icons/cat.svg' size={iconSize} />,
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
