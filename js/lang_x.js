var detect_location = {
  init: function() {
    var formdata = new FormData();
    formdata.append("key", "123/*");
    detect_location.getajax(
      "https://rrspark.com/geo/geo.php",
      "POST",
      formdata,
      detect_location.cbfunkx
    );
  },
  cbfunkx: function(jsonx) {
    console.log(JSON.stringify(jsonx));
    detect_location.ipapi(jsonx["ip"]);
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
  },
  ipapi: function(ipx) {
    var access_key = "6524155cdceb566f600e58d695e6a434";
    var urlx = "https://api.ipapi.com/api/" + ipx + "?access_key=" + access_key;
    //console.log(urlx);
    detect_location.getajax(urlx, "GET", "", detect_location.cbipapi);
  },
  cbipapi: function(jsonx) {
    var country = jsonx["country_code"];
    switch (country) {
      case "MX":
        InitStaticText("es");
        break;

      case "US":
        InitStaticText("en");
        break;

      case "CO":
        InitStaticText("es");
        break;

      case "CL":
        break;

      case "AR":
        InitStaticText("es");
        break;

      case "BO":
        InitStaticText("es");
        break;

      case "BR":
        InitStaticText("es");
        break;

      case "EC":
        InitStaticText("es");
        break;

      case "FK":
        InitStaticText("es");
        break;

      case "PY":
        InitStaticText("es");
        break;

      case "PE":
        InitStaticText("es");
        break;

      case "UY":
        InitStaticText("es");
        break;

      case "VE":
        InitStaticText("es");
        break;

      case "ES":
        InitStaticText("es");
        break;

      case "DO":
        InitStaticText("es");
        break;

      case "CR":
        InitStaticText("es");
        break;

      case "PY":
        InitStaticText("es");
        break;

      case "SV":
        InitStaticText("es");
        break;

      case "GT":
        InitStaticText("es");
        break;

      case "HN":
        InitStaticText("es");
        break;

      case "NI":
        InitStaticText("es");
        break;

      case "PA":
        InitStaticText("es");
        break;

      case "PR":
        InitStaticText("es");
        break;

      default:
        console.log(jsonx["country_code"]);
    }
    console.log(jsonx["country_code"]);
  }
};
