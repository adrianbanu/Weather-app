(()=>{"use strict";const e=async function(e){try{const t=await fetch("https://api.openweathermap.org/data/2.5/weather?q="+e+"&units=metric&appid=a08ea732cde67f6c4e8a5d3187124bc3&lang=en",{mode:"cors"});!function(e){document.getElementById("temp").innerHTML=Math.round(e.main.temp)+"&#8451",document.getElementById("tempF").innerHTML=Math.round(1.8*e.main.temp+32)+"&#8457",document.getElementById("location").innerHTML=e.name+", "+e.sys.country,document.getElementById("weather-type").innerHTML=e.weather[0].description,document.getElementById("feel-like").innerHTML="Feels like: "+Math.round(e.main.feels_like)+"&#8451",document.getElementById("feel-like-fahrenheit").innerHTML="Feels like: "+Math.round(1.8*e.main.feels_like+32)+"&#8457",document.getElementById("wind-speed").innerHTML="Wind: "+Math.round(3.6*e.wind.speed)+" km/h",document.getElementById("humidity").innerHTML="Humidity: "+e.main.humidity+"%&nbsp&nbsp",document.getElementById("sunrise").innerHTML="Sunrise: "+String(new Date(1e3*e.sys.sunrise)).substring(16,21),document.getElementById("sunset").innerHTML="Sunset: "+String(new Date(1e3*e.sys.sunset)).substring(16,21),document.getElementById("country-flag").src="https://www.countryflags.io/"+e.sys.country+"/flat/64.png",document.getElementById("weather-icon").src=`images\\icons-light\\${e.weather[0].icon}.png`}(await t.json())}catch{document.getElementById("no-data").style.visibility="visible"}},t=function(e){"temp"===e?(document.getElementById("temp").style.display="none",document.getElementById("tempF").style.display="block",document.getElementById("feel-like").style.display="none",document.getElementById("feel-like-fahrenheit").style.display="block"):(document.getElementById("tempF").style.display="none",document.getElementById("temp").style.display="block",document.getElementById("feel-like-fahrenheit").style.display="none",document.getElementById("feel-like").style.display="block")};document.getElementById("search-form").addEventListener("submit",(function(t){let n=document.getElementById("weather-location").value;document.getElementById("no-data").style.visibility="hidden",e(n),t.preventDefault()})),document.getElementById("temp").addEventListener("click",(()=>t("temp"))),document.getElementById("tempF").addEventListener("click",(()=>t("tempF"))),document.body.addEventListener("load",e("Bucureşti"))})();