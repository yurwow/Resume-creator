import styles from "./Experience.module.css";
import Input from "../Input/Input.jsx";
import {useState} from "react";

const Experience = () => {
    const [experiences, setExperiences] = useState([{ position: "", company: "", city: "", years: ""}]);

    function handleAddExperience() {
        setExperiences([...experiences, { position: "", company: "", city: "", years: "" }]);
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
                        placeholder="Позиция..."
                        value={experience.position}
                        onChange={(e) => handleChange(index, "position", e.target.value)}
                    />
                    <Input
                        placeholder="Компания..."
                        value={experience.company}
                        onChange={(e) => handleChange(index, "company", e.target.value)}
                    />
                    <Input
                        placeholder="Город..."
                        value={experience.city}
                        onChange={(e) => handleChange(index, "city", e.target.value)}
                    />
                    <Input
                        placeholder="Годы работы..."
                        value={experience.years}
                        onChange={(e) => handleChange(index, "years", e.target.value)}
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

export default Experience;
