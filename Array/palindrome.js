const isPalindrom = function (word){
    let wordArr = word.split("");
    let r = wordArr.length - 1;
    for(let l=0; l==r; l++){
        if(word[l] === word[r]){
            console.log(`${word[l]} = ${word[r]}`)
            console.log("it is a palindorm!")
            r--;
        }else {
            console.log("it is not a palindrom")
        }
    }
   
}

isPalindrom ("abddb")