import React from 'react';

const quizTable = ( props ) => { 
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>
                            <h6>Question {props.questionNumber} out of {props.totalQNumber}</h6>
                        </td>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <th>{props.questionText}</th>
                    </tr>
                    <tr><td><input type="radio" name="quizAlt" value={props.questionAlts[0]} />{props.questionAlts[0]}</td></tr>
                    <tr><td><input type="radio" name="quizAlt" value={props.questionAlts[1]} />{props.questionAlts[1]}</td></tr>
                    <tr><td><input type="radio" name="quizAlt" value={props.questionAlts[2]} />{props.questionAlts[2]}</td></tr>
                </tbody>
            </table>
        </div>
    );
};

export default quizTable;