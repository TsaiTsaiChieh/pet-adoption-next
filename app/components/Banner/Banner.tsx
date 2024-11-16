import { Flex } from "@chakra-ui/react";
import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <Flex className={styles.container}>
      <div className={styles.container__img} />
      <a
        target='_blank'
        rel='noreferrer noopener'
        href='https://www.buymeacoffee.com/never.stray'
        className={styles.container__link}
      >
        贊助一杯咖啡，讓我們可以繼續提供服務
      </a>
    </Flex>
  );
};

export default Banner;
