import React from "react";
import Type from "GlobalComponents/Type";

import "./Styles/Question.css";

const Question = ({ question, children }) => (
    <>
        <Type size="h4" bold className="ch-question-title">
            {question}
        </Type>
        <Type size="p">{children}</Type>
    </>
);

export default Question;
