import styles from "./Footer.module.css";
import { FaGithubAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__contactWrap}>
        <FaGithubAlt size={28} />
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
      </div>
    </footer>
  );
};

export default Footer;
