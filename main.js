// Modules to control application life and create native browser window
const { app, BrowserWindow } = require("electron");
const { get } = require("http");
const path = require("path");
const { stringify } = require("querystring");

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 1000,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile("index.html");

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

function changebackground() {
  var url = document.getElementById("bgchanger").value;
  document.getElementsByTagName("body")[0].style.backgroundImage =
    "url('" + url + "')";
}

function enableEditMode() {
  richTextField.document.designMode = "On";
}

function execCmd(command) {
  richTextField.document.execCommand(command, false, null);
}

function execCommandWithArg(command, arg) {
  richTextField.document.execCommand(command, false, arg);
}
//Hide or show list organizer
function hidelistorganizer() {
  const listorganizer = document.getElementById("list");
  const hidelistorganizer = document.getElementById("list-organizer-hider");
  //on Show and Hide Styles
  if (listorganizer.style.display === "block") {
    listorganizer.style.width = "0px";
    listorganizer.style.display = "none";
    hidelistorganizer.style.margin = "2px 0px 0px 5px";
  } else {
    listorganizer.style.display = "block";
    hidelistorganizer.style.margin = "2px 0px 0px 5px";
  }
}

//limit the amount of characters on the input name in the list
//creates a new list when the button addButton is clicked
function createNewList() {
  const listItem = document.createElement("li");
  const listItems = document.getElementById("listitems");
  listItem.className = "list-item";
  listItem.innerHTML = `<input class="list-name" value="Re Write Me!" type="text" maxlength="30"><button class="deleteListItem" onclick="deleteListItem()"><svg width="30" height="30" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24.4437 24.5566L38.5858 38.6988L41.4142 41.5272L55.5564 55.6693" stroke="#F2994A" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M55.5563 24.5566L41.4142 38.6988L38.5858 41.5272L24.4436 55.6693" stroke="#F2C94C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
</svg></button>`;
  listItems.appendChild(listItem);
}
//delete a list item
function deleteListItem() {
  const listItems = document.getElementById("listitems");
  const listItem = document.getElementsByClassName("list-item");
  //delete the exact item in wicth the deleteListItem function was called
  listItem[0].remove();
}

//extends the header and hides the main element
function extend() {
  const header = documentGetElementById("header");
  const main = documentGetElementById("main");
  if ((main.style.display = "flex")) {
    main.style.display = "none";
    header.style.height = "100vh";
  } else {
    main.style.display = "flex";
    header.style.height = "30px";
  }
}
//hidefiledisplayer
function hidefiledisplayer() {
  const filedisplayer = document.getElementById("filedisplayer");
  if (filedisplayer.style.display === "block") {
    filedisplayer.style.display = "none";
  } else {
    filedisplayer.style.display = "block";
  }
}
//Hide or Show Organizer
function hideorganizer() {
  const organizer = document.getElementById("organizer");
  const hideorganizer = document.getElementById("organizer-hider");
  //on Show and Hide Styles
  if (organizer.style.display === "block") {
    organizer.style.display = "none";
    organizer.style.width = "0px";
    hideorganizer.style.width = "50px";
    hideorganizer.style.height = "50px";
  } else {
    hideorganizer.style.width = "400px";
    hideorganizer.style.height = "30px";
    organizer.style.width = "40%";
    organizer.style.display = "block";
  }
}
