var word="rrvvahcodecode"

function code (string){
    var count=0;
    var words=word.split("");
    for(var i=0;i<words.length;i++){
        if(words[i]=='c' && words[i+1]=='o'&& words[i+3]=='e              ')
            {
                count++;
            }
}
    console.log("the counter "+ count);
}
code(word);