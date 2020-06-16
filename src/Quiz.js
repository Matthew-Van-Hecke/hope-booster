import React, { Component } from 'react';
import Question from './Question';
import QuestionsDb from './QuestionsDb';
import {Movies} from './ArtDb';
import './Quiz.css';

class Quiz extends Component{
    constructor(props){
        super(props);
        this.state = {responses: {}};
        this.getResponse = this.getResponse.bind(this);
        this.submitResponses = this.submitResponses.bind(this);
    }
    getResponse(data){
        let responses = {...this.state.responses};
        responses[data.question] = data.selected;
        this.setState({responses});
    }
    submitResponses(){
        let responseArrays = Object.values(this.state.responses);
        let responses = [];
        for(let i = 0; i < responseArrays.length; i++){
            for(let j = 0; j < responseArrays[i].length; j++){
                responses.push(responseArrays[i][j]);
            }
        }
        let results = Movies.map(m => 
            m.title + " - " + this.countCommonElements(m.properties, responses).toString()
            );
        console.log(results);
    }
    countCommonElements(arrOne, arrTwo){
        let count = 0;
        for (let i = 0; i < arrOne.length; i++){
            if (arrTwo.includes(arrOne[i])){
                count++;
            }
        }
        return count;
    }
    render(){
        return(
            <div className="Quiz">
                {
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
                }
                <button onClick={this.submitResponses}>Submit</button>
            </div>
        )
    }
}

export default Quiz;