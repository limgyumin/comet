const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow, workerWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    minWidth: 960,
    minHeight: 660,
    titleBarStyle: "customButtonsOnHover",
    title: "Comet",
    frame: true,
    //show: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  mainWindow.on("closed", () => {
    mainWindow == null;
  });
}

function createWorker() {
  workerWindow = new BrowserWindow({
    show: false,
    webPreferences: { nodeIntegration: true },
  });
  workerWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
}

app.on("ready", createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    createWorker();
  }
});
app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
