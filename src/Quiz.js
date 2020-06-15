import React, { Component } from 'react';
import Question from './Question';
import QuestionsDb from './QuestionsDb';
import './Quiz.css';

class Quiz extends Component{
    constructor(props){
        super(props);
        this.state = {responses: []}
    }
    getResponse(data){
        console.log(data);
    }
    render(){
        return(
            QuestionsDb.map(
                q => 
                <Question
                    key={q.question}
                    question={q.question}
                    options={q.options}
                    selectOne={q.selectOne}
                    submit={this.getResponse}
                />
            )
        )
    }
}

export default Quiz;