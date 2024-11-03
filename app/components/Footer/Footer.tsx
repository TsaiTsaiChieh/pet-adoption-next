import styles from "./Footer.module.scss";
import Icon from "@app/components/Icon/Icon";
import { Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Flex className={styles.footer__content}>
        <Flex className={styles.footer__contactWrap}>
          <Icon src='/icons/github.svg' size={28} color='white' />
          <div className={styles.footer__contact}>
            <a
              href='https://github.com/TsaiTsaiChieh/pet-adoption-next/issues'
              target='_blank'
              className={styles.footer__report}
            >
              問題回報
            </a>
            <a
              href='mailto:jecica196@gmail.com'
              className={styles.footer__contactMe}
            >
              聯絡我
            </a>
          </div>
        </Flex>
        <Flex className={styles.footer__warningWrap}>
          <span className={styles.footer__warning}>
            本網站僅提供寵物資訊的檢索服務，不對其正確性或即時性負責，亦對認養等相關爭議或損失概不負責。
          </span>
          <span>
            版本 {process.env.NEXT_PUBLIC_BUILD_DATE?.substring(0, 10)}
          </span>
        </Flex>
      </Flex>
    </footer>
  );
};

export default Footer;
