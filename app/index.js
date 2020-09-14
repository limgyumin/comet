const { app, BrowserWindow, Menu, Tray, nativeImage } = require("electron");
const path = require("path");
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
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
};

const createTray = () => {
  tray = new Tray(nativeImage.createEmpty());
  tray.setImage(
    nativeImage.createFromPath(path.join(__dirname, "assets", "logo.ico"))
  );
  tray.setToolTip("Tray is Working!");
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

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
