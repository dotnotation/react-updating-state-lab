import React from 'react';

class YouTubeDebugger extends React.Component {
    constructor(){
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
        }
    }

    setBitrate = () => {
        this.setState({
            settings: Object.assign({}, this.state.settings, {
                bitrate: 12,
            })
        })
    }

    setResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings, 
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })
    }

    render(){
        return(
            <div>
                <button className='bitrate' onClick={this.setBitrate}>{this.state.bitrate}</button>
                <button className='resolution' onClick={this.setResolution}>{this.state.resolution}</button>
            </div>
        )
    }

}

export default YouTubeDebugger