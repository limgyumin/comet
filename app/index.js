const { app, BrowserWindow, Menu, Tray, nativeImage } = require("electron");
const path = require("path");
const fs = require("fs");
const isDev = require("electron-is-dev");
const { session } = require("electron");

let mainWindow;
let tray = null;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    minWidth: 960,
    minHeight: 660,
    titleBarStyle: "hidden",
    title: "Comet",
    frame: false,
    //show: false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    },
  });

  // mainWindow.on("ready-to-show", () => {
  //   mainWindow.show();
  //   mainWindow.removeMenu();
  // });

  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  if (isDev) {
  }

  mainWindow.on("minimize", function (event) {
    event.preventDefault();
    mainWindow.hide();
  });

  mainWindow.on("close", function (event) {
    if (!application.isQuiting) {
      event.preventDefault();
      mainWindow.hide();
    }
    return false;
  });

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
};

const createTray = () => {
  //const iconPath = path.join(__dirname, "../src/assets/icons/logo.ico");
  //const nimage = nativeImage.createFromPath(iconPath);
  tray = new Tray(nativeImage.createEmpty());
  const contextMenu = Menu.buildFromTemplate([
    {
      label: "Show App",
      click: () => {
        mainWindow.show();
      },
    },
    {
      label: "Quit",
      click: () => {
        application.isQuiting = true;
        application.quit();
      },
    },
  ]);
  tray.setToolTip("Tray is Working!");
  tray.setContextMenu(contextMenu);
};

const startServiceWorker = () => {
  console.log(
    "ServiceWorker: " + session.defaultSession.serviceWorkers.getAllRunning()
  );
  session.defaultSession.serviceWorkers.on(
    "console-message",
    (event, messageDetails) => {
      console.log(
        "Got service worker message",
        messageDetails,
        "from",
        session.defaultSession.serviceWorkers.getFromVersionID(
          messageDetails.versionId
        )
      );
    }
  );
};

app.on("ready", () => {
  createWindow();
  createTray();
  startServiceWorker();
});

// app.on("window-all-closed", () => {
//   if (process.platform !== "darwin") {
//     app.quit();
//   }
// });

// app.on("activate", () => {
//   if (mainWindow === null) {
//     createWindow();
//   }
// });
