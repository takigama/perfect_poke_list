// the main executive stuff
//var jsonStats;


function getcpm(val) {
  switch(val) {
  	case(10):
  		return 0.094;

  	case(15):
  		return 0.135137432;

  	case(20):
  		return 0.16639787;

  	case(25):
  		return 0.192650919;

  	case(30):
  		return 0.21573247;

  	case(35):
  		return 0.236572661;

  	case(40):
  		return 0.25572005;

  	case(45):
  		return 0.273530381;

  	case(50):
  		return 0.29024988;

  	case(55):
  		return 0.306057377;

  	case(60):
  		return 0.3210876;

  	case(65):
  		return 0.335445036;

  	case(70):
  		return 0.34921268;

  	case(75):
  		return 0.362457751;

  	case(80):
  		return 0.37523559;

  	case(85):
  		return 0.387592406;

  	case(90):
  		return 0.39956728;

  	case(95):
  		return 0.411193551;

  	case(100):
  		return 0.42250001;

  	case(105):
  		return 0.432926419;

  	case(110):
  		return 0.44310755;

  	case(115):
  		return 0.4530599578;

  	case(120):
  		return 0.46279839;

  	case(125):
  		return 0.472336083;

  	case(130):
  		return 0.48168495;

  	case(135):
  		return 0.4908558;

  	case(140):
  		return 0.49985844;

  	case(145):
  		return 0.508701765;

  	case(150):
  		return 0.51739395;

  	case(155):
  		return 0.525942511;

  	case(160):
  		return 0.53435433;

  	case(165):
  		return 0.542635767;

  	case(170):
  		return 0.55079269;

  	case(175):
  		return 0.558830576;

  	case(180):
  		return 0.56675452;

  	case(185):
  		return 0.574569153;

  	case(190):
  		return 0.58227891;

  	case(195):
  		return 0.589887917;

  	case(200):
  		return 0.59740001;

  	case(205):
  		return 0.604818814;

  	case(210):
  		return 0.61215729;

  	case(215):
  		return 0.619399365;

  	case(220):
  		return 0.62656713;

  	case(225):
  		return 0.633644533;

  	case(230):
  		return 0.64065295;

  	case(235):
  		return 0.647576426;

  	case(240):
  		return 0.65443563;

  	case(245):
  		return 0.661214806;

  	case(250):
  		return 0.667934;

  	case(255):
  		return 0.674577537;

  	case(260):
  		return 0.68116492;

  	case(265):
  		return 0.687680648;

  	case(270):
  		return 0.69414365;

  	case(275):
  		return 0.700538673;

  	case(280):
  		return 0.70688421;

  	case(285):
  		return 0.713164996;

  	case(290):
  		return 0.71939909;

  	case(295):
  		return 0.725571552;

  	case(300):
  		return 0.7317;

  	case(305):
  		return 0.734741009;

  	case(310):
  		return 0.73776948;

  	case(315):
  		return 0.740785574;

  	case(320):
  		return 0.74378943;

  	case(325):
  		return 0.746781211;

  	case(330):
  		return 0.74976104;

  	case(335):
  		return 0.752729087;

  	case(340):
  		return 0.75568551;

  	case(345):
  		return 0.758630378;

  	case(350):
  		return 0.76156384;

  	case(355):
  		return 0.764486065;

  	case(360):
  		return 0.76739717;

  	case(365):
  		return 0.770297266;

  	case(370):
  		return 0.7731865;

  	case(375):
  		return 0.776064962;

  	case(380):
  		return 0.77893275;

  	case(385):
  		return 0.781790055;

  	case(390):
  		return 0.78463697;

  	case(395):
  		return 0.787473578;

  	case(400):
  		return 0.79030001;

    default:
      return -1;
  }

  return -1;
}

function getDust(lev) {
  if(lev<30) return 200;
  if(lev<50) return 400;
  if(lev<70) return 600;
  if(lev<90) return 800;
  if(lev<110) return 1000;
  if(lev<130) return 1300;
  if(lev<150) return 1600;
  if(lev<170) return 1900;
  if(lev<190) return 2200;
  if(lev<210) return 2500;
  if(lev<230) return 3000;
  if(lev<250) return 3500;
  if(lev<270) return 4000;
  if(lev<290) return 4500;
  if(lev<310) return 5000;
  if(lev<330) return 6000;
  if(lev<350) return 7000;
  if(lev<370) return 8000;
  if(lev<390) return 9000;
  return 10000;
}

function getCandies(lev) {
  if(lev<110) return 1;
  if(lev<210) return 2;
  if(lev<310) return 3;
  return 4;
}

