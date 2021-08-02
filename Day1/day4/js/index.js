
// let neym= document.getElementById('ney');
// neym.remove()


// let b = document.getElementById('DSach')
// console.log(b)


// let c = document.getElementById('button')
// console.log(c)
// c.addEventListener('click',function(){
//     b.innerHTML+="<li>kante</li>"

// })
    
let ten = document.getElementById("ten")
console.log(ten)
let ds = document.getElementById('danhsach')
console.log(ds);
ten.addEventListener('keydown',function(e){
    if(e.code==='Enter'){
        ds.innerHTML +="<li>ten</li>"
    }
})
