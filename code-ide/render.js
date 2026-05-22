

const {ipcRenderer} = require('electron');

document.getElementById('minimize-button').addEventListener('click', () => {
    ipcRenderer.send('minimize-window');
});

document.getElementById('close-button').addEventListener('click', () => {
    ipcRenderer.send('close-window');
});