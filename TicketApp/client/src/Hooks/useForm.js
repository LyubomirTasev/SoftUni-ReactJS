import { useState } from "react";

export function useForm(initialvalues, submitCallback) {

    const [values, setValues] = useState(initialvalues);

    const changeHandler = (e) => {
        setValues(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    };

    const submitHandler = (e) => {
        e.preventDefault();

        submitCallback(values);
    }
    return {
        values,
        changeHandler,
        submitHandler
    }
}