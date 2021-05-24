
function openTab(evt, TabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(TabName).style.display = "block";
  evt.currentTarget.className += " active";
}


function SaveSettings()
{
	var CookieName = "UserSettings";
	var UserSettings = document.getElementById('inputsettings_value').value;
	var CookieValue = UserSettings;
	var ExpDate1 = new Date();
	ExpDate1.setTime(ExpDate1.getTime() + 1000*60*60*24*700);
	var cookieStr1 = CookieName + "=" + CookieValue + "; " +  "path=/" + "; " + "expires=" + ExpDate1.toUTCString()+ ";";
	document.cookie = cookieStr1;
	console.log(domo.env.userId);
	console.log("settings saved");
}

function getCookie() {
  var name = "UserSettings=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  console.log(document.cookie);
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];s
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
	console.log(c.substring(name.length, c.length));
    if (c.indexOf(name) == 0) {
      /*return c.substring(name.length, c.length);*/
	  document.getElementById('usettings_value').innerHTML = c.substring(name.length, c.length);
	  console.log("setting found")
	  console.log(c.substring);
    }
  }
  console.log("setting not found");
}