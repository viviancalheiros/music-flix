/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./Header.module.css";

function Header() {
    return(
        <header className={styles.header}>
            <span>Music Flix</span>
            <nav>
                <a href="#">Home</a>
                <a href="#">Ouvir</a>
            </nav>
        </header>
    );
}

export default Header;