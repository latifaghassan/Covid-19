var name1 = prompt('What is your name?');
alert('Welcome '+ name1);

//var Answer= prompt('Did you take the Covid-19 vaccine?','YES,NO');

//if(Answer ==='yes'){
//document.write('<img src="covid.jpg">');
//}
//else if(Answer === 'no') {
//document.write('<img src="https://c.files.bbci.co.uk/3A97/production/_116299941_oxford_coronavirus_vaccine_640_3x-nc.png" height="500px" width="500px">');

//}
//else{
//    console.log('anything')
//}

var answer = prompt ('Did you take the covid-19 vaccine?','yes , no');
while(answer !== 'yes' && answer !== "no"){
    asnwer = prompt ('please enter yes or no');
}

var answerNum = prompt('How many safety tips you want to know?');

var image = '';

for(var i = 1 ; i <=answerNum; i++ ){
    if(answer === 'yes'){
        image = image + '<img src="img src="covid.jpg"/>';
        console.log(image)
    }else if(answer === 'no'){
        image = image + '<img src="https://c.files.bbci.co.uk/3A97/production/_116299941_oxford_coronavirus_vaccine_640_3x-nc.png" height="500px" width="500px"/>';
        console.log(image);
    }else {
        alert('Okay welcome to my website')
    }
     
}
document.write(image);

