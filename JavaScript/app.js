var name1 = prompt('What is your name?');
alert('Welcome '+ name1);

var Answer= prompt('Did you take the Covid-19 vaccine?','YES,NO');

if(Answer ==='yes'){
document.write('<img src="covid.jpg">');
}
else if(Answer === 'no') {
document.write('<img src="https://c.files.bbci.co.uk/3A97/production/_116299941_oxford_coronavirus_vaccine_640_3x-nc.png" height="500px" width="500px">');

}
else{
    console.log('anything')
}



