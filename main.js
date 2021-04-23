// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron');
const path = require('path');


function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 1000,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
var htmlToRtf = require('html-to-rtf');
var html = richTextField.document.getElementsbyTagName("body")[0].innerHTML;
console.log(html)
function savefile () {
  htmlToRtf.saveRtfInFile('</home/TrshDesigns/Desktop/Skrivbar>/<test>.rtf', htmlToRtf.convertHtmlToRtf(html))
}

function changebackground(){
  var url = document.getElementById('bgchanger').value;
  document.getElementsByTagName('body')[0].style.backgroundImage = "url('" + url + "')";
}

function enableEditMode () {
    richTextField.document.designMode = "On";
}

function execCmd (command) {
    richTextField.document.execCommand(command, false, null);
}

function execCommandWithArg (command, arg){
  richTextField.document.execCommand(command, false, arg);
}
//Hide or Show Organizer
function hideorganizer() {
const organizer = document.getElementById("organizer");
const hideorganizer = document.getElementById("organizer-hider");
//on Show and Hide Styles
if (organizer.style.display === "block") {
  organizer.style.display = "none";
  organizer.style.width = "0px"
  hideorganizer.style.width = "50px"
  hideorganizer.style.height = "50px";
 } else {
  hideorganizer.style.width = "400px";
  hideorganizer.style.height = "30px";
  organizer.style.width = "40%"
  organizer.style.display = "block";
 }
}

