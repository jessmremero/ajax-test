parent1.addEventListener('mousemove',function(e){
 let width = parent1.getBoundingClientRect().width//获取parent1的宽度//
  let height = parent1.getBoundingClientRect().height
  let xCenter = parent1.offsetTop + width/2//中心点的x坐标=parent1距离视口的的距离加上parent1的宽度一般//
  let yCenter = parent1.offsetLeft + height/2
  let xDiff = e.clientX  - xCenter
  let yDiff = e.clientY - yCenter//鼠标在parent1视口里面距离中心点的坐标//
  let distance = Math.sqrt(xDiff*xDiff + yDiff*yDiff )//鼠标在parent1距离中心点的距离//
let maxDistance = Math.sqrt(width*width + height*height)/2
let xPercent = xDiff/(width/2)
let yPercent = yDiff/(height/2)
let xDeg = xPercent * 10
let yDeg = yPercent * 10

child1.style.transform = `translateZ(-100px) rotateX(${-yDeg}deg) rotateY(${xDeg}deg)` 
})

