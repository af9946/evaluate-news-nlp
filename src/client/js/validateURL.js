function validateURL (userInput) {
    console.log("::: Validate URL :::", userInput);
    var res = userInput.match(/(http(s)?:\/\/.)(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if(res == null){
        console.log("::: Invalid URL :::", userInput);
        return false;
    } 
    else{
        console.log("::: Valid URL :::", userInput);
        return true;
    }
  }
  
  module.exports = validateURL 
