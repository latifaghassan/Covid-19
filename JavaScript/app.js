var name1 = prompt('What is your name?');{
    alert('Welcome '+ name1);
}



var answer= prompt('Did you take the Covid-19 vaccine?','YES,NO');

function vaccineQues(){
if(answer ==='yes'){
document.write('<img src="covid.jpg">');
}
else if(answer === 'no') {
document.write('<img src="https://c.files.bbci.co.uk/3A97/production/_116299941_oxford_coronavirus_vaccine_640_3x-nc.png" height="500px" width="500px">');

}
else{
    console.log('anything')
    
}
}
vaccineQues()


var age = prompt('What is your age?');

function userAge (){
if (age >= 40 ){
    alert('You are more likely to be infected. You should be careful!');
}else if (age <= 18){
    alert ('you still young, but still take care of your health.');
   }
   return age
}
console.log(userAge(age));





var answerNum = prompt('How many safety tips you want to know?');

function safetyTips(){
var image = '';
for(var i = 1 ; i <=answerNum; i++ ){
    if(answer === 'yes'){
        image += '<img src="https://www.tamusa.edu/images/university-communication/avoid-spreading.png" height="500px" width="500px"/>';
    }else if(answer === 'no'){
        image += '<img src="https://c.files.bbci.co.uk/3A97/production/_116299941_oxford_coronavirus_vaccine_640_3x-nc.png" height="500px" width="500px"/>';
    }
}

document.write(image);

}
safetyTips()
