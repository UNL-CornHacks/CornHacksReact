import React from "react";
import Type from "GlobalComponents/Type";
import Colors from "Constants/Colors";

import "./Styles/Question.css";

const Question = ({ question, children, id }) => (
    <div id={id}>
        <Type size="h4" color={Colors.BLACK} bold className="ch-question-title">
            {question}
        </Type>
        <Type size="p">{children}</Type>
    </div>
);

export default Question;
