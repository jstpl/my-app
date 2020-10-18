import React, {Component} from 'react';
import { toast } from 'react-toastify';

const notify = function() {
    toast("Default Notification !");

    toast.success("Success Notification !", {
        position: toast.POSITION.TOP_CENTER
    });

    toast.error("Error Notification !", {
        position: toast.POSITION.TOP_LEFT
    });

    toast.warn("Warning Notification !", {
        position: toast.POSITION.BOTTOM_LEFT
    });

    toast.info("Info Notification !", {
        position: toast.POSITION.BOTTOM_CENTER
    });

    toast("Custom Style Notification with css class!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: 'foo-bar'
    });
};

export default class App extends Component {
    render() {
        return (
            <div>
                <button className="btn btn-success" onClick={notify}>Notify</button>
            </div>
        )
    }
}
