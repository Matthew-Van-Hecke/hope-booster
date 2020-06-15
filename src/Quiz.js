import React, { Component } from 'react';
import './Quiz.css';
import Question from './Question';

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
            <Question submit={this.getResponse} />
        )
    }
}

export default Quiz;