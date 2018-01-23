function takeANumber(line, name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line){
  if(line.length === 0){
    return "There is nobody waiting to be served!"
  }else {
    var firstInLine = line[0];
    line = line.shift();
    return firstInLine;
}


function currentLine(line){
  if(line.length === 0){
    return "There is nobody waiting to be served!"
  }else {
    var string="The line is currently: ";
    line.forEach(function (element,index){
      if(index != (line.length-1)){
        string = string + `${index +1}. ${line[index]}, `
      }else{
        string = string + `${index +1}. ${line[index]}`
      }
    })
    line = line.shift();
  }
  return string
}
