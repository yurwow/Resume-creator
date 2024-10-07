import styles from './Input.module.css';

const Input = ({placeholder}) => {
    return (
        <>
            <input placeholder={placeholder} className={styles.input}/>
        </>
    );
};

export default Input;
