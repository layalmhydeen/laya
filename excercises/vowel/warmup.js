function vowels(str) {
    var arr = str.split("");
    var countv = 0;
    var countc = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'a' || arr[i] == 'e' || arr[i] == 'u' || arr[i] == 'o' || arr[i] == 'i' && arr[i] != ' ' && arr[i] != ' @' && arr[i] != '$' && arr[i] != '#' && arr[i] != '*') {
            countv++;
        } else
            countc++;
    }
    console.log("vowels is " + countv + "consoulant" + countc);
}
vowels("layalioo");

function cnst(str) {
    var arr = str.split("");
    var countc = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != 'a' && arr[i] != 'e' && arr[i] != 'u' && arr[i] != 'o' && arr[i] != 'i' && arr[i] != ' ' && arr[i] != ' @' && arr[i] != '$' && arr[i] != '#' && arr[i] != '*') {
            countc++;
        }
    }
    console.log("here is consoulant" + countc);

}
cnst("hass ann ");
