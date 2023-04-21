const myCanvas = document.getElementById('my-canvas');
const ctx = myCanvas.getContext('2d');
// let previoustime
let newGeneration = Generation.generateRandom(30, myCanvas.width, myCanvas.height);
// for (let i = 0; i < 1000; i++) {
//     const newPoint = Point.generateRandom(myCanvas.width, myCanvas.height);
//     newGeneration.addPoint(newPoint);
// }
console.log(newGeneration);
// setInterval(() => {
    
//     for (let i = 0; i < pointsArray.length; i++) {
//         const point = pointsArray[i];
//         point.draw(ctx);
//         point.changePosition();
//     }

// }, 1);
function step(timestamp){
    // if (previoustime) {
    //     console.log(1000/(timestamp-previoustime))
    // }

    // previoustime = timestamp;
    

    // for (let i = 0; i < newGeneration.pointsArray.length; i++) {
    //     const point = newGeneration.pointsArray[i];
    //     point.draw(ctx);
    //     point.changePosition();
    // }

    newGeneration.draw(ctx);

    if (newGeneration.isDead()) {
        ctx.fillStyle = 'rgba(0,0,0,0.2)'
        ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);
        newGeneration = Generation.generateRandom(30, myCanvas.width, myCanvas.height);
    }

    window.requestAnimationFrame(step);
}
window.requestAnimationFrame(step);

// for (let i = 0; i < 100; i++) {

//     // const point = {
//     //     x: 300,
//     //     y: 300
//     // }

//     // const red = Math.floor(Math.random() * 256);
//     // const green = Math.floor(Math.random() * 256);
//     // const blue = Math.floor(Math.random() * 256);

//     // const randomColor = `rgb(${red},${green},${blue})`

//     // const point = new Point(300, 300, randomColor);

//     const point = Point.generateRandom(myCanvas.width, myCanvas.height);

//     setInterval(() => {

//         point.draw(ctx);
//         point.changePosition();
//         // const randomX = (Math.random()*4)-2;
//         // const randomY = (Math.random()*4)-2;
    
//         // ctx.fillStyle = point.color
//         // ctx.fillRect(point.x, point.y, 2, 2);
//         // point.x += randomX;
//         // point.y += randomY
//     }, 1);
    
// }




