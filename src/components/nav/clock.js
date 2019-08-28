import React from 'react';

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    } // Clock constructor

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    } // Clock mount

    componentWillUnmount() {
        clearInterval(this.timerID);
    } // Clock unmount

    tick() {
        this.setState({
            date: new Date()
        });
    } // Clock tick

    render() {

        class Options {
            constructor() {
                this.weekday = 'short';
                this.month = 'short';
                this.day = 'numeric';
                this.hour = 'numeric';
                this.minute = 'numeric';
            }
        }

        let local = new Options();
        let time = this.state.date.toLocaleString("en-US", local);


        return(
            <div> {time} </div>
        ); // Clock return

    } // Clock render 

} // Class Clock


export default Clock;