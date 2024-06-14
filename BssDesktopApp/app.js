const { app, BrowserWindow, ipcMain } = require('electron');
const url = require("url");
const path = require("path");

let mainWindow;

async function createWindow () {   

    process.env['ELECTRON_DISABLE_SECURITY_WARNINGS']=true;
    
    mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {       
        nodeIntegration: false,
        contextIsolation: true,
        enableRemoteModule: false,
        preload: path.join(__dirname, "preload.js")
    }
    })

    mainWindow.loadURL(
    url.format({
        pathname: path.join(__dirname, `/dist/bss-desktop-app/browser/index.html`),
        protocol: "file:",
        slashes: true
    })
    );

    // Open the DevTools.
    mainWindow.webContents.openDevTools()

    mainWindow.on('closed', function () {
        mainWindow = null;
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
    if (mainWindow === null) createWindow()
})
