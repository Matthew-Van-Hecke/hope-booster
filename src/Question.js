import React, { Component } from 'react';
import './Question.css';

class Question extends Component {
    static defaultProps = {
        question: "My default to unwind is...", 
        options: ["A Show", "A Movie", "A Book", "Going Out", "Chill With Friends", "Outdoor Adventures", "Hobby"],
        selectOne: true
    };
    constructor(props){
        super(props);
        this.state = {selected: []};
        this.handleClick = this.handleClick.bind(this);
        this.submit = this.submit.bind(this);
    }
    submit(){
        this.props.submit(this.state);
    }
    handleClick(option){
        let selected = [...this.state.selected];
        if (this.props.selectOne){
            selected.pop();
            selected.push(option);
        }
        else{
            if (selected.includes(option)){
                selected.splice(selected.indexOf(option), 1);
            }
            else{
                selected.push(option);
            }
        }
        this.setState({selected}, this.submit);
    }
    render(){
        let selected = {backgroundColor: '#999999', color: 'white'};
        let notSelected = {color: 'black'};
        return(
            <div>
                <h3>{this.props.question}</h3>
                <ul className="Question">
                {this.props.options.map(option => 
                <li 
                    key={this.props.options.indexOf(option)} 
                    onClick={() => this.handleClick(option)} 
                    style={this.state.selected.includes(option) ? selected : notSelected}
                >
                    {option}
                </li>
                )}
            </ul>
            </div>
        )
    }
}

export default Question;