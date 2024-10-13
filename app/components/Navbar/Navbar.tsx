import { MdPets } from "react-icons/md";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__iconContent}>
        <MdPets size={28} />
        <h1 className={styles.nav__title}>認養毛孩</h1>
      </div>
    </nav>
  );
};

export default Navbar;
