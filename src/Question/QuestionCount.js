import React from 'react';
import PropTypes from 'prop-types';

const questionCount = (props) => { 
    return (
        <div className="questionCount">
            Question <span>{props.counter}</span> of <span>{props.total}</span>
        </div>
    );
};

questionCount.propTypes = {
    counter: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
};

export default questionCount;