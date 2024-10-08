import styles from './Input.module.css';

const Input = ({placeholder, type, value, onChange, name}) => {
    return (
        <>
            <input
                type={type}
                placeholder={placeholder}
                className={styles.input}
                value={value}
                onChange={onChange}
                name={name}
            />
        </>
    );
};

export default Input;
