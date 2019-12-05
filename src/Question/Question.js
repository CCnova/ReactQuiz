import React from "react";
import PropTypes from 'prop-types';

const question = (props) => {
    return (
        <h2 className="question">{props.content}</h2>
    );
};
 
question.propTypes = {
    content: PropTypes.string.isRequired
};


export default question;