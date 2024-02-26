# Skrivbar documentation

## Functions

### changeBackground

```javascript
function changeBackground() {
  //Obtaining the url from the value of the bgchanger element
  var url = document.getElementById("bgchanger").value;

  //Setting the background image of the body to the url
  document.getElementsByTagName("body")[0].style.backgroundImage =
    "url('" + url + "')";
}
```

This function is used in the header options, it allows the user to set the background of the page to a image setted in a cdn or search etc.

The function doesnt receive any argument, it looks for the value of the bgchanger element inside the header options. If the value of the bgchanger contains a image it will set the background image of the body element to url and inside the css function it will use the url from the bgchanger

### enableEditMode

```javascript
function enableEditMode() {
  //Sets the property of designMode to On in the richTextField
  richTextField.document.designMode = "On";
}
```

This function sets the designMode or editable option of the iframe to On enabling editing in the iframe so the user can write on it. The function is called when the user clicks on the iframe to write.

### Function: `execCommandWithArg`

#### Parameters:

- `command`: A string representing the command to be executed on the rich text editor.
- `arg`: An optional argument to be passed to the command.

#### Functionality:

- Calls the `execCommand` method on the `document` object of the `richTextField` iframe.
- Passes the specified `command` to the `execCommand` method along with `false` for the `showUI` parameter and `arg` for the `value` parameter.
- Logs the `arg` value to the console.

#### Code:

```javascript
function execCommandWithArg(command, arg) {
  richTextField.document.execCommand(command, false, arg);
  console.log(arg);
}
```
### Function: `switchTheme`

#### Functionality:
- This function toggles between dark and light themes for the web page.
- It checks the state of the `switchInput` checkbox (assuming it exists).
- If the checkbox is checked, it removes the `light-theme` class from the body element and adds the `dark-theme` class.
- If the checkbox is not checked, it removes the `dark-theme` class from the body element and adds the `light-theme` class.

#### Code:
```javascript
function switchTheme() {
  if (switchInput.checked) {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
  }
}

