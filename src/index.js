import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {countVal: 0};
        this.handleClicked = this.handleClicked.bind(this);
    }

    handleClicked (){
        this.setState({countVal: this.state.countVal + 1});
    }
    
    render(){
        return (
            <div>
                <p> You have clicked me {this.state.countVal} times. </p>
                <button onClick={this.handleClicked}> Click me! </button>
            </div>
        );
    }
}

ReactDOM.render(
  <Button/>,
  document.getElementById('root')
);
