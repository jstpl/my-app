import React, {Component} from 'react';
// import MessageListView from '../views/messageList'
import {connect} from "react-redux";
import Query from "../../../../packages/domain/libs/Query";
import container from "../../../../app/config/container";
import MessageForm from "./messageForm";

class MessageList extends Component {

    updateList() {
        let chatId = this.props.match.params.chatId;
        let query = new Query();
        query.filter.chatId = chatId;
        container.messenger.services.message.all(query).then(() => {
            //this.scrollToBottom();
        });
    }

    componentDidMount() {
        this.updateList();
        this.onUpdate();
    }

    componentDidUpdate(prevProps) {
        let chatId = this.props.match.params.chatId;
        let prevChatId = prevProps.match.params.chatId;
        // Обычное использование (не забудьте сравнить свойства):
        if (chatId !== prevChatId) {
            this.updateList();
        }
        this.onUpdate();
    }

    onUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom() {
        this.messagesList.scrollTop = this.messagesList.scrollHeight;
    }

    render() {
        let myId = container.security.services.userProvider.getTokenEntity().identity.id;
        //console.log(myId);
        return (
            <div className="data-list">
                <div className="card card-primary direct-chat direct-chat-primary">
                    <div className="card-header">
                        <h3 className="card-title">Direct Chat</h3>
                        <div className="card-tools">
                            <span data-toggle="tooltip" title="3 New Messages" className="badge badge-light">3</span>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="direct-chat-messages" ref={(el) => { this.messagesList = el; }}>

                            {this.props.dataProvider && this.props.dataProvider.collection ? (
                                this.props.dataProvider.collection.map(function (messageEntity) {
                                    if(messageEntity.authorId === myId) {
                                        return (
                                            <div key={messageEntity.id} className="direct-chat-msg right">
                                                <div className="direct-chat-infos clearfix">
                                                    <span className="direct-chat-name float-right">{messageEntity.author.username}</span>
                                                    <span
                                                        className="direct-chat-timestamp float-left">{messageEntity.createdAt}</span>
                                                </div>
                                                <img className="direct-chat-img"
                                                     src={messageEntity.author.logo}
                                                     alt="message user image"/>
                                                <div className="direct-chat-text">
                                                    {messageEntity.text}
                                                </div>
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <div key={messageEntity.id} className="direct-chat-msg">
                                                <div className="direct-chat-infos clearfix">
                                                    <span className="direct-chat-name float-left">{messageEntity.author.username}</span>
                                                    <span className="direct-chat-timestamp float-right">{messageEntity.createdAt}</span>
                                                </div>
                                                <img className="direct-chat-img" src={messageEntity.author.logo}
                                                     alt="message user image"/>
                                                <div className="direct-chat-text">
                                                    {messageEntity.text}
                                                </div>
                                            </div>
                                        );
                                    }
                                })
                            ) : (
                                <div>Empty</div>
                            )}

                            <div style={{ float:"left", clear: "both" }}
                                 ref={(el) => { this.messagesEnd = el; }}>
                            </div>

                        </div>
                    </div>
                    <div className="card-footer">
                        <MessageForm/>
                    </div>
                </div>
            </div>
            // <MessageListView messagesEnd={this.messagesEnd} dataProvider={this.props.dataProvider}/>
        );
    }
}

const mapStateToProps = (store) => store.messengerMessage;
export default connect(mapStateToProps)(MessageList);
