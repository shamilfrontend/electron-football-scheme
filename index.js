const path = require('path');
const url = require('url');
const { app, BrowserWindow } = require('electron');

let window;

function createWindow() {
  window = new BrowserWindow({
    width: 960,
    height: 768,
    icon: `${__dirname}/images/icon.svg`
  });

  window.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true,
  }));

  // window.webContents.openDevTools();

  window.on('closes', () => {
    window = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  app.quit();
});
