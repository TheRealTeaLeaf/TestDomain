
function CreateCookies()
{
	var CookieName = "targetingCookie1";
	var CookieValue = "value1";
	var ExpDate1 = new Date();
	ExpDate1.setTime(ExpDate1.getTime() + 1000*60*60*24*700);
	var cookieStr1 = CookieName + "=" + CookieValue + "; " +  "path=/" + "; " + "expires=" + ExpDate1.toUTCString();
	document.cookie = cookieStr1;	
	
	var CookieName = "targetingCookie2";
	var CookieValue = "value2";
	var ExpDate2 = new Date();
	ExpDate2.setTime(ExpDate2.getTime() + 1000*60*60*24*700);
	var cookieStr2 = CookieName + "=" + CookieValue + "; " +  "path=/" + "; " + "expires=" + ExpDate2.toUTCString();
	document.cookie = cookieStr2;
	
	var CookieName = "functionalCookie1";
	var CookieValue = "value3";
	var ExpDate3 = new Date();
	ExpDate3.setTime(ExpDate3.getTime() + 1000*60*60*24*700);
	var cookieStr3 = CookieName + "=" + CookieValue + "; " +  "path=/" + "; " + "expires=" + ExpDate3.toUTCString();
	document.cookie = cookieStr3;
	
	var CookieName = "performanceCookie1";
	var CookieValue = "value4";
	var ExpDate4 = new Date();
	ExpDate4.setTime(ExpDate4.getTime() + 1000*60*60*24*700);
	var cookieStr4 = CookieName + "=" + CookieValue + "; " +  "path=/" + "; " + "expires=" + ExpDate4.toUTCString();
	document.cookie = cookieStr4;
}

window.onload = function()
{
	CreateCookies();
}

