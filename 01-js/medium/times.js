// function caluation(n){
//     let beforetimespend=new Date().getTime();
//     console.log(beforetimespend)
//     let sum =0;
//     for(let i =0;i<sum;i++){
//         sum+=n;

//     }
//     let afterTimespped=new Date().getTime();
//     console.log(afterTimespped)
//     return (afterTimespped-beforetimespend)/1000
// }
// let b=caluation(100000)
// console.log(b)
let startTime;
let endTime;
function startWatch (){
    startTime = new Date().getTime();
    intervalId = setInterval(() => {
        const currentTime = new Date().getTime(); // Current time
        const elapsedTime = ((currentTime - startTime) / 1000).toFixed(2); // Calculate elapsed time in seconds
        console.log(`Elapsed time: ${elapsedTime} seconds`);
    }, 1000);
}
function stopStopwatch() {
    clearInterval(intervalId); // Stop updating the stopwatch
    const endTime = new Date().getTime();
    const totalElapsedTime = ((endTime - startTime) / 1000).toFixed(2); // Final elapsed time in seconds
    console.log(`Final time: ${totalElapsedTime} seconds`);
}
startWatch();

setTimeout(stopStopwatch, 5000);