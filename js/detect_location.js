var detect_location = {
  init: function() {
    var formdata = new FormData();
    formdata.append("key", "123/*");
    detect_location.getajax(
      "https://rrspark.com",
      "POST",
      formdata,
      detect_location.cbfunkx
    );
  },
  cbfunkx: function(jsonx) {
    console.log(JSON.stringify(jsonx));
  },
  getajax: function(urlx_ajax, methodx, params, callBack) {
    var hr = new XMLHttpRequest();
    hr.open(methodx, urlx_ajax, true);
    hr.onreadystatechange = function() {
      if (hr.readyState == 4 && hr.status == 200) {
        var returnval = JSON.parse(hr.responseText);
        callBack(returnval);
      }
    };
    hr.send(params);
  }
};
/*// set endpoint and your access key
var ip = '134.201.250.155'
var access_key = '69f87746315815247b217aa18b63d519';

// get the API result via jQuery.ajax
$.ajax({
    url: 'http://api.ipapi.com/' + ip + '?access_key=' + access_key,   
    dataType: 'jsonp',
    success: function(json) {

        // output the "calling_code" object inside "location"
        alert(json.location.calling_code);
      */
// }
//});
