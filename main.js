  function changeBackground() {
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

  const switchInput = document.getElementById('switch');

  switchInput.addEventListener('change', switchTheme);

  function switchTheme() {
    if (switchInput.checked) {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      execCommandWithArg('foreColor', '#fff');
      localStorage.setItem('darkMode', true);
    } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      execCommandWithArg('foreColor', '#000');
      localStorage.setItem('darkMode', false);
    }
  }

  window.onload = function () {
    const isDarkMode = localStorage.getItem('darkMode');
    if (isDarkMode === 'true') {
      // Apply dark mode styles
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
    } else {
      // Apply light mode styles
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
    }
  }


  function htmlToMarkdown(html) {
    // Create a new instance of Turndown
    var turndown = new TurndownService();

    // Add custom rules as needed (optional)
    // turndown.addRule('ruleName', {
    //   filter: 'element',
    //   replacement: function (content, node) {
    //     // Custom replacement logic
    //     return replacement;
    //   }
    // });

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
    let fileName = prompt("Set file name")
    a.download = fileName + '.md';

    // Programmatically click the anchor element to trigger the download
    a.click();
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
  }



