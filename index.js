'use strict';

var PushNotifications = {
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

PushNotifications.callNative = function(name, params) {
    /* void */
};

PushNotifications.configure = function(options) {
    /* void */
};

PushNotifications.unregister = function() {
    /* void */
};

PushNotifications.localNotification = function(details) {
    /* void */
};

PushNotifications.localNotificationSchedule = function(details) {
    /* void */
};

PushNotifications._onRegister = function(token) {
    /* void */
};

PushNotifications._onRemoteFetch = function(notificationData) {
    /* void */
};

PushNotifications._onNotification = function(data, isFromBackground = null) {
    /* void */
};

PushNotifications._onPermissionResult = function() {
    /* void */
};

PushNotifications._requestPermissions = function() {
    /* void */
};

PushNotifications.requestPermissions = function() {
    /* void */
};

PushNotifications.presentLocalNotification = function() {
    /* void */
};

PushNotifications.scheduleLocalNotification = function() {
    /* void */
};

PushNotifications.cancelLocalNotifications = function() {
    /* void */
};

PushNotifications.cancelAllLocalNotifications = function() {
    /* void */
};

PushNotifications.setApplicationIconBadgeNumber = function() {
    /* void */
};

PushNotifications.getApplicationIconBadgeNumber = function() {
    /* void */
};

PushNotifications.popInitialNotification = function(handler) {
    /* void */
};

PushNotifications.abandonPermissions = function() {
    /* void */
};

module.exports = {
  PushNotification
};
