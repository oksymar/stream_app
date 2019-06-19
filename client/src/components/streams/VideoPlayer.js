import React from 'react';
import flv from 'flv.js';
import {connect} from 'react-redux';

class VideoPlayer extends React.Component {
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
        // if (this.player || !this.props.stream) {
        if (this.player) {
            return;
        }

        // const {id} = this.props.match.params;
        const id = 'DSVMMwdEdsdd4f45DEHf54dttD3dEq279DSVw';
        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`
        });
        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
    };

    render() {
        // if (!this.props.stream) {
        //     return <div>Loading...</div>;
        // }

        return (
            <div className="ten wide column">
                <div style={{backgroundColor: 'white'}}>
                    <h3 style={{padding: '0.5rem 0 0 0.5rem'}}>Podgląd wideo:</h3>
                    <video ref={this.videoRef} style={{width: '100%'}} controls/>
                </div>
            </div>
        );
    }
}

export default connect(null,)(VideoPlayer);