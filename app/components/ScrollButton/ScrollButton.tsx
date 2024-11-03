import styles from "./ScrollButton.module.scss";
import { IconButton } from "@chakra-ui/react";
import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa";
import { useState, useEffect } from "react";

const ScrollButton = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const handleScroll = () => {
    setIsAtTop(window.scrollY === 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scroll2Top = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };
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
      onClick={isAtTop ? scroll2Bottom : scroll2Top}
    >
      {isAtTop ? (
        <FaChevronCircleDown className={styles.icon} size={32} />
      ) : (
        <FaChevronCircleUp className={styles.icon} size={32} />
      )}
    </IconButton>
  );
};

export default ScrollButton;
