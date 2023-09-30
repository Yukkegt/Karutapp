import path from "path";
import { BrowserWindow, app } from "electron";
import url from 'url';

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true, 
      contextIsolation: false, 
      preload: path.resolve(__dirname, "preload.js"),
    },
  });

  // mainWindow.loadFile("dist/index.html");
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, '/index.html'),
      
      slashes: true
    })
  );
  // mainWindow.webContents.openDevTools({ mode: "detach" });
};

app.whenReady().then(() => {
  createWindow();
});

app.once("window-all-closed", () => app.quit());
