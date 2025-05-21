const log = require('electron-log/main');

function initBssLogging() {
    // Optional, initialize the logger for any renderer process
    log.transports.file.resolvePathFn = () => './logs/main.log';
    log.initialize();
}

function logInfo(message) {
    log.info(message);
}

function logError(message) {
    log.error(message);
}

function logDebug(message) {
    log.debug(message);
}

module.exports = { initBssLogging, logInfo, logError, logDebug };