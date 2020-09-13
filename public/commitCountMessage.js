const { session } = require("electron");
const schedule = require("node-schedule");

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

    schedule.scheduleJob("40 41 22 * * *", () => {
      const myNotification = new Notification("커밋 요정", {
        body: "기모띠",
      });
    });
  }
);

console.log(session.defaultSession.serviceWorkers.getAllRunning());
