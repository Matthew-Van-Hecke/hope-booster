import React, { Component } from 'react';
import './Question.css';

class Question extends Component {
    static defaultProps = {
        type: "text", 
        question: "My default to unwind is...", 
        options: ["A Show", "A Movie", "A Book", "Going Out", "Chill With Friends", "Outdoor Adventures", "Hobby"]
    };
    constructor(props){
        super(props);
        this.state = {select: ""};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(option){
        this.setState({select: option});
        this.props.submit(this.state);
    }
    render(){
        let selected = {backgroundColor: '#999999', color: 'white'};
        let notSelected = {color: 'black'};
        return(
            <ul className="Question">
                {this.props.options.map(option => 
                <li key={this.props.options.indexOf(option)} onClick={() => this.handleClick(option)} style={this.state.select === option ? selected : notSelected}>
                    {option}
                </li>
                )}
            </ul>
        )
    }
}

export default Question;