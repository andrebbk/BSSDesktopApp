const { app, BrowserWindow, ipcMain } = require('electron');
const url = require("url");
const path = require("path");
const { initIPCHandlers } = require('./handlers/ipcHandlers.js');
const { initBssLogging, logInfo } = require('./handlers/loggerHandler.js');

let mainWindow, startUpWindow;

async function createWindows () {  
    // initialize the logger for any renderer process
    initBssLogging();

    logInfo('Log from the main process');
    
    process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = true;
    
    mainWindow = new BrowserWindow({
        show: false,
        frame: false,
        center: true,
        movable: false,
        resizable: false,
        maximizable: true, //TODO: change to false
        minimizable: false, //TODO: change to true
        titleBarStyle: 'hidden',
        webPreferences: {         
            webSecurity: true,
            defaultEncoding: 'UTF-8',
            nodeIntegration: false, 
            contextIsolation: true,
            enableRemoteModule: true,       
            nodeIntegrationInWorker: true,
            worldSafeExecuteJavaScript: true,
            preload: path.join(__dirname, 'preload.js')
        },
        backgroundColor: '#FFDF00',
        icon: __dirname +  "/src/assets/icons/bss_app_icon.ico"
    });

    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, `/dist/bss-desktop-app/browser/index.html`),
            protocol: "file:",
            slashes: true
        })
    );

    //TODO: remove this comments
    /*startUpWindow = new BrowserWindow({
        parent: mainWindow,
        width: 500,
        height: 300,
        frame: false,
        center: true,
        movable: false,
        resizable: false,
        maximizable: false,
        minimizable: false,
        titleBarStyle: 'hidden',
        backgroundColor: '#FFDF00',
        webPreferences: {
            webSecurity: false,
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        },
        icon: __dirname +  "/src/assets/icons/bss_app_icon.ico"
    });
    
    startUpWindow.loadURL(url.format({
        pathname:path.join(__dirname, 'StartUp.html'),
        protocol:'file',
        slashes:true
    }));*/

    //TODO: remove this lines
    mainWindow.maximize();
    mainWindow.show();

    // open the DevTools
    mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function () {
        mainWindow = null;
    });    
}

app.on('ready', createWindows);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
})

app.on('activate', function () {
    if (mainWindow === null) createWindows();
})

// initialize IPC main handlers
initIPCHandlers();

ipcMain.on('openModal', (event, arg) => {
    console.log(arg);     
});

ipcMain.on('request-mainprocess-action', (event, arg) => {
    mainWindow.maximize();
});