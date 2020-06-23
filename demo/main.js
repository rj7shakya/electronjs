const { app, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");

let win;
app.setPath("userData", __dirname + "/saved_recordings");

function createWindow() {
  win = new BrowserWindow({ width: 800, height: 600 });
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "/web/index.html"),
      protocol: "file:",
      slashes: true,
    })
  );
}

app.on("ready", createWindow);
