const { app, BrowserWindow, ipcMain } = require('electron');
const url = require("url");
const path = require("path");

let mainWindow, startUpWindow;

var knex = require("knex")({
    client: "sqlite3",
    connection: {
        filename: "./public/bss.db"
    },
    useNullAsDefault: true
});

async function createWindows () {   
    process.env['ELECTRON_DISABLE_SECURITY_WARNINGS']=true;
    
    mainWindow = new BrowserWindow({
        show: false,
        frame: false,
        center: true,
        movable: false,
        resizable: false,
        maximizable: false,
        minimizable: true,
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
        backgroundColor: '#FFDF00'
    });

    startUpWindow = new BrowserWindow({
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
    })

    mainWindow.loadURL(
    url.format({
        pathname: path.join(__dirname, `/dist/bss-desktop-app/browser/index.html`),
        protocol: "file:",
        slashes: true
    })
    );

    startUpWindow.loadURL(url.format({
        pathname:path.join(__dirname, 'StartUp.html'),
        protocol:'file',
        slashes:true
    }))

    // Open the DevTools.
    //mainWindow.webContents.openDevTools()

    mainWindow.on('closed', function () {
        mainWindow = null;
    })

    ipcMain.on('request-mainprocess-action', (event, arg) => {
        mainWindow.maximize();
    });
}

app.on('ready', createWindows)

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
    if (mainWindow === null) createWindows()
})

ipcMain.on('getTests', (event, arg) => {
    let result = knex.select('*').from('Test');

    result.then(function (rows){
        event.sender.send('result_SendTests', rows);
    });       
});



ipcMain.on('openModal', (event, arg) => {
    console.log(arg);     
});