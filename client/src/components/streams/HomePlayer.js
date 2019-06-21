import React from 'react';
import flv from 'flv.js';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import video0 from './../../images/0.mp4';
import video1 from './../../images/1.mp4';

const streams = [
    {
        title: "toast breaks the game",
        user: "disguisedtoast",
        viewersNumber: "10,1k",
        isLive: true
    },
    {
        title: "Play of the game",
        user: "disguisedtoast",
        viewersNumber: "53",
        isLive: true
    }
];

class HomePlayer extends React.Component {
    constructor(props) {
        super(props);

        this.videoRef = React.createRef();
    }

    componentDidMount() {
        // const {id} = this.props.match.params;
        // this.props.fetchStream(id);
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
        });
        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
    };

    render() {
        return (
            <div className="eight wide column">
                <video ref={this.videoRef} style={{width: '100%'}} controls/>
                <div className="ui grid">
                    <div className="row" style={{paddingBottom: '0'}}>
                        <Link to="#" className="left aligned column">
                            <h3>{streams[this.props.video].title}</h3>
                        </Link>
                    </div>
                    <div className="row" style={{paddingTop: '0'}}>
                        <Link to="#" className="left aligned column">{streams[this.props.video].user}</Link>
                        <div className="right aligned right floated six wide column">
                            <i aria-hidden="true" className="black eye icon"/>
                            {streams[this.props.video].viewersNumber}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null,)(HomePlayer);