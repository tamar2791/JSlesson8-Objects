//תרגיל 1
const arrFruit = [
    {
        name: "apple",
        countCallories: 200,
        price: 7.9,
        print: function () {
            return `name: ${this.name}\ncount callories: ${this.countCallories}\nprice: ${this.price}` 
        }
    },
    {
        name: "orange",
        countCallories: 300,
        price: 11.9,
        print: function () {
            return `name: ${this.name}\ncount callories: ${this.countCallories}\nprice: ${this.price}` 
        }
    },
    new Object()
]
arrFruit[2].name="lemon"
arrFruit[2].countCallories=250
arrFruit[2].price=10.5
arrFruit[2].print=function(){
    return `name: ${this.name}\ncount callories: ${this.countCallories}\nprice: ${this.price}` 
}
for(const item in arrFruit){
    console.log(arrFruit[item].print())
}
console.log('='.repeat(5));
arrFruit[0].color="green"
for(const item in arrFruit){
    if('color' in arrFruit[item])
        console.log(arrFruit[item].print())
}
console.log('='.repeat(5));
for(const key in arrFruit[0]){
    if(typeof arrFruit[0][key] !== 'function')
        console.log(`${key}: ${arrFruit[0][key]}\n`);
}
delete arrFruit[1]['price']
document.getElementById("d").innerHTML=arrFruit[1].print()
const changefirstprice=()=>{
    arrFruit[0].price=document.getElementById("price").value
    console.log(arrFruit[0].print())
}
const filterArr=()=>{
    for (const item in arrFruit) {
        if(arrFruit[item].countCallories>document.getElementById("calories").value)
            delete arrFruit[item]
    }
    for(const item in arrFruit){
        console.log(arrFruit[item].print())
    }
}
//תרגיל 2
function Message(title="",body=""){
    this.title=title
    this.body=body
}
function MessageBox(color,background_color,icon,message=new Message()){
    this.color=color
    this.background_color=background_color
    this.icon=icon
    this.message=new Message(message.title,message.body)
    this.render=()=>{
        const h1e=document.createElement("h1")
        h1e.textContent=this.message.title
        const p=document.createElement("p")
        p.innerHTML = this.message.body.replace(/\n/g, "<br>");
        const iconImg = document.createElement("img");
        iconImg.src = this.icon;
        iconImg.style.width = "30px";
        iconImg.style.marginRight = "10px"; 
        const div=document.createElement("div")
        div.style.color=this.color
        div.style.backgroundColor=this.background_color
        div.appendChild(iconImg, h1e);
        div.appendChild(h1e)
        div.appendChild(p)
        return div
    }
}
const info=new MessageBox("blue","white","info.jpg",new Message())
const warning=new MessageBox("orange","dimgray","warning.jpg",new Message())
const error=new MessageBox("white","red","error.jpg",new Message())
const obj={
    information:info,
    warning:warning,
    error:error
}
function fmessage(event){
    const type=document.getElementById("mes").value
    const title=document.getElementById("tit").value
    const body=document.getElementById("bod").value
    obj[type].message.title=title
    obj[type].message.body=body
    const mmm=document.getElementById("mmm")
    if(mmm.firstChild)
        mmm.replaceChild(obj[type].render(),mmm.firstChild)
    else
        mmm.appendChild(obj[type].render())
}