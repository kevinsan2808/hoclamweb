// let quanAo = ["jeans","Tshirt","socks"]
// function bangDK(){
//     n = prompt("Hi there, welcome to shop admin panel, what do you want to (C,R,U,D)?")
//     console.log(n);
//     if(n!="C"&&n!="c"&&n!="R"&&n!="r"&&n!="U"&&n!="u"&&n!="D"&&n!="d"){
//         alert("This command is not supported")
//         bangDK()
//     }
//     else if(n=="C"||n=="c"){
//         them= prompt("Enter the name of the new item")
//         quanAo.push(them)
//         alert("done")
//         console.log(...quanAo)
//         bangDK()
//     }
//     else if(n=="r"||n=="R"){
//         console.log("The current items are:")
//         console.log(...quanAo)
//         bangDK()
//     }
//     else if(n=="u"||n=="U"){
//         position = prompt("Enter the position you want to update")
//         newName= prompt("Enter the new name")
//         quanAo[position]= newName
//         alert("Done")
//         console.log(...quanAo)
//         bangDK()
//     }
// }

// bangDK()

// const product=[
//     {
//         name:'xiaomi portable charger 20000 mah',
//         brand:'xiaomi',
//         price:428,
//         color:'white',
//         category:'charger',
//         providers:['phukiendientuzero','dientucc']

//     }


// const keyword=[
//     {
//         debug:"The process of figuring out why program has a certain error and how to fix it"
//     },
//     {
//         done:""
//     }
// ]
// alert("Hi there, this is dev dictionary")
// function bangDK(){
//     key = prompt("Enter a keyword")
//     if(key!="debug"&&key!="pm"&&key!="defect"&&key!="done"){
//         alert("we could not find your word "+key)
//         newExp= prompt("Leave your explanation")
        
//         alert("done")
        

//         bangDK()
//     }
//     else if(key=='debug'){
//         alert("The process of figuring out why program has a certain error and how to fix it")
//     }
//     else if(key=="done"){
//         alert("When your task is complete,")
//     }
//     else if(key=="defect"){
//         alert("The formal word for 'error'")
//     }
//     else if(key=="pm"){
//         alert("The short version of project manager")
//     }
    
// }
// bangDK()


//bai1
// let  str1 = prompt("Nhap vao 1 chuoi")
// var newString = "";
// for(var  i =str1.length-1;i>=0;i--){
//     newString+= str1[i];
// }
// alert(newString)

//bai 2
// let str1= prompt("Nhap vao 1 chuoi ki tu")
// var splitStr = str1.toLowerCase().split(' ');
// console.log(splitStr)
// for(var i =0;i <splitStr.length;i++){
//     splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
// }
// let hoanChinh = splitStr.join(' ')
// alert(hoanChinh)

//bai 3
// let mang= prompt("Nhap vao 1 mang")
// mangHoanchinh =new Set(mang)
// console.log(mangHoanchinh)


//bai4
const nhanVien=[
    {
        ten:'huy',
        tuoi:19,
        luong:100000,
        chucVu:"hoc sinh"
    
    },
    {
        ten:'hoang',
        tuoi:19,
        luong:100000,
        chucVu:"sinh vien"

    },
    {
        ten:'chinh',
        tuoi:19,
        luong:1000000,
        chucVu:"sep"
    }
]
console.log(...nhanVien)
function bangDK(){
n = prompt("Hi there, what do you want to (C,R,U,D)?")
console.log(n);
if(n!="C"&&n!="c"&&n!="R"&&n!="r"&&n!="U"&&n!="u"&&n!="D"&&n!="d"){
    alert("This command is not supported")
    bangDK()
}
else if(n=="C"||n=="c"){
    let them= prompt("Dien ten nhan vien moi")
    let age = prompt("Ho bao nhieu tuoi")
    let safari=prompt("Luong ho bn?")
    let chuc= promt("Chuc vu la gi?")
    nhanVien.push(them)
    nhanVien.push(age)
    nhanVien.push(safari)
    nhanVien.push(chuc)

    alert("done")
    console.log(...nhanVien)
    bangDK()
}
else if(n=="r"||n=="R"){
    console.log("DS NV hien tai")
    console.log(...nhanVien)
    bangDK()
}
    
    }
        
    bangDK()    