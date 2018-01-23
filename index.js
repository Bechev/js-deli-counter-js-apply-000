function takeANumber(currentLine, name){
  currentLine.push(name);
  return `Weldcome, ${name}. You are number ${currentLine.length} in line.`;
}
