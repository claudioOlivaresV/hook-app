import { useState } from 'react';

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({ target: { name, value } }) => {
        setFormState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const onResetForm = () => {
        setFormState(initialForm);
    };

    return {
        ...formState, // Desestructurar para acceder directamente a las propiedades
        formState,
        onInputChange, // Corregí el nombre de la función
        onResetForm
    };
};
