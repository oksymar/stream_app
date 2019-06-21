import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchStreams} from '../../actions';
import HomePlayer from "./HomePlayer";
import VideoList from "./VideoList";

class StreamHome extends React.Component {
    state = {
        video: 0
    };

    componentDidMount() {
        this.props.fetchStreams();
    }

    onArrowClick = () => {
        this.setState({
            video: this.state.video ? 0 : 1
        })
    };

    renderList() {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    <i className="large middle aligned icon camera"/>
                    <div className="content">
                        <Link to={`/streams/${stream.id}`} className="header">
                            {stream.title}
                        </Link>
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            );
        });
    };

    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div style={{textAlign: 'right'}}>
                    <Link to="/streams/new" className="ui button primary">
                        Create Stream
                    </Link>
                </div>
            );
        }
    };

    render() {
        return (
            <div>
                <div className="ui center aligned four column grid hidden-element">
                    <div className="middle aligned row">
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
                </div>
                <VideoList/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
};

export default connect(mapStateToProps, {fetchStreams})(StreamHome);