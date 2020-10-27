// 0,1,1,2,3,5,7,12
let soHangThu=1
let P=0
let S=1
let N=0
while(soHangThu<=20){
P=S
document.write("Số hạng thứ "+soHangThu+" là:"+ N +"<br>")
S=N
N=Number(S+P) 
soHangThu++
}