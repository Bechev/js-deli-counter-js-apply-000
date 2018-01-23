function takeANumber(currentLine, name){
  currentLine.push(name);
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`;
}


function nowServing(currentLine){
  if(currentLine.length === 0){
    return "There is nobody waiting to be served!"
  }else {
    var string="The line is currently: ";
    currentLine.forEach(function (element,index){
      if(index != (currentLine.length-1)){
        string = string + `${index +1}. ${currentLine[index]}, `
      }else{
        string = string + `${index +1}. ${currentLine[index]}`
      }
    })
    currentLine = currentLine.shift();
  }
}
