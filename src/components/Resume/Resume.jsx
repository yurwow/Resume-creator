import styles from './Resume.module.css';
import city from '../../img/city.png'
import mail from '../../img/mail.png'
import call from '../../img/call.png'

const Resume = ({formData}) => {
    const {personalInfo, education, experience} = formData;

    return (
        <div className={styles.container}>
            <div className={styles.header_resume}>
                <div className={styles.resume_title}>{personalInfo.name || "Имя"} {personalInfo.surname || "Фамилия"}</div>
                <div className={styles.job}>{personalInfo.position || "Должность"}</div>
                <div className={styles.city_inf}>
                    <div className={styles.city_inf_icon}>
                        <img className={styles.city_icon} src={city} alt="city"/>
                        <span>{personalInfo.city || "Город"}</span>
                    </div>
                    <div className={styles.city_email_icon}>
                        <img src={mail} className={styles.city_icon} alt="email icon"/>
                        <a href={`mailto:${personalInfo.email}`}>{personalInfo.email || "inbox@mail"}</a>
                    </div>
                    <div className={styles.city_email_icon}>
                        <img className={styles.city_icon} src={call} alt="call"/>
                        <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone || "Телефон"}</a>
                </div>
            </div>
        </div>
            <div className={styles.main_content}>
                <div className={styles.main_container}>
                    <div className={styles.resume_inf}>
                        <div className={styles.resume_education}>
                            <span>Образование</span>
                            <div className={styles.resume_desc}>
                                {education.map((edu, index) => (
                                    <div className={styles.resume_desc_container} key={index}>
                                        <span style={{
                                            marginLeft: '350px'
                                        }}>{edu.university || ""}</span>
                                        <span>{edu.graduationYear || ""}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.resume_experience}>
                            <span>Опыт работы</span>
                            {experience.map((exp, index) => (
                                <div className={styles.resume_desc_container} key={index}>
                                    <span style={{
                                        marginLeft: '450px', maxWidth:'400px'}}>{exp.company || ""}</span>
                                    <span>{exp.years || ""}</span>
                                </div>
                            ))}
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.resume_experience_inf}>
                            <span>Дополнительная информация</span>
                            <div className={styles.resume_more_inf}>
                                <span>{personalInfo.information || ""}</span>
                            </div>
                            <div></div>
                        </div>
                        <div className={styles.line}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
