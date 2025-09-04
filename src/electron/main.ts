import {app,BrowserWindow} from "electron";
import path from "path";

type test = string;

app.on("ready", ()=>{
    const mainWindow = new BrowserWindow({
   width: 1200,
    height: 800,
    webPreferences: {
    nodeIntegration: true,
    contextIsolation: false
  }
});
    mainWindow.loadFile(path.join(app.getAppPath(), 'dist-react', 'index.html'));

})