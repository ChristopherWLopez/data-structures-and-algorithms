function hashMapRepeat(str){
    const split = str.toUpperCase().split('');
    const wordMap = new Map();
    for(let i = 0; i < split.length; i++){
        if(wordMap.has(split[1])){
            return split[i];
        } else {
            wordMap.set(split[i],1);
        }
    }
}

module.exports = hashMapRepeat;