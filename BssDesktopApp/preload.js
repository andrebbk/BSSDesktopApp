const { contextBridge, ipcRenderer } = require("electron");
const log = require('electron-log/renderer');

// expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld(
    "api", {
        send: (channel, data) => {
            ipcRenderer.send(channel, data);
        },
        receive: (channel, func) => {
            ipcRenderer.on(channel, (event, ...args) => func(...args));
        }
    }
);

// expose the logger to the renderer process
contextBridge.exposeInMainWorld(
    "bssLogger", {
        logInfo: (valueToLog) => {
            log.info(valueToLog);
        }
    }
);