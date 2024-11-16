import styles from "./ScrollButton.module.scss";
import { IconButton } from "@chakra-ui/react";
import Icon from "@app/components/Icon/Icon";

const ScrollButton = () => {
  const scroll2Bottom = () => {
    window.scroll({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <IconButton
      className={styles.button}
      aria-label='scroll-top'
      onClick={scroll2Bottom}
    >
      <Icon src='/icons/circle-down.svg' size={32} />
    </IconButton>
  );
};

export default ScrollButton;
