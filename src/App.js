import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ans: '',
      calculation: '',
      op1: false,
      op2: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const value = event.target.value;

    switch(value) {
      case 'clear': {
        this.setState({ans: '', calculation: ''});
        break;
      }
      case '=': {
        if (this.state.calculation!=='') 
        { 
          var ans=''; 
            try
              { 
                ans = eval(this.state.calculation); 
              } 
              catch(err) 
              { 
                this.setState({ans: "Math Error"}); 
              } 
              if (ans===undefined) 
                this.setState({ans: "Math Error"}); 
                // update answer in our state. 
              else
                this.setState({ ans: ans , calculation: ''}); 
                break; 
            }
            break; 
      }
      // after equals signs if operator is pressed then calculation showuld start from the prev result
      case '-': {
        //if (this.state.op1 === true) {
          //this.setState({calculation: this.state.calculation.slice(0, -1) + value, ans: this.state.ans += value});
        //}
        //else {
          if (this.state.ans !== '' && this.state.calculation === '') {
            this.setState({ans: this.state.ans += value, calculation: this.state.ans});
          } else {
            this.setState({ calculation: this.state.calculation += value, ans: this.state.ans += value});
          }
        //}
        break;
      }
      case '*': {
        this.setState({op1: true});
        if (this.state.ans !== '' && this.state.calculation === '') {
          this.setState({ans: this.state.ans += value, calculation: this.state.ans});
        } else if (this.state.op1 === true && this.state.op2 === false) {
          this.setState({calculation: this.state.calculation.slice(0, -1) + value, ans: this.state.ans += value});
          if(this.state.calculation.substring(this.state.calculation.length -2 , this.state.calculation.length-1) === '*') {
            this.setState({calculation: this.state.calculation.slice(0, -2) + value});
          }
        } else {
          this.setState({ calculation: this.state.calculation += value, ans: this.state.ans += value});
        }
        break;
      }
      case '+': {
        this.setState({op1: true});
        if (this.state.ans !== '' && this.state.calculation === '') {
          this.setState({ans: this.state.ans += value, calculation: this.state.ans});
        } else if (this.state.op1 === true && this.state.op2 === false) {
          this.setState({calculation: this.state.calculation.slice(0, -1) + value, ans: this.state.ans += value});
          if(this.state.calculation.substring(this.state.calculation.length -2 , this.state.calculation.length-1) === '*') {
            this.setState({calculation: this.state.calculation.slice(0, -2) + value});
          }
        } else {
          this.setState({ calculation: this.state.calculation += value, ans: this.state.ans += value});
        }
        break;
      }
      case '/': {
        this.setState({op1: true});
        if (this.state.ans !== '' && this.state.calculation === '') {
          this.setState({ans: this.state.ans += value, calculation: this.state.ans});
        } else if (this.state.op1 === true && this.state.op2 === false) {
          this.setState({calculation: this.state.calculation.slice(0, -1) + value, ans: this.state.ans += value});
          if(this.state.calculation.substring(this.state.calculation.length -2 , this.state.calculation.length-1) === '*') {
            this.setState({calculation: this.state.calculation.slice(0, -2) + value});
          }
        } else {
          this.setState({ calculation: this.state.calculation += value, ans: this.state.ans += value});
        }
        break;
      }
      // more than 1 decimal not allowed in a number
      case '.': {
        if(this.state.calculation.includes(".")) {
          //this.setState({calculation: 'Wrong Input'});
          this.setState({ calculation: this.state.calculation += value, op1: false, op2: false});
        } else {
          this.setState({ calculation: this.state.calculation += value, ans: this.state.ans += value, op1: false, op2: false});
        }
        break;
      }
      case '0': {
        // no 0s allowed in the start
        if(this.state.calculation === '') {
          //this.setState({ calculation: this.state.calculation});
        } else {
          this.setState({ calculation: this.state.calculation += value, ans: this.state.ans += value, op1: false, op2: false});
        }
        break;
      }
      default: {
        // setting ans as null before starting another calculation after a prev calculation otherwise the new operator gets appended to the ans
        if(this.state.ans !== '' && this.state.calculation === '') {
          this.setState({calculation: this.state.calculation += value, ans: value, op1: false, op2: false});
        } else {
          this.setState({ calculation: this.state.calculation += value, ans: this.state.ans += value, op1: false, op2: false});
        }
        break;
      } 
    }
  }

  render() {
    return (
      <div className="container">
        <center><h1>React Calculator</h1></center>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 center">
            <div className="row black-box">
              <p id="calculation">{this.state.calculation}</p>
              <p id="display">{this.state.ans === '' ? '0' : this.state.ans}</p>
            </div>
            <div className="row black-box">
              <div className="col-xs-9 col-lg-9 col-sm-9 col-md-9">
                <button className="fullwidth check" id="clear" value="clear" onClick={this.handleClick}>AC</button>
              </div>
              <div className="col-xs-3 col-lg-3 col-sm-3 col-md-3">
                <button className="fullwidth check" value="/" onClick={this.handleClick} id="divide">/</button>
              </div>
            </div>
            <div className="row black-box">
              <div className="col-xs-3 col-lg-3 col-sm-3 col-md-3">
                <button className="fullwidth check" value="7" onClick={this.handleClick} id="seven">7</button>
              </div>
              <div className="col-xs-3 col-lg-3 col-sm-3 col-md-3">
                <button className="fullwidth check" value="8" onClick={this.handleClick} id="eight">8</button>
              </div>
              <div className="col-xs-3 col-lg-3 col-sm-3 col-md-3">
                <button className="fullwidth check" value="9" onClick={this.handleClick} id="nine">9</button>
              </div>
              <div className="col-xs-3 col-lg-3 col-sm-3 col-md-3">
                <button className="fullwidth check" value="*" onClick={this.handleClick} id="multiply">X</button>
              </div>
            </div>
            <div className="row black-box">
              <div className="col-xs-3 col-lg-3 col-sm-3 col-md-3">
                <button className="fullwidth check" value="4" onClick={this.handleClick} id="four">4</button>
              </div>
              <div className="col-xs-3 col-lg-3 col-sm-3 col-md-3">
                <button className="fullwidth check" value="5" onClick={this.handleClick} id="five">5</button>
              </div>
              <div className="col-xs-3 col-lg-3 col-sm-3 col-md-3">
                <button className="fullwidth check" value="6" onClick={this.handleClick} id="six">6</button>
              </div>
              <div className="col-xs-3 col-lg-3 col-sm-3 col-md-3">
                <button className="fullwidth check" value="+" onClick={this.handleClick} id="add">+</button>
              </div>
            </div>
            <div className="row black-box">
              <div className="col-xs-3 col-lg-3 col-sm-3 col-md-3">
                <button className="fullwidth check" value="1" onClick={this.handleClick} id="one">1</button>
              </div>
              <div className="col-xs-3 col-lg-3 col-sm-3 col-md-3">
                <button className="fullwidth check" value="2" onClick={this.handleClick} id="two">2</button>
              </div>
              <div className="col-xs-3 col-lg-3 col-sm-3 col-md-3">
                <button className="fullwidth check" value="3" onClick={this.handleClick} id="three">3</button>
              </div>
              <div className="col-xs-3 col-lg-3 col-sm-3 col-md-3">
                <button className="fullwidth check" value="-" onClick={this.handleClick} id="subtract">-</button>
              </div>
            </div>
            <div className="row black-box">
              <div className="col-xs-6 col-lg-6 col-sm-6 col-md-6">
                <button className="fullwidth check" value="0" onClick={this.handleClick} id="zero">0</button>
              </div>
              <div className="col-xs-3 col-lg-3 col-sm-3 col-md-3">
                <button className="fullwidth check" value="." onClick={this.handleClick} id="decimal">.</button>
              </div>
              <div className="col-xs-3 col-lg-3 col-sm-3 col-md-3">
                <button className="fullwidth check" value="=" onClick={this.handleClick} id="equals">=</button>
              </div>
            </div>
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
        </div>
      </div>
    );
  }
}

export default App;
