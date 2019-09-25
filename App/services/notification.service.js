import AsyncStorage from "@react-native-community/async-storage";
import firebase from 'react-native-firebase';

export default class NotificationService {

    static async checkPermission() {
        const enabled = await firebase.messaging().hasPermission();
        return (enabled) ? this.getToken() : this.requestPermission()
    }

    static async requestPermission() {
        try {
            await firebase.messaging().requestPermission();
            // User has authorised
            this.getToken();
        } catch (error) {
            // User has rejected permissions
            console.log('permission rejected');
        }
    }

    static async getToken() {
        let fcmToken = await AsyncStorage.getItem('fcmToken');
        console.log(fcmToken)
        if (!fcmToken) {
            fcmToken = await firebase.messaging().getToken();
            console.log('token fcm', fcmToken)
            if (fcmToken) {
                // user has a device token
                await AsyncStorage.setItem('fcmToken', fcmToken);
            }
        }
    }

    static async createNotificationLIsteners() {
        console.log('masuk sini cuy')
        this.notificationListener = firebase.notifications().onNotification(notification => {
            const {title, body} = notification
            console.log('yayayay')

            console.log('createNotificationLIsteners', title, body)
        })

        // app is in background
        this.notificationOpenedListener = firebase.notifications().onNotificationOpened(notification => {
            const {title, body} = notification
            console.log('createNotificationLIsteners', title, body)
        })

        /*
         *  app is closed, and check if it was opened by a notification being clicked / tapped / opened as follows:
         * */

        const notificationOpen = await firebase.notifications().getInitialNotification()
        if (notificationOpen) {
            const {title, body} = notification
            console.log('createNotificationLIsteners', title, body)
        }


        this.messageListener = firebase.messaging().onMessage(message => {
            console.log('processed data message', JSON.stringify(message))
        })


    }
}
