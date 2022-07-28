// Complete the following javascript function that accepts the url and the parameter
// name and returns the value of that parameter.

var url= "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby";

function getUrlParameterValue(url, param) {
    var url = new URL(url);
    var result = url.searchParams.get(param);
    }

getUrlParameterValue( url, "utm_campaign");


