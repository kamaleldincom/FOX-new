import { FoxApiService } from '../services'

const foxApi = new FoxApiService();

const getNotifications = () => {
  return dispatch => {
    foxApi.getEntityList('notifications')
      .then(data => {
        if (data.length > 0) {
          dispatch(refreshNotificationList(data))
        }
      })
      .catch(function (error) {
        console.error(error);
      })
  }
}

const readNotification = id => {
  return dispatch => {
    foxApi.patchEntityOf('notifications', id, { unread: false })
      .then(data => {
        if (data.id) {
          dispatch(setNotificationAsRead(data))
        }
      })
  }
}

const refreshNotificationList = notifications => ({
  type: 'REFRESH_NOTIFICATION_LIST',
  notifications: notifications
})

const setNotificationAsRead = notification => ({
  type: 'READ_NOTIFICATION',
  notification: notification
})

export { getNotifications, readNotification }
