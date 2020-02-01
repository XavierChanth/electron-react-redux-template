const { app, BrowserWindow } = require('electron');
const path = require('path');

let win = null;

const createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadURL(path.join('file://',__dirname,'index.html'));

  win.on('closed', () => {
    win = null;
  });
}

const singleLock = app.requestSingleInstanceLock();
if(singleLock) {
  app.on('second-instance', () => {
    if(win) {
      if(win.isMinimized()) win.restore();
      win.focus();
    }
  });
  app.on('ready', createWindow);
} else {
  app.quit();
}

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if(win === null) {
    createWindow();
  }
});
