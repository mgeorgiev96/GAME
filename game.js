`use strict`

let canvas = document.getElementById("canvas")
let c = canvas.getContext(`2d`)
canvas.height = window.innerHeight
canvas.width = window.innerWidth
let display = document.getElementById("score")
let score = 0
display.innerHTML = `Score: ${score}`


const declare = ()=>{
    let clar = confirm(`New Game?`)
    if(clar!==true){
        setTimeout(()=>{
          ball.dy = 0 
          ball.dx = 0 
        },100)
    }
}
declare();


const gameOver = () =>{
    alert("Game Over!!!")
}


const getScore = ()=>{
    score++
    display.innerHTML = `Score: ${score}`
    if(score===66){
        alert("You Won!")
        window.location.reload()
    }
}


let first = [] , second = [] , third = [] , fourth = [],  fifth = [],  sixth = []

let x = canvas.width/13
let y = canvas.height/25
let width = canvas.width/20
let height = canvas.height/45
let ballRadius = canvas.width/20
let ball,platform
let mouse = {
    x:undefined,
    y:undefined
}

window.addEventListener("mousemove",(e)=>{
    mouse.x = e.clientX
    mouse.y = e.clientY
})


function collisionDetection(x1,x2,y1,y2){
   let xDist = x2 - x1
   let yDist = y2 - y1
   return Math.sqrt(Math.pow(xDist,2)+Math.pow(xDist,2))
}




function Block(x,y,width,height,color){
    this.x = x
    this.y = y
    this.width = width
    this.color = color
    this.height = height
    this.draw = ()=>{
        c.beginPath()
        c.fillRect(this.x,this.y,this.width,this.height)
        c.fillStyle = this.color
        c.fill()
        c.stroke()
        c.closePath()
    }
}
function Ball(x,y,radius,color){
    this.dy = 7
    this.dx = 7
    this.x = x
    this.y = y
    this.color = color
    this.radius = radius
    this.draw = ()=>{
        c.beginPath()
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
        c.fillStyle = this.color
        c.fill()
        c.strokeStyle = this.color
        c.stroke()
        c.closePath()
    }
    this.update = ()=>{
        this.draw()
        this.y += -this.dy
        this.x += this.dx
        
        if(this.y+ballR>=canvas.height || this.y - ballR < 0){
            this.dy = -this.dy
        }
         if(this.x+ballR>=canvas.width || this.x - ballR < 0){
            this.dx = -this.dx
        }
        
        for(let i=0;i<first.length;i++){
            if(this.x - first[i].x <= first[i].width + this.radius && this.x - first[i].x >=-this.radius && this.y - first[i].y <= first[i].height + this.radius && this.y - first[i].y >= -this.radius && first[i].width !== 0){
                first[i].width = 0
                first[i].height = 0
                first[i].x = 0
                first[i].y = 0
                this.dy = -this.dy
                getScore()
            }
          
        }
        for(let j=0;j<second.length;j++){
            if(this.x - second[j].x <= second[j].width + this.radius && this.x - second[j].x >=-this.radius && this.y - second[j].y <= second[j].height + this.radius && this.y - second[j].y >= -this.radius && second[j].width !== 0 ){
                second[j].width = 0
                second[j].height = 0
                second[j].x = 0
                second[j].y = 0
                this.dy = -this.dy
                getScore()
            }
          
        }
        for(let k=0;k<third.length;k++){
            if(this.x - third[k].x <= third[k].width + this.radius && this.x - third[k].x >=-this.radius && this.y - third[k].y <= third[k].height + this.radius && this.y - third[k].y >= -this.radius && third[k].width !== 0){
                third[k].width = 0
                third[k].height = 0
                third[k].x = 0
                third[k].y = 0
                this.dy = -this.dy
                getScore()
            }
          
        }
        for(let l=0;l<fourth.length;l++){
            if(this.x - fourth[l].x <= fourth[l].width + this.radius && this.x - fourth[l].x >=-this.radius && this.y - fourth[l].y <= fourth[l].height + this.radius && this.y - fourth[l].y >= -this.radius && fourth[l].width !== 0){
                fourth[l].width = 0
                fourth[l].height = 0
                fourth[l].x = 0
                fourth[l].y = 0
                this.dy = -this.dy
                getScore()
            }
          
        }
        for(let m=0;m<fifth.length;m++){
            if(this.x - fifth[m].x <= fifth[m].width + this.radius && this.x - fifth[m].x >=-this.radius && this.y - fifth[m].y <= fifth[m].height + this.radius && this.y - fifth[m].y >= -this.radius && fifth[m].width !== 0){
                fifth[m].width = 0
                fifth[m].height = 0
                fifth[m].x = 0
                fifth[m].y = 0
                this.dy = -this.dy
                getScore()
            }
          
        }
        for(let n=0;n<sixth.length;n++){
            if(this.x - sixth[n].x <= sixth[n].width + this.radius && this.x - sixth[n].x >=-this.radius && this.y - sixth[n].y <= sixth[n].height + this.radius && this.y - sixth[n].y >= -this.radius && sixth[n].width !== 0){
                sixth[n].width = 0
                sixth[n].height = 0
                sixth[n].x = 0
                sixth[n].y = 0
                this.dy = -this.dy
                getScore()
            }
          
        }
        
        if(this.x - platform.x <= platform.width + this.radius && this.x - platform.x >-this.radius && platform.y - this.y <= this.radius*2.2 && platform.y - this.y >=this.radius/2){
            this.dy = -this.dy
        }
        if(this.y - this.radius > canvas.height - platform.height){
            gameOver()
            window.location.reload()
            this.x = canvas.width/2
            this.y = canvas.height/2
        }
        
    }
}
function Platform(x,y,width,height,color){
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.color = color
    this.draw = ()=>{
        c.beginPath()
        c.fillRect(this.x,this.y,this.width,this.height)
        c.fillStyle = this.color
        c.fill()
        c.stroke()
        c.closePath()
    }
    this.update = ()=>{
        this.draw()
        this.x = mouse.x
        if(this.x>=canvas.width - platform.width){
            this.x = canvas.width - platform.width
        }
        
    }
}