function fillSelect(data) {

  //console.log(data);

  document.getElementById("selector").innerHTML = "";

  var thishtml = "<form><select name='select_type' id='select_type' onchange='changeSelect(this.value)'>";
  for(var i = 0; i <=151; i++) {
    if(i == 0) {
      thishtml += "<option value='0'>Please Select</option>";
    } else {
      thishtml += "<option value='"+i+"'>("+i+") - "+data[i].name+"</option>";
    }
  }

  thishtml += "</select></form>";
  //console.log(thishtml);

  document.getElementById("selector").innerHTML = thishtml;
}

function changeSelect(value) {
  // load the change
  var theid = value;

  // now we do all the calcs

  // first, make sure such a pokemon exists
  var lmst = jsonStats[value];
  console.log(lmst);

	var thishtml = "";

	// draw output 1
  var stathtml = "<table border='1'><tr><th>HP</th><th>Attack</th><th>Defence</th><th>Special Attach</th><th>Special Defence</th><th>Speed</th></tr>";
  stathtml += "<tr><td>"+lmst.hp+"</td><td>"+lmst.atk+"</td><td>"+lmst.def+"</td><td>"+lmst.sat+"</td><td>"+lmst.sdef+"</td><td>"+lmst.spd+"</td></tr></table><hr>";
  document.getElementById("creaturestats").innerHTML = stathtml;
  //var thishtml = "<table border='1'><tr><th>HP</th><th>Attack</th><th>Defence</th><th>Special Attach</th><th>Special Defence</th><th>Speed</th></tr>";
  //thishtml += "<tr><td>"+lmst.hp+"</td><td>"+lmst.atk+"</td><td>"+lmst.def+"</td><td>"+lmst.sat+"</td><td>"+lmst.sdef+"</td><td>"+lmst.spd+"</td></tr></table><hr>";
  //</tr></table>";

  // now we calc the values
  var hp = lmst.hp;
  var atk = lmst.atk;
  var def = lmst.def;
  var sat = lmst.sat;
  var sdef = lmst.sdef;
  var spd = lmst.spd;
  var batt = (2 * (   Math.pow((atk*sat),0.5) + Math.pow(spd, 0.5)    ));
  var bdef = (2 * (   Math.pow((def*sdef),0.5) + Math.pow(spd, 0.5)    ));
  var bsta = 2 * hp;

  // now we assume that IV's are 15 and go like so:
  thishtml += "<table border='1'><tr><th width='100'>Level</th><th width='100'>CP</th><th width='100'>HP</th><th width='100'>Dust (Candies)</th></tr>";
  for(var l = 10; l<205; l = l + 5) {
    var rcpm = getcpm(l);
    var rat = (batt + 15) * rcpm;
    var rdef = (bdef + 15) * rcpm;
    var rsta = (bsta + 15) * rcpm;
    var rcp = Math.floor((  rat * Math.pow(rdef,0.5) *  Math.pow(rsta, 0.5) / 10));
    if(rcp < 10) rcp=10;
    var dust = getDust(l);
    var candies = getCandies(l);
    thishtml += "<tr><td>"+(l/10)+"<td>"+rcp+"</td><td>"+Math.floor(rsta)+"</td><td>"+dust+" ("+candies+")</td></tr>";
  }


  thishtml += "</table>";
  document.getElementById("output1").innerHTML = thishtml;


  thishtml = "<table border='1'><tr><th width='100'>Level</th><th width='100'>CP</th><th width='100'>HP</th><th width='100'>Dust (Candies)</th></tr>";
  for(var l = 210; l<405; l = l + 5) {
    var rcpm = getcpm(l);
    var rat = (batt + 15) * rcpm;
    var rdef = (bdef + 15) * rcpm;
    var rsta = (bsta + 15) * rcpm;
    var rcp = Math.floor((  rat * Math.pow(rdef,0.5) *  Math.pow(rsta, 0.5) / 10));
    if(rcp < 10) rcp=10;
    var dust = getDust(l);
    var candies = getCandies(l);
    thishtml += "<tr><td>"+(l/10)+"<td>"+rcp+"</td><td>"+Math.floor(rsta)+"</td><td>"+dust+" ("+candies+")</td></tr>";
  }


  thishtml += "</table>";
  document.getElementById("output2").innerHTML = thishtml;
}

$( document ).ready(function() {
    console.log(jsonStats);
    fillSelect(jsonStats);
}); // doc ready

  ////var pokeNames;
//
  //$.ajax({
    //dataType: "json",
    //url: "stats.json"
  //}).done(function (data) {
    //jsonStats = data;
    ////console.log(jsonStats);

  //});
//

/*
pokeathlon_stat_id,local_language_id,name
1,5,Vitesse
1,9,Speed
2,5,Force
2,9,Power
3,5,Habileté
3,9,Skill
4,5,Endurance
4,9,Stamina
5,5,Saut
5,9,Jump
*/
