const electron = require("electron");
const { Menu, Tray } = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow, workerWindow;
let tray = null;

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

  mainWindow.setMenu(null);

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

function createTray() {
  tray = new Tray(path.join(__dirname, "../build/favicon.ico"));
  var contextMenu = Menu.buildFromTemplate([
    {
      label: "Exit",
      click: function () {
        app.quit();
        tray.destroy();
      },
    },
  ]);
  tray.setToolTip("Comet is Working in Background!");
  tray.setContextMenu(contextMenu);
}

app.on("ready", createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    createWorker();
    createTray();
  }
});
app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
