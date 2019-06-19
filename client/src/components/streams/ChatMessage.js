import React from 'react';

const ChatMessage = (props) => {
    return (
        <div className="event">
            <div className="label"><i className="big user circle icon"/></div>
            <div className="content" style={{margin: ".5em 0 .35em .15em"}}>
                <div className="summary">
                    {props.user}
                    <span style={{margin: "0 0 0 1em", fontWeight: '100'}}>{props.message}</span>
                </div>
            </div>
        </div>
    )
};

export default ChatMessage;