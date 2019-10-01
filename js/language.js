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
  // library["en"]["translatable.tra15"] = "Increase your<br /> on-line clientele";
  library["en"]["translatable.tra16"] =
    "Increase the number of<br />clients that want you<br />to be a part of their story";
  library["en"]["translatable.tra17"] = "Landing Pages";
  library["en"]["translatable.tra18"] = "Web Sites";
  library["en"]["translatable.tra19"] = "E-Commerce";
  library["en"]["translatable.tra20"] = "CONTACT";
  library["en"]["translatable.tra21"] = "Our Team";
  library["en"]["translatable.tra22"] = "Privacy Policy";
  library["en"]["translatable.tra23"] = "SERVICES";
  library["en"]["translatable.traL1"] = "RR Spark Privacy Policy";
  library["en"]["translatable.traL2"] = "Privacy Policy";
  library["en"]["translatable.traL3"] = "Last updated: October 1 2019";
  library["en"]["translatable.traL4"] =
    "RR Spark operates https://www.rrspark.com (the 'Site'). This page informs you of our policies regarding the collection, use and disclosure of Personal Information we receive from users of the Site.";
  library["en"]["translatable.traL5"] =
    "We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the collection and use of information in accordance with this policy.";
  library["en"]["translatable.traL6"] = "Information Collection And Use";
  library["en"]["translatable.traL7"] =
    "While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to your name ('Personal Information').";
  library["en"]["translatable.traL8"] = "Log Data";
  library["en"]["translatable.traL9"] =
    "Like many site operators, we collect information that your browser sends whenever you visit our Site ('Log Data').";
  library["en"]["translatable.traL10"] =
    "This Log Data may include information such as your computer's  Internet Protocol ('IP') address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages and other statistics.";
  library["en"]["translatable.traL11"] =
    "In addition, we may use third party services such as Google Analytics that collect, monitor and analyze data from users visiting this site.";
  library["en"]["translatable.traL12"] = "Communications";
  library["en"]["translatable.traL13"] =
    "We may use your Personal Information to contact you with newsletters, marketing or promotional materials and other information that we may feel useful for those visiting the site.";
  library["en"]["translatable.traL14"] = "Cookies";
  library["en"]["translatable.traL15"] =
    "Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive.";
  library["en"]["translatable.traL16"] =
    "Like many sites, we use 'cookies' to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.";
  library["en"]["translatable.traL17"] = "Security";
  library["en"]["translatable.traL17a"] =
    "The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.";
  library["en"]["translatable.traL18"] = "Changes to this Privacy Policy";

  library["en"]["translatable.traL19"] =
    "This Privacy Policy is effective as of (October 1st 2019) and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.";
  library["en"]["translatable.traL20"] =
    "We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.";
  library["en"]["translatable.traL21"] =
    "If we make any material changes to this Privacy Policy, we will post that information here.";

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
  library["es"]["translatable.tra16"] =
    "Incrementa el número de<br />clientes que quieren que<br />seas parte de su historia";
  library["es"]["translatable.tra17"] = "Landing Pages";
  library["es"]["translatable.tra18"] = "Sitios Web";
  library["es"]["translatable.tra19"] = "E-Commerce";
  library["es"]["translatable.tra20"] = "CONTACTO";
  library["es"]["translatable.tra21"] = "Nuestro Equipo";
  library["es"]["translatable.tra22"] = "Aviso de Privacidad";
  library["es"]["translatable.tra23"] = "SERVICIOS";
  library["es"]["translatable.traL1"] = "";
  library["es"]["translatable.traL2"] = "";
  library["es"]["translatable.traL3"] = "";
  library["es"]["translatable.traL4"] = "";
  library["es"]["translatable.traL5"] = "";
  library["es"]["translatable.traL6"] = "";
  library["es"]["translatable.traL7"] = "";
  library["es"]["translatable.traL8"] = "";
  library["es"]["translatable.traL9"] = "";
  library["es"]["translatable.traL10"] = "";
  library["es"]["translatable.traL11"] = "";
  library["es"]["translatable.traL12"] = "";
  library["es"]["translatable.traL13"] = "";
  library["es"]["translatable.traL14"] = "";
  library["es"]["translatable.traL15"] = "";
  library["es"]["translatable.traL16"] = "";
  library["es"]["translatable.traL17"] = "";
  library["es"]["translatable.traL18"] = "";
  library["es"]["translatable.traL19"] = "";
  library["es"]["translatable.traL20"] = "";
  library["es"]["translatable.traL21"] = "";
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
