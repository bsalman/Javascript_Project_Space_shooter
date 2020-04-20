window.onload = function(){
    let container=document.querySelector('.container')
    let gameCanvas = document.querySelector('#gameCanvas')
    let context = gameCanvas.getContext('2d')
    let img  = document.createElement('img')
    img.classList.add('spaceShip')
    img.setAttribute('id','spaceShip')
    img.src ='./img/ship2.png'
    img.onload = function () {
        // die position zu rebareren
        let x =10
        let y=10
        document.onmousemove = (e=>{
            console.log(e);
           if (true) {
               x= e.pageX
               y= e.pageY
              context.clearRect(0,0,300,300)
               context.drawImage(img,0,0,600,300,x,y,40,20)
           }
            
        } )
        document.onclick =((e)=>{
            
        })
   
    }}
