
function CreateCookies()
{
	var CookieName = "UserSettings";
	var CookieValue = "saved filters...";
	var ExpDate1 = new Date();
	ExpDate1.setTime(ExpDate1.getTime() + 1000*60*60*24*700);
	var cookieStr1 = CookieName + "=" + CookieValue + "; " +  "path=/" + "; " + "expires=" + ExpDate1.toUTCString();
	document.cookie = cookieStr1;	
	
}

window.onload = function()
{
	CreateCookies();
}

