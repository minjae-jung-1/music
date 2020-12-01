var input = document.querySelector('input')
// get element instaed
var display = document.getElementById('#display')
var chord;

var userChords

function scales_chords_api_onload() {
    var api_url = "https://www.scales-chords.com/api/scapi.1.3.php"; if (typeof api_override_url !== 'undefined') { var api_url = api_override_url; }
    if (typeof scales_chords_api_debug === 'undefined') { var scales_chords_api_debug = false; }
    var x = document.getElementsByClassName("scales_chords_api"); var obj_id_count = 1; if (scales_chords_api_debug) console.log(x); for (var i = 0; i < x.length; i++) {
        var params = ""; var first = true; var obj = x[i]; obj.id = "scapiobjid" + obj_id_count; obj_id_count += 1; var att = x[i].attributes; if (scales_chords_api_debug) console.log(x[i]); if (scales_chords_api_debug) console.log(att); if (scales_chords_api_debug) console.log(att.length); for (j = 0; j < att.length; j++) { if (scales_chords_api_debug) console.log(att[j]); if (scales_chords_api_debug) console.log("name: " + att[j].nodeName + " value: " + att[j].nodeValue); if (!first) params += "&"; else params = "id=" + obj.id + "&"; first = false; params += encodeURI(att[j].nodeName) + "=" + encodeURI(att[j].nodeValue); }
        if (scales_chords_api_debug) alert(params); ajaxCall(api_url, params, function (xmlhttp) {
            var myString = xmlhttp.responseText; var myStringArray = myString.split("###RAWR###"); var objid = myStringArray[0]; if (scales_chords_api_debug) { document.getElementById(objid).innerHTML = "<!--" + mystring + "-->"; if (myStringArray[2].length > 0) document.getElementById(objid).innerHTML += myStringArray[2]; } else {
                if (myStringArray[2].length > 0)
                    document.getElementById(objid).innerHTML = myStringArray[2];
            }
        });
    }
}
function scales_chords_api_refresh(customId) {
    var api_url = "https://www.scales-chords.com/api/scapi.1.3.php"; if (typeof api_override_url !== 'undefined') { var api_url = api_override_url; }
    if (typeof scales_chords_api_debug === 'undefined') { var scales_chords_api_debug = false; }
    var x = document.getElementsByClassName("scales_chords_api"); var obj_id_count = 1; if (scales_chords_api_debug) console.log(x); for (var i = 0; i < x.length; i++) {
        var params = ""; var first = true; var obj = x[i]; obj.id = "scapiobjid" + obj_id_count; obj_id_count += 1; var att = x[i].attributes; if (scales_chords_api_debug) console.log(x[i]); if (scales_chords_api_debug) console.log(att); if (scales_chords_api_debug) console.log(att.length); var customIdMatches = false; for (j = 0; j < att.length; j++) {
            if (att[j].nodeName == "customid" && att[j].nodeValue == customId) { customIdMatches = true; }
            if (scales_chords_api_debug) console.log(att[j]); if (scales_chords_api_debug) console.log("name: " + att[j].nodeName + " value: " + att[j].nodeValue); if (!first) params += "&"; else params = "id=" + obj.id + "&"; first = false; params += encodeURI(att[j].nodeName) + "=" + encodeURI(att[j].nodeValue);
        }
        if (scales_chords_api_debug) alert(params); if (customIdMatches) {
            ajaxCall(api_url, params, function (xmlhttp) {
                var myString = xmlhttp.responseText; var myStringArray = myString.split("###RAWR###"); var objid = myStringArray[0]; if (scales_chords_api_debug) { document.getElementById(objid).innerHTML = "<!--" + mystring + "-->"; if (myStringArray[2].length > 0) document.getElementById(objid).innerHTML += myStringArray[2]; } else {
                    if (myStringArray[2].length > 0)
                        document.getElementById(objid).innerHTML = myStringArray[2];
                }
            });
        }
    }
}



input.addEventListener('change', (e)=>{
    chord = e.target.value
    console.log(chord)
})

$("#chords").on('keypress', (e) => {
    if(e.which == 13){
        console.log("here")
        
        $("#display").empty().append(`<ins class="scales_chords_api" chord="emaj"></ins>`)
        scales_chords_api_onload();
    }


})

console.log(chord)

