import React, { Component } from 'react';
import Question from './Question';
import QuestionsDb from './QuestionsDb';
import './Quiz.css';

class Quiz extends Component{
    constructor(props){
        super(props);
        this.state = {responses: {}};
        this.getResponse = this.getResponse.bind(this);
    }
    getResponse(data){
        let responses = {...this.state.responses};
        responses[data.question] = data.selected;
        this.setState({responses});
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