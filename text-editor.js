
function chooseColor(){
    var mycolor = document.getElementById("myColor").value;
    document.execCommand('foreColor', false, mycolor);
  }

  function changeFont(){
    var myFont = document.getElementById("input-font").value;
    document.execCommand('fontName', false, myFont);
  }

  function changeSize(){
    var mysize = document.getElementById("fontSize").value;
    document.execCommand('fontSize', false, mysize);
  }

  function checkDiv(){
    var editorText = document.getElementById("output").innerHTML;
    if(editorText === ''){
      document.getElementById("output").style.border = '5px solid red';
    }
  }

  function removeBorder(){
    document.getElementById("output").style.border = '1px solid transparent';
  }
  function changebackground(){
    var url = document.getElementById('bgchanger').value;
    document.getElementsByTagName('body')[0].style.backgroundImage = "url('" + url + "')";
}
function hideorganizer() {
  const organizer = document.getElementById("organizer");
  const hideorganizer = document.getElementById("organizer-hider");
  const organizerwidht = document.getElementById("organizer").width;
  if (organizer.style.display === "block") {
    organizer.style.display = "none";
    organizer.style.width = "0px"
    hideorganizer.style.width = "50px"
    hideorganizer.style.height = "50px";
  } else {
    organizer.style.display = "block";
    organizer.style.width = "40%"
    hideorganizer.style.width = "400px";
    hideorganizer.style.height = "30px";
  }
}