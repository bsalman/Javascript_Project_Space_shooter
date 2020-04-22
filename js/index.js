window.onload = function(){
 
    let container=document.querySelector('.container')
 ////////////////////////////////////////////////////////////////   
    //creat laser sound
    let sound = document.createElement("audio")
    sound.src = './audi/heat-vision.mp3'
    sound.setAttribute("preload","auto")
    sound.setAttribute("controls","none")
    sound.style.display ="none"
    container.append(sound)
    
///////////////////////////////////////////////
//declering layer1 canvas
    let gameCanvas = document.querySelector('#gameCanvas')
    let context = gameCanvas.getContext('2d')
 ////////////////////////////////////////////////////
 let gameCanvas2 = document.querySelector('#gameCanvas2')
 let context2 = gameCanvas2.getContext('2d')
    ///////////////////////////////////////////
 
  context.clearRect(0,0,1000,500)
  spaceshipCreator('./img/ship2.png',context,sound,context,context2) 


  enemycreator('./img/ship4.png',context2)

  
     
}
//////////////////////////////////////////////////////////////////////////////////////////

 //creat spaceship function 
function spaceshipCreator(src,ctx,sound,ctx2,ctx3) {
  console.log('hallo');
  
  let img  = document.createElement('img')
img.src =src //'./img/ship2.png'
img.onload = function () {
    let x =10
    let y=10
    //add Event to the space ship 
    gameCanvas2.onmousemove = (e=>{ 
       if (true) {
        let x= e.pageX
        let y= e.pageY
        ctx.clearRect(0,0,1000,500)
        ctx.drawImage(img,40,30,300,200,x,y,40,30)
           
       }
    } )
 //////////////////////////////////////////////////////////////   
//caling laser shoot function + add Event 
   document.onclick =(e=>{
    LaserShoot(e.pageX,e.pageY,ctx2,ctx3)
 /////////////////////////////////////////////////////////////////////   
  // LaserShoot(e.pageX-5,e.pageY-5,ctx2)
    sound.currentTime =0;
    sound.play()
                         })
                       }

}
/////////////////////////////////////////////////////////////////////
//laser shoot +laser sound
function LaserShoot(laserX,laserY,ctx,ctx3) {
  
    let laserCaunter = laserY
    let laserInterval = setInterval(() => {
     if (laserCaunter ==0) {
       laserCaunter= laserY
       clearInterval(laserInterval)
       
     }else{
       laserCaunter-=10
     }
     
   
     ctx.fillStyle ="red"
     ctx.clearRect(laserX+15,laserCaunter+10,3,5)
     ctx.fillRect(laserX+15,laserCaunter,3,5)
     ctx.stroke();
     explogen (laserX,laserY,enX,enY,'./img/explosion0.png',ctx)
     if(status=='explogen'){
      
     }

      }, 50); 
   }
   ////////////////////////////////////////////////////////
  var enX =0
  var enY =0
   function enemycreator(src,somCtx) {

    console.log('hi');
     let enemyInterval= setInterval(() => {
        // enX+=100
    let swetsher =true
    let enemyimg =document.createElement('img')
        enemyimg.src =src
       
        enY+=5
        enX+=0// creat function to macke enemy move as cercel
        enemyimg.onload= function () {
          somCtx.clearRect(0,0,1000,500)
          somCtx.drawImage(enemyimg,0,0,700,400,enX,enY,40,30)
             } 
      if (enY==500 && swetsher==true) {
      enY=0
      enX+=50 
      }
      else{if(enX==1000 && swetsher==true){
        swetsher=false
        enX-=50
      } }
      if(status=='explogen'){
        enemyimg.remove()
       
        
        
       }
    
      
    }, 40);

    
     
    }

    var status= 'notExplogen'
    function explogen (laserX,laserY,enX,enY,src,ctx) {
      
      let enWidth = 40
      let enHeight = 30
      let laserWidth = 3
      let laserHeight = 5
      let topLeftCornerCheck = checkInside(enX , enY ,enWidth, enHeight, laserX, laserY)

      let topRightCornerCheck = checkInside(enX , enY ,enWidth, enHeight, laserX + laserWidth, laserY)
      let buttomRightCornerCheck = checkInside(enX , enY ,enWidth, enHeight, laserX + laserWidth, laserY + laserHeight)
      let buttomLeftCornerCheck = checkInside(enX , enY ,enWidth, enHeight, laserX , laserY + laserHeight)

      if(topLeftCornerCheck || topRightCornerCheck || buttomRightCornerCheck || buttomLeftCornerCheck){
        console.log('explogen');
        status = 'explogen'
        let img  = document.createElement('img')
        img.src =src
        img.onload = function () {
         ctx.clearRect(0,0,1000,500) 
        ctx.drawImage(img,0,0,150,100,enX,enY,70,50)
          
        }
        

      }

      
    }
    function checkInside(enX , enY ,enWidth, enHeight, pointX , pointY ){
      return (pointX >= enX && pointX <= enX + enWidth) && (pointY >= enY && pointY <= enY + enHeight )
    }


      
       

       
  