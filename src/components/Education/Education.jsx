import Input from "../Input/Input.jsx";
import styles from "../Experienсe/Experience.module.css";
import Button from "../Button/Button.jsx";

const Education = ({ education, onEducationChange }) => {
    const handleChange = (index, field, value) => {
        const updatedEducation = education.map((edu, i) =>
            i === index ? { ...edu, [field]: value } : edu
        );
        onEducationChange(updatedEducation);
    };

    const handleAddEducation = () => {
        onEducationChange([...education, { university: "", graduationYear: "" }]);
    };

    const handleRemoveEducation = (index) => {
        const updatedEducation = education.filter((_, i) => i !== index);
        onEducationChange(updatedEducation);
    };

    return (
        <div className={styles.btn_container}>
            {education.map((edu, index) => (
                <div key={index}>
                    <Input
                        placeholder="Описание..."
                        value={edu.university}
                        onChange={(e) => handleChange(index, "university", e.target.value)}
                    />
                    <Input
                        placeholder="Год окончания..."
                        value={edu.graduationYear}
                        onChange={(e) => handleChange(index, "graduationYear", e.target.value)}
                    />
                    <Button text='Удалить' onClick={() => handleRemoveEducation(index)}/>
                </div>
            ))}
            <Button text='Добавить' onClick={handleAddEducation}/>

        </div>
    );
};

export default Education;
