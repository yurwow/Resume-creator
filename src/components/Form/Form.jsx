import styles from './Form.module.css'
import Experience from "../Experienсe/Experience.jsx";
import Education from "../Education/Education.jsx";
import Button from "../Button/Button.jsx";
import PersonalInformation from "../PersonalInformation/PersonalInformation.jsx";
import {useState} from "react";
import Resume from "../Resume/Resume.jsx";
import {generatePDF} from "./generatePdf.js";

const Form = () => {
    const [formData, setFormData] = useState({
        personalInfo: {
            name: '',
            surname: '',
            phone: '',
            email: '',
            city: '',
            position: '',
            information: '',
        },
        experience: [{ company: "", years: "" }],
        education: [{ university: "", graduationYear: "" }]
    })

    const handlePersonalInfoChange = (field, value) => {
        setFormData(prevState => ({
            ...prevState,
            personalInfo: {
                ...prevState.personalInfo,
                [field]: value
            }
        }));
    };

    const handleEducationChange = (newEducation) => {
        setFormData(prevState => ({
            ...prevState,
            education: newEducation
        }));
    };

    const handleReset = (e) => {
        e.preventDefault();
        console.log("Сброс");
        setFormData({
            personalInfo: {
                name: '',
                surname: '',
                phone: '',
                email: '',
                city: '',
                position: '',
                information: '',
            },
            experience: [{ company: "", years: "" }],
            education: [{ university: "", graduationYear: "" }]
        });
    };
    console.log(formData);

    const generatePDFHandler = () => {
        generatePDF("resume");
    };

    return (
        <div>
            <div className={styles.form}>
                <div className={styles.form_container}>
                    <form>
                        <h2>Персональная информация</h2>
                        <div className={styles.input_container}>
                            <PersonalInformation
                                personalInfo={formData.personalInfo}
                                onPersonalInfoChange={handlePersonalInfoChange}/>
                            <h2>Опыт работы</h2>
                            <Experience
                                experience={formData.experience}
                                onExperienceChange={(newExperience) => setFormData({
                                    ...formData,
                                    experience: newExperience
                                })}/>
                            <h2>Образование</h2>
                            <Education
                                education={formData.education}
                                onEducationChange={handleEducationChange}/>
                            <Button text='Сбросить' onClick={handleReset}/>
                            <Button text="Сохранить в PDF" onClick={generatePDFHandler} />
                        </div>
                    </form>
                </div>
            </div>
            <div  id="resume">
                <Resume formData={formData}/>
            </div>
        </div>
    );
};

export default Form;
