function Charmatch(s){
    let stack = [ ];
    let bracketMap = {
      '(':')',
      '[':']',
      '{':'}'
    }
  
    for(let i = 0; i<s.length; i++){
      
      let char = s[i];
      
      if(bracketMap[char]){
        stack.push(char);
        
      }else{
        
        if(stack.length===0){
          
          return false;
        }
        
        const lastBracket = stack.pop();
        
        if(bracketMap[lastBracket] !== char){
          
        return false
        
      }
    }
    return stack.length === 0;
  }