import React, {Component} from "react";
import './style.css'

class Timer extends Component{
    constructor(props){
        super(props);
        this.state = {hour: 0,
                    min : 0,
                    sec: 0,
                    msec : 0};
    }


    startTimer = () => {
        this.interval = setInterval(() => {
            this.setState({
                msec : this.state.msec === 100 ? 0 : this.state.msec+1,
                sec: this.state.msec === 100 ? this.state.sec+1 : this.state.sec,
            });

            if(this.state.sec === 60){
                this.setState({
                    min: this.state.sec === 60 ? this.state.min+1 : this.state.min,
                    sec : 0,
                })
            }

            if(this.state.min === 60){
                this.setState({
                    hour: this.state.min === 60 ? this.state.hour+1 : this.state.hour,
                    min : 0,
                })
            }
        },10);
    }


    stopTimer =() => {
        clearInterval(this.interval);

    }


    resetTimer = () => {
        clearInterval(this.interval);
        this.setState({
            hour: 0,
            msec : 0,
            min: 0,
            sec : 0
        })
    }

    render() {
        return (
            <div className="timerContainer">
                <h1>{this.state.hour} : {this.state.min} : {this.state.sec} : {this.state.msec}</h1>
                <button className="button" onClick={this.startTimer}>start</button>
                <button className="button" onClick={this.stopTimer}>stop</button>
                <button className="button" onClick={this.resetTimer}>pause</button>
            </div>
            
        )
    }
}

export default Timer