function createBlocks(){
    for(let i=0;i<11;i++){
        first.push(new Block(x,y,width,height,"lightblue"))
        second.push(new Block(x,y*3,width,height,"lightblue"))
        third.push(new Block(x,y*5,width,height,"lightblue"))
        fourth.push(new Block(x,y*7,width,height,"lightblue"))
        fifth.push(new Block(x,y*9,width,height,"lightblue"))
        sixth.push(new Block(x,y*11,width,height,"lightblue"))
        
    }
    
    for(let j=0;j<11;j++){
        if(j>0){
        first[j].x = first[j].x * j
        second[j].x = second[j].x * j
        third[j].x = third[j].x * j
        fourth[j].x = fourth[j].x * j
        fifth[j].x = fifth[j].x * j
        sixth[j].x = sixth[j].x * j
        }else if(j===0){
        first[j].x = first[j].x * first.length
        second[j].x = second[j].x * second.length
        third[j].x = third[j].x * third.length
        fourth[j].x = fourth[j].x * fourth.length
        fifth[j].x = fifth[j].x * fifth.length
        sixth[j].x = sixth[j].x * sixth.length 
        }
    }
}

createBlocks()



let ballR = Math.floor((canvas.width + canvas.height)/260)
let ballX = ballR*2 + Math.random()*canvas.width/1.1
let ballY = Math.random() + canvas.height / 1.5
let platX = canvas.width/2
let platH = canvas.height/50
let platW = canvas.width/20
let platY = canvas.height - platH

platform = new Platform(platX,platY,platW,platH,"lightblue")
ball = new Ball(ballX,ballY,ballR,"lightblue")

window.addEventListener("resize",()=>{
    
    
    
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
     x = canvas.width/13
     y = canvas.height/25
     width = canvas.width/20
     height = canvas.height/45
     ball.x = canvas.width /2
     ball.y = canvas.height/2
     ball.radius = Math.floor((canvas.width + canvas.height)/260)
     platform.height = canvas.height/50
     platform.y = canvas.height - platform.height
     platform.width = canvas.width/20
    for(let j=0;j<11;j++){
        
        if(sixth[j].width===0){
             sixth[j].width = 0
             sixth[j].height = 0
             sixth[j].x = 0
             sixth[j].y = 0
        }else if(j===0){
            sixth[j].x = x * first.length
            sixth[j].width = width
            sixth[j].y = y*11
            sixth[j].height = height
        }else{
            sixth[j].width = width
            sixth[j].y = y*11
            sixth[j].height = height
            sixth[j].x = x * j
        }
        
        if(fifth[j].width===0){
             fifth[j].width = 0
             fifth[j].height = 0
             fifth[j].x = 0
             fifth[j].y = 0
        }else if(j===0){
            fifth[j].x = x * first.length
            fifth[j].width = width
            fifth[j].y = y*9
            fifth[j].height = height
        }else{
            fifth[j].width = width
            fifth[j].y = y*9
            fifth[j].height = height
            fifth[j].x = x * j
        }
        
        if(fourth[j].width===0){
             fourth[j].width = 0
             fourth[j].height = 0
             fourth[j].x = 0
             fourth[j].y = 0
        }else if(j===0){
            fourth[j].x = x * first.length
            fourth[j].width = width
            fourth[j].y = y*7
            fourth[j].height = height
        }else{
            fourth[j].width = width
            fourth[j].y = y*7
            fourth[j].height = height
            fourth[j].x = x * j
        }
        
        if(third[j].width===0){
             third[j].width = 0
             third[j].height = 0
             third[j].x = 0
             third[j].y = 0
        }else if(j===0){
            third[j].x = x * first.length
            third[j].width = width
            third[j].y = y*5
            third[j].height = height
        }else{
            third[j].width = width
            third[j].y = y*5
            third[j].height = height
            third[j].x = x * j
        }
        
        if(second[j].width===0){
             second[j].width = 0
             second[j].height = 0
             second[j].x = 0
             second[j].y = 0
        }else if(j===0){
            second[j].x = x * first.length
            second[j].width = width
            second[j].y = y*3
            second[j].height = height
        }else{
            second[j].width = width
            second[j].y = y*3
            second[j].height = height
            second[j].x = x * j
        }
        
        if(first[j].width===0){
             first[j].width = 0
             first[j].height = 0
             first[j].x = 0
             first[j].y = 0
        }else if(j===0){
            first[j].x = x * first.length
            first[j].width = width
            first[j].y = y
            first[j].height = height
        }else{
            first[j].width = width
            first[j].y = y
            first[j].height = height
            first[j].x = x * j
        } 
        
    }
    
})


function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0,0,innerWidth,innerHeight)
    first.forEach(block=>block.draw())
    second.forEach(block=>block.draw())
    third.forEach(block=>block.draw())
    fourth.forEach(block=>block.draw())
    fifth.forEach(block=>block.draw())
    sixth.forEach(block=>block.draw())
    ball.update();
    platform.update();
    
}

animate()