import React from 'react';
import {fetchStreams} from "../../actions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import liveIcon from './../../images/liveIcon.png';

const images = require.context('./../../images', true);

class VideoList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderCategory = () => {
        return Object.keys(this.props.streams).map(category => {
            return (
                <div className="row" key={category}>
                    <div className="ui stackable grid">
                        <div className="row" style={{paddingBottom: '0.3rem'}}>
                            <Link to="#">
                                <span style={{
                                    fontSize: '20px',
                                    fontWeight: '600',
                                    paddingRight: '0.5rem'
                                }}>{category}</span>
                                <span style={{fontSize: '14px'}}>Więcej</span>
                            </Link>
                        </div>
                        <div className="equal width row" style={{paddingTop: '0'}}>
                            {this.renderVideos(this.props.streams[category])}
                        </div>
                    </div>
                </div>
            );
        });
    };

    renderVideos = (videos) => {
        return videos.map(video => {
            return (
                <div className="column" key={video.imageId}>
                    <Link to="#">
                        <img src={images(`./${video.imageId}`)}
                             alt=""
                             className="ui centered image"/>
                        {video.isLive ? <img src={liveIcon} alt="" className="live-styling"/> : null}
                    </Link>
                    <Link to="#" style={{paddingBottom: '0'}}>
                        <span style={{
                            fontSize: '14px',
                            fontWeight: '600'
                        }}>{video.title}</span>
                    </Link>
                    <div style={{paddingTop: '0'}}>
                        <Link to="#">
                            <span style={{
                                fontSize: '12px',
                                fontWeight: '600'
                            }}>{video.user}</span>
                        </Link>
                        <span style={{
                            fontSize: '14px',
                            fontWeight: '500',
                            position: 'absolute',
                            right: '1rem'
                        }}>
                            <i aria-hidden="true" className="black eye icon"/>
                            {video.viewersNumber}
                        </span>
                    </div>
                </div>
            );
        });
    };

    render() {
        return (
            <div>
                {this.renderCategory()}
            </div>
        );
    }
}

const mapStateToProps = ({streams}) => {
    return {
        streams
    }
};

export default connect(mapStateToProps, {fetchStreams})(VideoList);