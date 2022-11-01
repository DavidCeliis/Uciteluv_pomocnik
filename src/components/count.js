import React, {useState, Component} from "react";
import Slider from '@mui/material/Slider';

class CountDown extends Component {
  constructor() {
    super();
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0
    }
    this.hoursInput = React.createRef();
    this.minutesInput= React.createRef();
    this.secondsInput = React.createRef();
  }

  inputHandler = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
  convertToSeconds = ( hours, minutes,seconds) => {
    return seconds + minutes * 60 + hours * 60 * 60;
  }
  startTimer = () => {
    this.timer = setInterval(this.countDown, 1000);
  }

  countDown = () => {
    const  { hours, minutes, seconds } = this.state;
    let c_seconds = this.convertToSeconds(hours, minutes, seconds);

    if(c_seconds) {
      seconds ? this.setState({seconds: seconds-1}) : this.setState({seconds: 59});
      if(c_seconds % 60 === 0 && minutes) {
        this.setState({minutes: minutes -1});
      }
      if(!minutes && hours) {
        this.setState({minutes: 59});
      }
      if(c_seconds % 3600 === 0 && hours) {
        this.setState({hours: hours-1});
      }
    } else {
      clearInterval(this.timer);
    }
  }
  stopTimer = () => {
    clearInterval(this.timer);
  }

  resetTimer = () => {
    this.setState({
      hours: 0,
      minutes: 0,
      seconds: 0
    });
    this.hoursInput.current.value = 0;
    this.minutesInput.current.value = 0;
    this.secondsInput.current.value = 0;
  }


  render() {
    const { hours, minutes, seconds } = this.state;

    return (
      <div>
         <div>
            <h2>Hodiny</h2>
            <Slider 
            ref={this.hoursInput} 
            type="number" 
            max={23}
            placeholder={0}  
            name="hours"  
            onChange={this.inputHandler}
            defaultValue={0} 
            aria-label="Default" 
            valueLabelDisplay="auto"
            style={{width: "200px", margin: "auto"}}
            />
            <h2>Minuty</h2>
            <Slider 
            ref={this.minutesInput} 
            type="number" 
            placeholder={0}  
            name="minutes"  
            onChange={this.inputHandler}
            defaultValue={0} 
            max={59}
            aria-label="Default" 
            valueLabelDisplay="auto"
            style={{width: "200px", margin: "auto"}}
            />
            <h2>Sekundy</h2>
            <Slider 
            ref={this.secondsInput} 
            type="number" 
            placeholder={0}  
            name="seconds"
            max={59}
            min={1}  
            onChange={this.inputHandler}
            defaultValue={0} 
            aria-label="Default" 
            valueLabelDisplay="auto"
            style={{width: "200px", margin: "auto"}}
            />
         </div>
         <div>
            <button onClick={this.startTimer} className="btn btn-success">Začít</button>
            <button onClick={this.stopTimer}  className="btn btn-secondary">Pozastavit</button>
            <button onClick={this.resetTimer}  className="btn btn-danger">Vymazat</button>
         </div>
         <h1> Čas: {hours}:{minutes}:{seconds} </h1>
      </div>

    );
  }
}

export default CountDown;