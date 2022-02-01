import React from 'react';
class DigitalClicker extends React.Component {
    constructor(){
        super()
        this.state = {
            timesClicked: 0,
        }
    }

    increaseClicked = () => {
        this.setState(previousState => ({
            timesClicked: previousState.timesClicked+1
        }))
    }

    render(){
        return(
            <button onClick={this.increaseClicked}>{this.state.timesClicked}</button>
        )
    }

}
export default DigitalClicker