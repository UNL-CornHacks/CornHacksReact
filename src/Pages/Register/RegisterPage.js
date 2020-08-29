import React from "react";
import Colors from "Constants/Colors";
import Form from "GlobalComponents/Form";
import FormInput from "GlobalComponents/FormInput";
import Airtable from "airtable";
import ImageSection from "GlobalComponents/ImageSection";
import Type from "GlobalComponents/Type";

const RegisterPage = () => (
    <ImageSection backgroundColor={Colors.WHITE} image={"Chairs.png"}>
        <Type size="h2" color={Colors.DARK_BLUE} bold>
            Register for CornHacks
        </Type>
        <Form
            pushForm={(data) => {
                const base = new Airtable({
                    apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
                }).base(process.env.REACT_APP_AIRTABLE_TEST_BASE);
                base("Sponsors").create(data, (err, record) => {
                    console.log(err, record);
                });
            }}
        >
            <FormInput labelColor={Colors.DARK_BLUE}>Field 1</FormInput>
            <FormInput labelColor={Colors.DARK_BLUE} required>
                Field 2
            </FormInput>
            <FormInput labelColor={Colors.DARK_BLUE} required>
                Field 3
            </FormInput>
        </Form>
    </ImageSection>
);

export default RegisterPage;
