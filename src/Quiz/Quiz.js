import React from 'react';
import PropTypes from 'prop-types';
import Question from '../Question/Question';
import QuestionCount from '../Question/QuestionCount';
import AnswerOption from '../Answer/AnswerOption';

const quiz = (props) => { 

    function renderAnswerOptions(key) {
        return (
            <AnswerOption
                key={key.content}
                answerContent={key.content}
                answerType={key.type}
                answer={props.answer}
                questionId={props.questionId}
                onAnswerSelected={props.onAnswerSelected}
            />
        );
    }

    return (
        <div className="quiz">
            <QuestionCount
                counter={props.questionId}
                total={props.questionTotal}
            />

            <Question content={props.question} />

            <ul className="answerOptions">
                {props.answerOptions.map(renderAnswerOptions)}
            </ul>
            
        </div>
    );
};

quiz.propTypes = {
    answer: PropTypes.string.isRequired,
    answerOptions: PropTypes.array.isRequired,
    counter: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
};


export default quiz;