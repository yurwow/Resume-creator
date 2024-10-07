import styles from './Form.module.css'
import Input from "../Input/Input.jsx";
import Experience from "../Experienсe/Experience.jsx";
import Education from "../Education/Education.jsx";

const Form = () => {
    return (
        <div className={styles.form}>
            <div className={styles.form_container}>
                <form>
                    <h2>Персональная информация</h2>
                    <div className={styles.input_container}>
                        <Input placeholder='Имя...'/>
                        <Input placeholder='Фамилия...'/>
                        <Input placeholder='Телефон...'/>
                        <Input placeholder='Email...'/>
                        <h2>Опыт работы</h2>
                        <Experience/>
                        <h2>Образование</h2>
                        <Education />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Form;
