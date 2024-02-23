
function changebackground() {
  var url = document.getElementById("bgchanger").value;
  document.getElementsByTagName("body")[0].style.backgroundImage =
    "url('" + url + "')";
}

function enableEditMode() {
  richTextField.document.designMode = "On";
}

enableEditMode()
function execCmd(command) {
  richTextField.document.execCommand(command, false, null);
}

function execCommandWithArg(command, arg) {
  richTextField.document.execCommand(command, false, arg);
}

execCommandWithArg('fontSize', 1)