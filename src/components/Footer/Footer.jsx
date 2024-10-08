import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <span>2024</span>
            <div style={{marginLeft: '5px'}}>Kuzin Yurii</div>
            <a style={{marginLeft: '5px'}} href='https://github.com/yurwow/Resume-creator'>
                Github
            </a>
        </div>
    );
};

export default Footer;
