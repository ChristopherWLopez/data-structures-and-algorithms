'use strict';

function mergeAlternating(word1, word2){
    const newWord = [];
    const splitWord1 = word1.split('');
    const splitWord2 = word2.split('');

    const maxLength = Math.max(splitWord1,splitWord1);

    for(i =0; i < maxLength; i++){

        if(splitWord1[i]){
            newWord.push(splitWord1[i]);
        }
        if(splitWord2[i]){
            newWord.push(splitWord2[i]);
        }
    }
    return newWord;
}