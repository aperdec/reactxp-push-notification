'use strict';

var RNPushNotification = require('react-native-push-notification');

var PushNotification = {
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

PushNotification.callNative = function (name: String, params: Array) {
    RNPushNotification.callNative(name, params);
};

PushNotification.configure = function (options: Object) {
    RNPushNotification.configure(options);
};

PushNotification.unregister = function () {
    RNPushNotification.unregister();
};

PushNotification.localNotification = function (details: Object) {
    RNPushNotification.localNotification(details);
};

PushNotification.localNotificationSchedule = function (details: Object) {
    RNPushNotification.localNotificationSchedule(details);
};

PushNotification._onRegister = function (token: String) {
    RNPushNotification._onRegister(token);
};

PushNotification._onRemoteFetch = function (notificationData: Object) {
    RNPushNotification._onRemoteFetch(notificationData);
};

PushNotification._onNotification = function (data, isFromBackground = null) {
    RNPushNotification._onNotification(data);
};

PushNotification._onPermissionResult = function () {
    RNPushNotification._onPermissionResult();
};

PushNotification._requestPermissions = function () {
    RNPushNotification._requestPermissions();
};

PushNotification.requestPermissions = function () {
    RNPushNotification.requestPermissions();
};

PushNotification.presentLocalNotification = function () {
    RNPushNotification.presentLocalNotification();
};

PushNotification.scheduleLocalNotification = function () {
    RNPushNotification.scheduleLocalNotification();
};

PushNotification.cancelLocalNotifications = function () {
    RNPushNotification.cancelLocalNotifications();
};

PushNotification.cancelAllLocalNotifications = function () {
    RNPushNotification.cancelAllLocalNotifications();
};

PushNotification.setApplicationIconBadgeNumber = function () {
    RNPushNotification.setApplicationIconBadgeNumber();
};

PushNotification.getApplicationIconBadgeNumber = function () {
    RNPushNotification.getApplicationIconBadgeNumber();
};

PushNotification.popInitialNotification = function (handler) {
    RNPushNotification.popInitialNotification();
};

PushNotification.abandonPermissions = function () {
    RNPushNotification.abandonPermissions();
};

PushNotification.checkPermissions = function () {
    RNPushNotification.checkPermissions();
};

PushNotification.registerNotificationActions = function () {
    RNPushNotification.registerNotificationActions();
};

PushNotification.clearAllNotifications = function () {
    RNPushNotification.clearAllNotifications();
};

module.exports = PushNotification;