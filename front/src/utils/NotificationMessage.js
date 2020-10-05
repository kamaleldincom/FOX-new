import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { readNotification } from '../actions'

const THRESHOLD = 5;
const MINUTE = 60000;
const DAY = MINUTE * 60 * 24;
const YEAR = DAY * 365;

const handleClick = ([notification, readNotification]) => {
  if (notification.unread) {
    readNotification(notification.id)
  }
}

const calculateTimeStamp = time => {
  const timeStamp = new Date(time);
  const currentTime = new Date();
  const timeDelta = currentTime - timeStamp;
  if (timeDelta < MINUTE) {
    return "Now";
  }
  if (timeDelta < THRESHOLD * MINUTE) {
    const minutes = Math.round(timeDelta / MINUTE);
    return `${minutes} minutes ago`;
  }
  if (timeDelta < DAY) {
    return new Intl.DateTimeFormat([], { hour: "2-digit", minute: "2-digit" }).format(timeStamp);
  }
  if (timeDelta < THRESHOLD * DAY) {
    const days = Math.round(timeDelta / DAY);
    const text = days < 2 ? "yesterday" : `${days} days ago`;
    return text;
  }
  if (timeDelta < YEAR) {
    return new Intl.DateTimeFormat([], { day: "2-digit", month: "short" }).format(timeStamp);
  }
  return new Intl.DateTimeFormat().format(timeStamp);

}

const checkFresh = fresh => {
  return fresh === true ? "font-weight-bold" : ""
}

const NotificationMessage = props => {
  const timeStamp = calculateTimeStamp(props.notification.emitted);
  return (
    <div className="message w-100" onClick={() => handleClick([props.notification, props.readNotification])}>
      <div className="d-flex justify-content-end">
        <small className={`text-muted mt-1 ${checkFresh(props.notification.unread)}`}>{timeStamp}</small>
      </div>
      <div className="text-truncate font-weight-bold">
      </div>
      <div className={`text-muted text-truncate ${checkFresh(props.notification.unread)}`}>
        {props.notification.text}
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  readNotification: id => dispatch(readNotification(id))
})

export default connect(null, mapDispatchToProps)(withRouter(NotificationMessage))
