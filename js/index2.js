window.onload = function(){
    


    let container=document.querySelector('.container')
    ////////////////////////////////////////////////////////////////   
       
   ///////////////////////////////////////////////
   //declering layer1 canvas
       let gameCanvas = document.querySelector('#gameCanvas')
       let context = gameCanvas.getContext('2d')
      //  enemycreator('./img/ship4.png',context)

       let img  = document.createElement('img')
       img.src ='./img/explosion0.png'
       img.onload = function () {
        context.clearRect(0,0,1000,500) 
        context.drawImage(img,0,0,150,100,0,0,70,70)
         
       }
       
}


function enemycreator(src,somCtx) {
let enX =0
let enY =0
let swetsher =true
setInterval(() => {
let enemyimg =document.createElement('img')
    enemyimg.src =src
   // creat function to macke enemy move as cercel
   
    enemyimg.onload= function () {
    somCtx.clearRect(0,0,1000,500)
    somCtx.drawImage(enemyimg,0,0,700,400,enX,enY,40,30)
                 } 
console.log(enY);
console.log(swetsher);
console.log(enX);


  
    if (enX==0) {
      swetsher= true
    }

    if (enY==500&&swetsher==true) {
      enY=0
      enX+=50 
    }else{
      enY+=5
   
    }  


    if(enX==1000){
    swetsher=false } 

    // if ( enY==500 && swetsher==false){
    //   enY=0
    //   enX-=50 
    // }else{
    //   enY+=5
    //   }  
        },50);
        }

        
        
      