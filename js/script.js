
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



function CookieCreate()
{
	var CookieName = CreateCookieForm["CookieName"].value;
	var CookieValue = CreateCookieForm["CookieValue"].value;
	var CookieLifeSpan = CreateCookieForm["CookieLifeSpan"].value;
	var ExpDate = new Date();
	ExpDate.setTime(ExpDate.getTime() + 1000*60*60*24*CookieLifeSpan);
	var cookieStr = CookieName + "=" + CookieValue + "; " +  "path=/" + "; " + "expires=" + ExpDate.toUTCString();
	document.cookie = cookieStr;
}

function CookieTableSetup() 
{
	var body = document.getElementsByTagName('body')[0];
	if (document.getElementById('CookieTable') != null)
	{
		document.getElementById('CookieTable').remove();
	}	
	
	var tbl = document.createElement('table');
	tbl.id = "CookieTable";
	tbl.style.width = '100%';
	tbl.setAttribute('border', '1');
	
	var tbdy = document.createElement('tbody');
	var tr = document.createElement('tr');
	var td = document.createElement('td');	
	td.innerHTML = "Cookie Name";
	tr.appendChild(td);
	var td = document.createElement('td');
	td.innerHTML = "Cookie Value";
	tr.appendChild(td);
	tbdy.appendChild(tr);
	var CookieArray = document.cookie.split('; ');
	for (var i = 0; i < CookieArray.length; i++) 
	{
		var tr = document.createElement('tr');
		var CookieAtr = CookieArray[i].split('=');
		for (var j = 0; j < CookieAtr.length; j++) 
		{
			var td = document.createElement('td');
			td.innerHTML = CookieAtr[j];
			tr.appendChild(td);
		}
		tbdy.appendChild(tr);
	}
	tbl.appendChild(tbdy);
	body.appendChild(tbl);
}
function CookieDelete()
{
	
}
function CookieSelectorSetup(CookieSelector)
{
	var CookieArray = document.cookie.split('; ');
	for (var i = 0; i < CookieArray.length; i++)
	{
		var NewOption = document.createElement("option");
		var CookieAtr = CookieArray[i].split('=');
		NewOption.text = CookieAtr[0];
		CookieSelector.add(NewOption);
	}
}
window.onload = function()
{
	var CreateCookieForm = document.forms['CreateCookieForm'];
	var CreateCookieButton = CreateCookieForm['CreateCookieButton'];
	var DeleteCookieButton = CreateCookieForm['DeleteCookieButton'];
	var CookieSelector = CreateCookieForm['CookieSelector'];
	CookieSelectorSetup(CookieSelector);
	CookieTableSetup();
	CreateCookieButton.onclick = function()
	{		
		CookieCreate();
		CookieTableSetup();
	}
	DeleteCookieButton.onclick = function()
	{		
		CookieDelete();
		CookieTableSetup();
	}
}

