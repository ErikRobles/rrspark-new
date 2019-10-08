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

