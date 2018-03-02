'use strict';

var PushNotification = {
    handler: null,
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

PushNotification.callNative = function(name, params) {
    /* void */
};

PushNotification.configure = function(options) {
    /* void */
};

PushNotification.unregister = function() {
    /* void */
};

PushNotification.localNotification = function(details) {
    /* void */
};

PushNotification.localNotificationSchedule = function(details) {
    /* void */
};

PushNotification._onRegister = function(token) {
    /* void */
};

PushNotification._onRemoteFetch = function(notificationData) {
    /* void */
};

PushNotification._onNotification = function(data, isFromBackground = null) {
    /* void */
};

PushNotification._onPermissionResult = function() {
    /* void */
};

PushNotification._requestPermissions = function() {
    /* void */
};

PushNotification.requestPermissions = function() {
    /* void */
};

PushNotification.presentLocalNotification = function() {
    /* void */
};

PushNotification.scheduleLocalNotification = function() {
    /* void */
};

PushNotification.cancelLocalNotifications = function() {
    /* void */
};

PushNotification.cancelAllLocalNotifications = function() {
    /* void */
};

PushNotification.setApplicationIconBadgeNumber = function() {
    /* void */
};

PushNotification.getApplicationIconBadgeNumber = function() {
    /* void */
};

PushNotification.popInitialNotification = function(handler) {
    /* void */
};

PushNotification.abandonPermissions = function() {
    /* void */
};

module.exports = {
  PushNotification
};
