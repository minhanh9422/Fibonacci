let lastSum=0
let sum=1
let dem=1
//0, 1, 1, 2, 3, 5
while (dem<=20){
    document.write(sum +"; ")
    let lastSum= sum
    sum= sum + lastSum
    dem++
}