function TransMod() {
  this.translate = function(lang, token) {
    return library[lang][token];
  };

  var library = new Array();

  library["en"] = new Array();
  library["en"]["translatable.tra1"] = "H";
  library["en"]["translatable.tra2"] = "OME";
  library["en"]["translatable.tra3"] = "P";
  library["en"]["translatable.tra4"] = "ORTFOLIO";
  library["en"]["translatable.tra5"] = "H";
  library["en"]["translatable.tra6"] = "OW ";
  library["en"]["translatable.tra7"] = "TO ";
  library["en"]["translatable.tra8"] = "S";
  library["en"]["translatable.tra9"] = "TART";
  library["en"]["translatable.tra10"] = "S";
  library["en"]["translatable.tra11"] = "ERVICES";
  library["en"]["translatable.tra12"] = "C";
  library["en"]["translatable.tra13"] = "ONTACT";
  library["en"]["translatable.tra14"] = "LET OUR SPARK IGNITE YOUR VISION";
  library["en"]["translatable.tra15"] = "Increase your<br /> on-line clientele";
  library["en"]["translatable.tra16"] = "Become part of their story";
  library["en"]["translatable.tra17"] = "Landing Pages";
  library["en"]["translatable.tra18"] = "Web Sites";
  library["en"]["translatable.tra19"] = "E-Commerce";
  library["en"]["translatable.tra20"] = "CONTACT";
  library["en"]["translatable.tra21"] = "Our Team";
  library["en"]["translatable.tra22"] = "Privacy Policy";
  library["en"]["translatable.tra23"] = "SERVICES";

  library["es"] = new Array();
  library["es"]["translatable.tra1"] = "I";
  library["es"]["translatable.tra2"] = "NICIO";
  library["es"]["translatable.tra3"] = "P";
  library["es"]["translatable.tra4"] = "ORTAFOLIO";
  library["es"]["translatable.tra5"] = "C";
  library["es"]["translatable.tra6"] = "OMO";
  library["es"]["translatable.tra7"] = " ";
  library["es"]["translatable.tra8"] = "C";
  library["es"]["translatable.tra9"] = "OMENZAR";
  library["es"]["translatable.tra10"] = "S";
  library["es"]["translatable.tra11"] = "ERVICIOS";
  library["es"]["translatable.tra12"] = "C";
  library["es"]["translatable.tra13"] = "ONTACTO";
  library["es"]["translatable.tra14"] =
    "DEJA QUE NUESTRA CHISPA DÉ VIDA A TU VISIÓN";
  library["es"]["translatable.tra15"] =
    "Incrementa tu<br />  clientela en linea";
  library["es"]["translatable.tra16"] = "Hazte parte de su historia";
  library["es"]["translatable.tra17"] = "Landing Pages";
  library["es"]["translatable.tra18"] = "Sitios Web";
  library["es"]["translatable.tra19"] = "E-Commerce";
  library["es"]["translatable.tra20"] = "CONTACTO";
  library["es"]["translatable.tra21"] = "Nuestro Equipo";
  library["es"]["translatable.tra22"] = "Aviso de Privacidad";
  library["es"]["translatable.tra23"] = "SERVICIOS";
}

//( function(){

function InitStaticText(lang) {
  var langModule = new TransMod();

  $("#tra1").html(langModule.translate(lang, $("#tra1").attr("data-token")));
  $("#tra2").html(langModule.translate(lang, $("#tra2").attr("data-token")));
  $("#tra3").html(langModule.translate(lang, $("#tra3").attr("data-token")));
  $("#tra4").html(langModule.translate(lang, $("#tra4").attr("data-token")));
  $("#tra5").html(langModule.translate(lang, $("#tra5").attr("data-token")));
  $("#tra6").html(langModule.translate(lang, $("#tra6").attr("data-token")));
  $("#tra7").html(langModule.translate(lang, $("#tra7").attr("data-token")));
  $("#tra8").html(langModule.translate(lang, $("#tra8").attr("data-token")));
  $("#tra9").html(langModule.translate(lang, $("#tra9").attr("data-token")));
  $("#tra10").html(langModule.translate(lang, $("#tra10").attr("data-token")));
  $("#tra11").html(langModule.translate(lang, $("#tra11").attr("data-token")));
  $("#tra12").html(langModule.translate(lang, $("#tra12").attr("data-token")));
  $("#tra13").html(langModule.translate(lang, $("#tra13").attr("data-token")));
  $("#tra14").html(langModule.translate(lang, $("#tra14").attr("data-token")));
  $("#tra15").html(langModule.translate(lang, $("#tra15").attr("data-token")));
  $("#tra16").html(langModule.translate(lang, $("#tra16").attr("data-token")));
  $("#tra17").html(langModule.translate(lang, $("#tra17").attr("data-token")));
  $("#tra18").html(langModule.translate(lang, $("#tra18").attr("data-token")));
  $("#tra19").html(langModule.translate(lang, $("#tra19").attr("data-token")));
  $("#tra21").html(langModule.translate(lang, $("#tra21").attr("data-token")));
  $("#tra22").html(langModule.translate(lang, $("#tra22").attr("data-token")));
  $("#tra23").html(langModule.translate(lang, $("#tra23").attr("data-token")));
}

//InitStaticText("en");
$("#en").click(function() {
  InitStaticText("en");
});
$("#es").click(function() {
  InitStaticText("es");
});

//})();
