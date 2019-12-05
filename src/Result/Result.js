import React from 'react';
import PropTypes from 'prop-types';

const result = (props) => { 
    return (
        <div className="result">
            You prefer <strong>{props.quizResult}</strong>
        </div>
    );
};

result.PropTypes = {
    quizResult: PropTypes.string.isRequired
};

export default result;