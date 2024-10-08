import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.animation}>RESUME</div>
            <div style={{marginLeft:'5px'}} className={styles.animation}>
                <span className={styles.animation_span}>CREATER CONTENT</span>
            </div>
        </header>
    );
};

export default Header;
