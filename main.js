function changeBackground() {
  var url = document.getElementById("bgchanger").value;
  document.body.style.backgroundImage = "url('" + url + "')";
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

let toolbarVisible = true;

// Function to toggle visibility of the toolbar
function toggleToolbar() {
  const toolbar = document.querySelector('.toolbar');
  toolbarVisible = !toolbarVisible;
  toolbar.style.display = toolbarVisible ? 'block' : 'none';
}

// Event listener for the button to hide/show the toolbar
document.getElementById('toggle-toolbar').addEventListener('click', toggleToolbar);

// Event listener for keyboard input in the richTextField
richTextField.document.addEventListener('keydown', function (event) {
  const keyCode = event.keyCode || event.which;
  const slashKeyCode = 191; // KeyCode for "/"

  // Check if "/" key is pressed and toolbar is visible
  if (keyCode === slashKeyCode && toolbarVisible) {
    event.preventDefault(); // Prevent "/" from being inserted into the editor

    // Show the list of available commands
    showCommandList();
  }
});

// Function to show the list of available commands
function showCommandList() {
  const commands = [
    'bold',
    'italic',
    'underline',
    'insertOrderedList',
    'insertUnorderedList',
    // Add more commands as needed
  ];

  const input = prompt('Type a command:');

  if (input) {
    const filteredCommands = commands.filter(command => command.startsWith(input));

    if (filteredCommands.length > 0) {
      const selectedCommand = prompt('Select a command:\n' + filteredCommands.join('\n'));
      if (selectedCommand && commands.includes(selectedCommand)) {
        execCmd(selectedCommand);
      }
    } else {
      alert('No matching commands found.');
    }
  }
}


const switchInput = document.getElementById('switch');

switchInput.addEventListener('change', switchTheme);

// Function to set the color of newly entered text
function setNewTextColor(color) {
  document.execCommandWithArg('foreColor', false, color);
}

function switchTheme() {
  const isDarkMode = switchInput.checked;
  const textColor = isDarkMode ? '#ccc' : '#000';
  const themeClass = isDarkMode ? 'dark-theme' : 'light-theme';

  // Add or remove the dark or light theme class to the body element
  document.body.classList.remove('light-theme', 'dark-theme');
  document.body.classList.add(themeClass);

  // Update localStorage to save theme preference
  localStorage.setItem('darkMode', isDarkMode);

  // Ensure the color of new text is set properly after theme switch
  richTextField.document.designMode = "On"; // Ensure the editor is in design mode
  richTextField.document.execCommand('selectAll', false, null); // Select all existing text
  richTextField.document.execCommand('foreColor', false, textColor); // Set text color
  richTextField.document.getSelection().collapseToEnd(); // Collapse selection to end
}


// Function to recursively update the color of text nodes within an element
function updateTextColor(element, color) {
  if (element.nodeType === Node.TEXT_NODE) {
    element.parentNode.style.color = color;
  } else {
    for (var i = 0; i < element.childNodes.length; i++) {
      updateTextColor(element.childNodes[i], color);
    }
  }
}

// Initial theme setup based  local storage
window.onload = function () {

  richTextField.document.designMode = "On"; // Ensure the editor is in design mode
  const isDarkMode = localStorage.getItem('darkMode');
  // Check if there is any content in the rich text editor
  const richTextContent = richTextField.document.body.innerHTML.trim();

  // If the rich text editor is empty, add some text to it
  if (richTextContent === '') {
    richTextField.document.body.innerHTML = 'Skrivb!'; // Add text to the rich text editor
  }
  if (isDarkMode === 'true') {
    switchInput.checked = true;
    switchTheme(); // Apply dark theme
  }
}



function htmlToMarkdown(html) {
  // Create a new instance of Turndown
  var turndown = new TurndownService();

  // Convert HTML to Markdown
  var markdown = turndown.turndown(html);

  return markdown;
}

function convertToMarkdown() {
  // Get the content of the iframe
  var iframeContent = document.getElementById('output').contentWindow.document.body.innerHTML;

  // Convert the HTML content to Markdown
  var markdownContent = htmlToMarkdown(iframeContent);

  // Create a Blob containing the Markdown content
  var blob = new Blob([markdownContent], { type: 'text/plain' });

  // Create a temporary anchor element
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);

  // Set the filename
  let fileName = prompt("Set file name");
  if (fileName) {
    a.download = fileName + '.md';

    // Programmatically click the anchor element to trigger the download
    a.click();
  }
}

// Function to handle file input change event
document.getElementById('fileInput').addEventListener('change', function (event) {
  var file = event.target.files[0];

  // Check if a file is selected
  if (file) {
    var reader = new FileReader();

    // Event listener for when the file is loaded
    reader.onload = function () {
      var markdownContent = reader.result;

      // Load Markdown content into the iframe
      loadMarkdown(markdownContent);
    };

    // Read the file as text
    reader.readAsText(file);
  }
});

// Function to load Markdown content into the iframe
function loadMarkdown(markdownContent) {
  // Create a new instance of Showdown
  var converter = new showdown.Converter();

  // Convert Markdown to HTML
  var htmlContent = converter.makeHtml(markdownContent);

  // Set the HTML content of the iframe
  var iframe = document.getElementById('output').contentWindow.document;
  iframe.open();
  iframe.write(htmlContent);
  iframe.close();
  switchTheme();
}
