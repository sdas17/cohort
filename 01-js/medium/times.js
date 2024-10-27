function caluation(n){
    let beforetimespend=new Date().getTime();
    console.log(beforetimespend)
    let sum =0;
    for(let i =0;i<sum;i++){
        sum+=n;

    }
    let afterTimespped=new Date().getTime();
    console.log(afterTimespped)
    return (afterTimespped-beforetimespend)/1000
}
let b=caluation(100000)
console.log(b)