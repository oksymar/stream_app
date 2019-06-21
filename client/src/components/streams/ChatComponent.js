import React from 'react';
import ChatMessage from "./ChatMessage";
import {connect} from 'react-redux';
import {addMessage} from "../../actions";

class ChatComponent extends React.Component {
    state = {
        message: ""
    };

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'start'});
    };

    handleMessageChange = e => {
        this.setState({
            message: e.target.value
        });
    };

    onFormSubmit = e => {
        e.preventDefault();
        this.props.addMessage({message: this.state.message, user: "Diglet"});
        this.setState({
            message: ''
        });
    };

    renderMessages = () => {
        return (
            this.props.chatData.map((data, index) => {
                return <ChatMessage key={index} message={data.message} user={data.user}/>
            })
        )
    };

    render() {
        return (
            <div className="six wide column">
                <div style={{backgroundColor: 'white', padding: '0.5rem', height: 'calc(100% - 38px)'}}>
                    <h3>Czat:</h3>
                    <div className="ui feed" style={{height: '325px', overflow: 'auto'}}>
                        {this.renderMessages()}
                        <div style={{float: "left", clear: "both"}}
                             ref={(el) => {
                                 this.messagesEnd = el;
                             }}>
                        </div>
                    </div>
                </div>
                <form className="ui fluid icon input" onSubmit={this.onFormSubmit}>
                    <input type="text"
                           value={this.state.message}
                           onChange={this.handleMessageChange}
                           style={{borderColor: 'rgba(34,36,38,.15)'}}/>
                    <i aria-hidden="true" className="black send icon" style={{opacity: '1'}}/>
                </form>
            </div>
        )
    }
};

const mapStateToProps = ({chat}) => {
    return {
        chatData: chat
    }
};

export default connect(mapStateToProps, {addMessage})(ChatComponent);