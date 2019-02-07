let phase = [33];
let frames = 0;
let advance = 0;
let xdim;
let ydim;
let diameter;
let x;
function setup(){

createCanvas(windowWidth, windowHeight);

xdim = windowWidth;
ydim = windowHeight;
diameter = xdim/4;
x = diameter/40;

  phase[0] = x;
  phase[1] = x*2;
  phase[2] = x*3;
  phase[3] = x*4;
  phase[4] = x*5;
  phase[5] = x*6;
  phase[6] = x*7;
  phase[7] = x*8;
  phase[8] = x*9;
  phase[9] = x*10;
  phase[10] = x*11;
  phase[11] = x*12;
  phase[12] = x*13;
  phase[13] = x*14;
  phase[14] = x*15;
  phase[15] = x*16;
  phase[16] = -(x*16);
  phase[17] = -(x*15);
  phase[18] = -(x*14);
  phase[19] = -(x*13);
  phase[20] = -(x*12);
  phase[21] = -(x*11);
  phase[22] = -(x*10);
  phase[23] = -(x*9);
  phase[24] = -(x*8);
  phase[25] = -(x*7);
  phase[26] = -(x*6);
  phase[27] = -(x*5);
  phase[28] = -(x*4);
  phase[29] = -(x*3);
  phase[30] = -(x*2);
  phase[31] = -x;
  phase[32] = 0;

frameRate(60);

}

function draw(){



  frames ++;
  let cycle = frames % 32;
  if(cycle == 0){
    advance = advance + 1;
  }



 translate(windowWidth/2, windowHeight/2);

  // for (var i = 0; i < phase.length; i++) {
  //   //background(0);
  //   moon(i);
  // }

moon(advance % 32);
console.log(cycle);

 
}

  function moon (phasenum){

    background(0);

    noStroke();

    //fill(255);
    //ellipse(0 , 0, diameter, diameter);

      for (let i = 0; i < diameter+7; i++) {
    let alphainc = 155/diameter;
    let alpha = 180 - (alphainc*i)  ;
    fill(255, alpha);
   ellipse(0 , 0 , i , i);
     
   }

   for (let i = 0; i < diameter+5; i++) {
    let alphainc = 155/diameter;
    let alpha = 180 - (alphainc*i)  ;
    fill(0, alpha);
   ellipse(phase[phasenum]*2.5, 0 , i , i);
     
   }

   

   // fill(0, 100);
   // ellipse(phase[phasenum]*2.5, 0 , diameter, diameter);
}





  