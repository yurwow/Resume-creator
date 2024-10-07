import Input from "../Input/Input.jsx";
import {useState} from "react";
import styles from "../Experienсe/Experience.module.css";

const Education = () => {
    const [experiences, setExperiences] = useState([{ university: "", speciality: "", graduationYear: ""}]);

    function handleAddExperience() {
        setExperiences([...experiences, { university: "", speciality: "", graduationYear: "" }]);
    }

    function handleRemoveExperience(index) {
        const newExperiences = experiences.filter((_, i) => i !== index);
        setExperiences(newExperiences);
    }

    function handleChange(index, field, value) {
        const newExperiences = experiences.map((experience, i) =>
            i === index ? { ...experience, [field]: value } : experience
        );
        setExperiences(newExperiences);
    }

    return (
        <div className={styles.btn_container}>
            {experiences.map((experience, index) => (
                <div key={index}>
                    <Input
                        placeholder="Университет..."
                        value={experience.university}
                        onChange={(e) => handleChange(index, "position", e.target.value)}
                    />
                    <Input
                        placeholder="Специальность..."
                        value={experience.speciality}
                        onChange={(e) => handleChange(index, "company", e.target.value)}
                    />
                    <Input
                        placeholder="Год окончания..."
                        value={experience.graduationYear}
                        onChange={(e) => handleChange(index, "city", e.target.value)}
                    />
                    <button
                        type="button"
                        onClick={() => handleRemoveExperience(index)}
                        className={styles.btn}
                    >
                        Удалить
                    </button>
                </div>
            ))}

            <button type="button" onClick={handleAddExperience} className={styles.btn}>
                Добавить
            </button>
        </div>
    );
};

export default Education;
