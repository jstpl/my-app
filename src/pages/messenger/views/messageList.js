import React from 'react';
import MessageForm from "../components/messageForm";

export default function (props) {
    return (
        <div className="data-list">
            <div className="card card-primary direct-chat direct-chat-primary">
                <div className="card-header">
                    <h3 className="card-title">Direct Chat</h3>
                    <div className="card-tools">
                        <span data-toggle="tooltip" title="3 New Messages" className="badge badge-light">3</span>
                        {/*<button type="button" className="btn btn-tool" data-widget="collapse">
                            <i className="fas fa-minus"></i>
                        </button>
                        <button type="button" className="btn btn-tool" data-toggle="tooltip" title="Contacts"
                                data-widget="chat-pane-toggle">
                            <i className="fas fa-comments"></i>
                        </button>
                        <button type="button" className="btn btn-tool" data-widget="remove"><i
                            className="fas fa-times"></i>
                        </button>*/}
                    </div>
                </div>
                <div className="card-body">
                    <div className="direct-chat-messages">

                        {props.dataProvider && props.dataProvider.collection ? (
                            props.dataProvider.collection.map(function (messageEntity) {
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
                            })
                        ) : (
                            <div>Empty</div>
                        )}



                        {/*<div className="direct-chat-msg right">
                            <div className="direct-chat-infos clearfix">
                                <span className="direct-chat-name float-right">Sarah Bullock</span>
                                <span className="direct-chat-timestamp float-left">23 Jan 2:05 pm</span>
                            </div>
                            <img className="direct-chat-img" src="https://www.gravatar.com/avatar/d3d1446802a44259755d38e6d163e820?d=retro"
                                 alt="message user image"/>
                                <div className="direct-chat-text">
                                    You better believe it!
                                </div>
                        </div>*/}

                    </div>
                </div>
                <div className="card-footer">
                    <MessageForm/>
                </div>
            </div>
        </div>
    );
}
