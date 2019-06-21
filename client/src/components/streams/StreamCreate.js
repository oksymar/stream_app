import React from 'react';
import ChatComponent from "./ChatComponent";
import VideoPlayer from "./VideoPlayer";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
    state = {
        counter: 0
    };

    onStartClick = ({target}) => {
        if (target.innerHTML === 'Rozpocznij transmisję streama') {
            target.style.backgroundColor = '#CCCCCC';
            target.innerHTML = 'Zakończ transmisję streama';
            this.timer = setInterval(() => {
                console.log('dsd');
                this.setState({
                    counter: this.state.counter + 1
                });
            }, 1000);
        } else {
            target.style.backgroundColor = '#FF0000';
            target.innerHTML = 'Rozpocznij transmisję streama';
            clearInterval(this.timer);
        }
    };

    render() {
        return (
            <div>
                <div className="ui stackable equal height grid">
                    <div className="row">
                        <VideoPlayer/>
                        <ChatComponent/>
                    </div>
                    <div className="row">
                        <div className="sixteen wide column">
                            <button className="ui fluid large button"
                                    style={{color: 'black', backgroundColor: 'red'}}
                                    onClick={this.onStartClick}>Rozpocznij transmisję streama
                            </button>
                        </div>
                    </div>
                </div>
                <div className="ui stackable grid">
                    <div className="row">
                        <StreamForm/>
                        <div className="six wide column">
                            <div className="row" style={{paddingBottom: '1em'}}>
                                <div style={{backgroundColor: 'white', padding: '0.5rem'}}>
                                    <h3>Statystyki:</h3>
                                    <div style={{padding: '0.5rem'}}>
                                        <h5>Czas transmisji:</h5>
                                        <div style={{fontWeight: '800'}}>
                                            <i aria-hidden="true" className=" large black clock outline icon"/>
                                            {this.state.counter} s
                                        </div>
                                    </div>
                                    <div style={{padding: '0.5rem'}}>
                                        <h5>Liczba widzów:</h5>
                                        <div style={{fontWeight: '800'}}>
                                            <i aria-hidden="true" className=" large black eye icon"/>
                                            0
                                        </div>
                                    </div>
                                    <div style={{padding: '0.5rem'}}>
                                        <h5>Pozytywne/Negatywne reakcje:</h5>
                                        <div style={{fontWeight: '800'}}>
                                            <i aria-hidden="true" className=" large black thumbs up outline icon"/>
                                            0
                                            <i aria-hidden="true" className=" large black thumbs down outline icon"
                                               style={{marginLeft: '1em'}}/>
                                            0
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{paddingTop: '1em'}}>
                                <div style={{backgroundColor: 'white', padding: '0.5rem'}}>
                                    <h3>Token:</h3>
                                    <div style={{fontWeight: '800', paddingLeft: '1rem', overflowWrap: 'break-word'}}>
                                        DSVMMwdEdsdd4f45DEHf54dttD3dEq279DSVw
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StreamCreate;