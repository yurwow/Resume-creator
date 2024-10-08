import Input from "../Input/Input.jsx";

const PersonalInformation = ({ personalInfo, onPersonalInfoChange }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        onPersonalInfoChange(name, value);
        console.log(name, value);
    };

    return (
        <>
            <Input name='name' value={personalInfo.name} onChange={handleChange} placeholder='Имя...'/>
            <Input name='surname' value={personalInfo.surname}
                   onChange={handleChange} placeholder='Фамилия...'/>
            <Input type='phone' name='phone' value={personalInfo.phone}
                   onChange={handleChange} placeholder='Телефон...'/>
            <Input type='email' name="email" value={personalInfo.email}
                   onChange={handleChange} placeholder='Email...'/>
            <Input name="city" value={personalInfo.city}
                   onChange={handleChange} placeholder='Город...'/>
            <Input name="position" value={personalInfo.position}
                   onChange={handleChange} placeholder='Позиция...'/>
            <Input name="information" value={personalInfo.information}
                   onChange={handleChange} placeholder='Дополнительная информация...'/>
        </>
    );
};

export default PersonalInformation;
