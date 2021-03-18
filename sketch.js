var button1;
var button2;
var entry1;
var input2;
var result1;
var result2;
var temp;
var letters;
var notconst;
var display = 'aarohan';
var a =0;
var rex;
 
function setup() {
  notconst = int(random(1,92));
  console.log(notconst);
  createCanvas(600,400);
  let button1 = createButton('Enter Username');
  button1.parent('#button1');
  button1.mousePressed(inputactive);
  let button2 = createButton('Enter Password');
  button2.parent('#pass');
  button2.mousePressed(passactive); 
  result1 = select('#entry-field');
  result2 = select('#pass-field');
  
}

function draw() {
  background(255);
  
}

function inputactive(){
    let entry1 = createInput();
    entry1.parent('#user-name');
    temp = select('#temp-field'); 
    entry1.input(tempTyping);
    newTyping1(rex);
  
  

}


function tempTyping() {
  increament();
  letters = keyTyped();
  if(a<=1){
    display = str(letters);
  }else {
    display = display + str(letters);
  }
  
  temp.html(display);
  rex = display;
  
}


function passactive(){
  let input2 = createInput();
  input2.parent('#user-name');
  temp = select('#temp-field');  
  input2.input(tempTyping);
  newTyping2(rex);
}

function newTyping1(){
  result1.html(this.value());
  entry1.remove();
  
}

function newTyping2(){
  result2.html(this.value());
  input2.remove();
  
}


function keyTyped(){
  var y;
  var x = 0;
  
  //console.log(keyCode);
  //console.log(key);
  for (let i=32;x === 0;i++){
      
    if(key === char(i)){
       x = i;
    }
  }
  x = x + notconst;
  if(x<=126) {
    //console.log(x);
  }else{ 
    x = 32+(x-127);
    //console.log(x);
  }
 
  y= char(x);
  return y;
  
}



function increament(){
 if(a<2) {
   a = a + 1;
console.log(a);
}else {
  return 0;
}
  
  
}



