const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

// Initialize the app
app.on('ready', () => {
  // Create the main window
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

  // Load the Angular app
  mainWindow.loadURL('http://localhost:4200');

  // Open the DevTools
  mainWindow.webContents.openDevTools();
});

// Quit when all windows are closed
app.on('window-all-closed', () => {
  // Quit when only the main window is closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
