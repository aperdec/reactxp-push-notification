'use strict';

var RNPushNotification = require('react-native-push-notification');

var Notifications = {
    handler: RNPushNotification.handler,
    onRegister: false,
    onError: false,
    onNotification: false,
    onRemoteFetch: false,
    isLoaded: false,
    hasPoppedInitialNotification: false,

    isPermissionsRequestPending: false,

    permissions: {
        alert: true,
        badge: true,
        sound: true
    }
};

Notifications.callNative = function (name: String, params: Array) {
    RNPushNotification.callNative(name, params);
};

Notifications.configure = function (options: Object) {
    RNPushNotification.configure(options);
};

Notifications.unregister = function () {
    RNPushNotification.unregister();
};

Notifications.localNotification = function (details: Object) {
    RNPushNotification.localNotification(details);
};

Notifications.localNotificationSchedule = function (details: Object) {
    RNPushNotification.localNotificationSchedule(details);
};

Notifications._onRegister = function (token: String) {
    RNPushNotification._onRegister(token);
};

Notifications._onRemoteFetch = function (notificationData: Object) {
    RNPushNotification._onRemoteFetch(notificationData);
};

Notifications._onNotification = function (data, isFromBackground = null) {
    RNPushNotification._onNotification(data);
};

Notifications._onPermissionResult = function () {
    RNPushNotification._onPermissionResult();
};
