import React from 'react';
import flv from 'flv.js';
import video0 from './../../images/0.mp4';
import video1 from './../../images/1.mp4';

class HomePlayer extends React.Component {
    constructor(props) {
        super(props);

        this.videoRef = React.createRef();
    }

    componentDidMount() {
        this.buildPlayer();
    }

    componentDidUpdate() {
        this.buildPlayer();
    }

    componentWillUnmount() {
        this.player.destroy();
    }

    buildPlayer() {
        if (this.player) {
            this.player.destroy();
        }

        const video = this.props.video ? video1 : video0;
        this.player = flv.createPlayer({
            type: 'mp4',
            url: video
            // type: 'flv',
            // url: 'https://www.dailymotion.com/video/x7biizi'
        });
        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
    };

    render() {
        return (
            <div className="eight wide column">
                <video ref={this.videoRef} style={{width: '100%'}} controls/>
            </div>
        );
    }
}

export default HomePlayer;