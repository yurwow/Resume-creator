import styles from './Form.module.css'
import Experience from "../Experienсe/Experience.jsx";
import Education from "../Education/Education.jsx";
import Button from "../Button/Button.jsx";
import PersonalInformation from "../PersonalInformation/PersonalInformation.jsx";
import {useState} from "react";
import Resume from "../Resume/Resume.jsx";
import html2canvas from "html2canvas";
import {jsPDF} from "jspdf";

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

    const generatePDF = async () => {
        console.log("pdf");
        const input = document.getElementById("resume"); // Убедитесь, что у вас есть элемент с этим ID

        const canvas = await html2canvas(input);
        const imgData = canvas.toDataURL("image/png");

        const pdf = new jsPDF({
            orientation: 'landscape', // или 'landscape'
            unit: 'mm',
            format: [210, 297] // A4 в мм
        });
        const imgWidth = pdf.internal.pageSize.getWidth(); // Ширина изображения
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
        pdf.save("resume.pdf");
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
                            <Button text="Сохранить в PDF" onClick={generatePDF} />
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
