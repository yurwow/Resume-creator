import styles from "./Experience.module.css";
import Input from "../Input/Input.jsx";
import Button from "../Button/Button.jsx";

const Experience = ({experience, onExperienceChange}) => {
    const handleChange = (index, field, value) => {
        const updatedExperience = experience.map((exp, i) =>
            i === index ? { ...exp, [field]: value } : exp
        );
        onExperienceChange(updatedExperience);
    };

    const handleAddExperience = () => {
        onExperienceChange([...experience, { company: "", years: "" }]);
    };

    const handleRemoveExperience = (index) => {
        const updatedExperience = experience.filter((_, i) => i !== index);
        onExperienceChange(updatedExperience);
    };

    return (
        <div className={styles.btn_container}>
            {experience.map((exp, index) => (
                <div key={index}>
                    <Input
                        placeholder="Описание..."
                        value={exp.company}
                        onChange={(e) => handleChange(index, "company", e.target.value)}
                    />
                    <Input
                        placeholder="Годы работы..."
                        value={exp.years}
                        onChange={(e) => handleChange(index, "years", e.target.value)}
                    />
                    <Button text='Удалить' onClick={() => handleRemoveExperience(index)}/>
                </div>
            ))}
            <Button text='Добавить' onClick={handleAddExperience}/>
        </div>
    );
};

export default Experience;
