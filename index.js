var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing() {
  if (katzDeliLine > 0) {
    return "Currently serving" + katzDeliLine.shift() + "."
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  var currentLine = []
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    for (let i = 0; i < currentLine.length; i++) {
      currentLine.push(" " + (i + 1) + ". " + katzDeliLine[i]);
      i++
      return "The line is currently:" + currentLine;
    }
  }
}