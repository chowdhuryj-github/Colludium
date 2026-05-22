

const {app, BrowserWindow, Menu, ipcMain} = require('electron/main');
const path = require('path');

function createWindow() {

    win = new BrowserWindow({
        width: 1200,
        height: 850,
        frame: false,
        title: "Collodium",
        resizable: false,
        fullscreenable : false,
        maximizable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    // removing the nevgiation bar
    Menu.setApplicationMenu(null);
    win.loadFile('main.html');

}

app.whenReady().then(createWindow);


ipcMain.on('minimize-window', () => {
    BrowserWindow.getFocusedWindow().minimize();
})

ipcMain.on('close-window', () => {
    BrowserWindow.getFocusedWindow().close();
})
