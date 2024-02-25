
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
  console.log(arg);
}

// script.js
const switchInput = document.getElementById('switch');

switchInput.addEventListener('change', switchTheme);

function switchTheme() {
  if (switchInput.checked) {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
  }
}

function convertToText() {
  // Get the content of the iframe
  var iframeContent = document.getElementById('output').contentWindow.document.body.innerText;
  
  // Create a Blob containing the text content
  var blob = new Blob([iframeContent], { type: 'text/plain' });
  
  // Create a temporary anchor element
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  
  // Set the filename
  a.download = 'iframe_content.txt';
  
  // Programmatically click the anchor element to trigger the download
  a.click();
}
