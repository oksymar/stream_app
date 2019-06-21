import React from 'react';
import {connect} from 'react-redux';
import {fetchStreams, fetchVideos} from '../../actions';
import VideoList from "./VideoList";
import HomePlayer from "./HomePlayer";
import {Link} from "react-router-dom";

class StreamHome extends React.Component {
    state = {
        video: 0
    };

    componentDidMount() {
        this.props.fetchStreams();
        this.props.fetchVideos();
    }

    onArrowClick = () => {
        this.setState({
            video: this.state.video ? 0 : 1
        })
    };

    renderPlayer = () => {
        if (this.props.videos[this.state.video]) {
            return (
                <div className="ui center aligned four column grid hidden-element">
                    <div className="middle aligned row" style={{paddingBottom: '0'}}>
                        <div className="right aligned two wide column">
                            <i aria-hidden="true" className="huge link arrow circle left icon"
                               onClick={this.onArrowClick}/>
                        </div>
                        <HomePlayer video={this.state.video}/>
                        <div className="left aligned two wide column">
                            <i aria-hidden="true" className="huge link arrow circle right icon"
                               onClick={this.onArrowClick}/>
                        </div>
                    </div>
                    <div className="middle aligned row" style={{paddingTop: '0'}}>
                        <div className="eight wide column">
                            <div className="ui grid">
                                <div className="row" style={{paddingBottom: '0'}}>
                                    <Link to="#" className="left aligned column">
                                        <h3>{this.props.videos[this.state.video].title}</h3>
                                    </Link>
                                </div>
                                <div className="row" style={{paddingTop: '0'}}>
                                    <Link to="#"
                                          className="left aligned column">{this.props.videos[this.state.video].user}</Link>
                                    <div className="right aligned right floated six wide column">
                                        <i aria-hidden="true" className="black eye icon"/>
                                        {this.props.videos[this.state.video].viewersNumber}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    };

    render() {
        return (
            <div>
                {this.renderPlayer()}
                <VideoList/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        isSignedIn: state.auth.isSignedIn,
        videos: Object.values(state.videos)
    }
};

export default connect(mapStateToProps, {fetchStreams, fetchVideos})(StreamHome);