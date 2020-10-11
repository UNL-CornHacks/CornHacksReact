import React from "react";

import "./Styles/Form.css";

const Form = ({ children, className, pushForm }) => {
    const onFormSubmit = (e) => {
        e.preventDefault();
        const formData = {};

        for (const formInput of children) {
            const formInputId =
                formInput.props.formId || formInput.props.children;
            formData[formInputId] = document.getElementById(formInputId).value;
            document.getElementById(formInputId).value = "";
        }
        console.log(formData);
        pushForm(formData);
    };

    return (
        <>
            <form
                className={className ? `${className} ch-form` : "ch-form"}
                onSubmit={onFormSubmit}
            >
                {children}
                <input className="ch-form-submit-button" type="submit" />
            </form>
        </>
    );
};

export default Form;
