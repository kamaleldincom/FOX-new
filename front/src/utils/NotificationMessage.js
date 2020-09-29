import React from 'react'
import { connect } from 'react-redux'
import { readNotification } from '../actions'

const handleClick = ([notification, readNotification]) => {
    if (notification.unread) {
        readNotification(notification.id)
    }
}


const NotificationMessage = props => {
    return (
        <div className="message" onClick={() => handleClick([props.notification, props.readNotification])}>
            <div>
                {/* <small className="text-muted">John Doe</small> */}
                <small className="text-muted float-right mt-1">{props.notification.emitted}</small>
            </div>
            <div className="text-truncate font-weight-bold">
                <span className="fa fa-exclamation text-danger">Important message</span>
            </div>
            <div className="small text-muted text-truncate">
                {props.notification.text}
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    readNotification: id => dispatch(readNotification(id))
})

export default connect(null, mapDispatchToProps)(NotificationMessage)
