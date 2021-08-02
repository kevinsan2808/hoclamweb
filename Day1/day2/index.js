// // // // // let a = 5;
// // // // // let b =6;
// // // // // console.log(a,b);

// // // // // [a,b]=[b,a]
// // // // // console.log(a,b);

// // // // let a =1 ;
// // // // let b =2;
// // // // let temp;
// // // // console.log(a,b);
// // // // temp =a;
// // // // a=b;
// // // // b=a;
// // // // console.log(a,b);

// // // // const s ='Hello beauty there';
// // // // a = s.split(" ");
// // // // console.log(a);

// // // // const a= [ 4,5,7,-8];
// // // // console.log(...a);

// // // let quanAo=["jeans","t-shirt","socks"];

// // // n = prompt("Hi there, welcome to shop admin panel, what do you want(C,R,U,D)?")
// // // console.log(n)
// // // if(n!="C" || n!="R" ||n!="U"||n!="D"||n!="c"||n!="r"||n!="u"||n!="d"){
// // //     alert("This command is not suported")
// // // }
// // // else if(n=="C" || n=="c"){
// // //     them= prompt("Enter the name of the new item")
// // //     quanAo.push(them)
// // //     alert("Done")
// // // }
// // // else if(n == "R"|| n=="r"){
// // //     console.log("The current items are:")
// // //     console.log(...quanAo)
// // // }
// // // else if(n == "u"|| n=="U"){
// // //     position= prompt("Enter the position you want to update")
// // //     newName=prompt("Enter the new name")
// // //     quanAo[position]=newName
// // //     alert("done")
// // // }

// // let inventory ={
// //     'gold' : 500,
// //     'pouch' :["flint","twine","gemstone"],
// //     'backpack' :["xylophone", "dagger","bedroll","bread loaf"]
    
// // }
// // //creat
// // //inventory.pocket=["seashell","strange berry","lint"]
// // //console.log(inventory)
// // // //delete
// // //delete inventory.backpack[1]
// // //console.log(inventory)
// // // //update
// //  //inventory.gold=550
// //  //console.log(inventory)
// // // //delete
// //  delete inventory.pouch
// //  console.log(inventory)


// //Session 3 Homework
// //Variable swap


// // let a = 5;
// // let b =6;
// // [a,b] = [b,a];
// // console.log(a,b);

// // let a = 5;
// // let b = 6;

// // temp=a;
// // a=b;
// // b= temp;

// // console.log(a,b)

// //Split string into array
// // const s = 'Hello beauty there';
// // a = s.split(" ")
// // console.log(a);

// // const a = [4,5,6,-8]
// // console.log(...a)


// // let quanAo=["1.jeans","2.t-shirt","3.socks"];
// // h = prompt("Hi there, welcome to shop admin panel, waht do you want(C,R,U,D)?")
// // while(h!= 'c'|| h!='C'||h!='u'||h!='U'||h!='r'||h!='R'||h!='d'||h!='D'){ 
// //     alert("This command is not supported")
// //     h = prompt("Hi there, welcome to shop admin panel, waht do you want(C,R,U,D)?")  
// // }
// // else if(h=='c'&&h=='C'){
// //     them= prompt("Enter the name of the new item")
// //     quanAo.push(them)
// //     alert("done")
// // }


// // daySo = prompt("Enter a squence of number, separated by commas(,)")
// // let a= daySo.split(",")
// // console.log(a)
// // var tong = 0
// // for(var i in a){
// //     tong += Number(a[i])
// // }
// // console.log(tong)
// // alert("The sum of them is "+tong)

// // daySo= prompt("Enter a squence of number, seperated by","")
// // let a= daySo.split(",")
// // var min = Math.min.apply(Math,a)

// // console.log(min)
// // alert("The smallest number is "+min)

// // const arr=[ 3,4,6,-9,10,-88,2]
// // num = prompt("Enter a number")
// // var dem=0
// // var vitri =0
// // for(var i =0; i<arr.length; i ++){
// //     if(num==arr[i]){
// //         dem++
// //         vitri = i
// //     }
// // }
// // if(dem>0){
// //     alert(num+" is FOUND in my array at "+vitri)
// // }
// // else{
// //     alert(num+" is NOT FOUND")
// // }


// // let quanAo= ["jeans","Tshirt","socks"]
// // n = prompt("Hi there, welcome to shop admin panel, what do you want(C,R,U,D)?")
// // console.log(n)
// // if(n!="C" && n!="R" && n!="U" && n!="D" && n!="c" && n!="r" && n!="u" && n!="d"){
// //     alert("This command is not supported")
// // }
// // else if(n=="C"||n=="c"){
// //     them= prompt("Enter the name of the new item")
// //     quanAo.push(them)
// //     alert("Done")
// //     console.log(...quanAo)
// // }
// // else if(n == "R"|| n=="r"){
// //     console.log("The current items are:")
// //     console.log(...quanAo)
// // }
// // else if(n == "u"|| n=="U"){
// //     position= prompt("Enter the position you want to update")
// //     newName=prompt("Enter the new name")
// //     quanAo[position]=newName
// //     alert("done")
// //     n = prompt("Hi there, welcome to shop admin panel, what do you want(C,R,U,D)?")
// //     console.log(n)
// //     if(n == "R"|| n=="r"){
// //         console.log("The current items are:")
// //         console.log(...quanAo)
// //     }

// // }

// // console.log("Hello , my name is Quoc Huy and here is my sheep sizes:")
// // const a= [5,7,300,90,24,50,75]

// // console.log(a)

// // let max= Math.max.apply(Math,a)
// // let c =max

// // console.log("now my biggest sheep has size "+max+", let shave it")
// // let vitri= a.indexOf(c,0)
// // console.log(vitri)

// // a[vitri]=8
// // console.log("After shearing, here is my flock")
// // console.log(a)
// // console.log("MONTH 1")
// // console.log("One month has passsed,my sheep have grown , here are their size")
// // for(let i =0 ; i<a.length;i++){
// //      a[i]=a[i]+50 
// // }
// // console.log(a)
// // var total  = 0
// // for(let i=0; i<a.length;i++){
// //     total = total +a[i]
// // }
// // console.log("My flock has size in total: "+total)
// // console.log("I would get "+total+" * 2$ = "+(total*2))
// // const product = {
// //     name:'xiaomi rice cooker',
// //     price:1700,
// //     brand:'xiaomi',
// //     color: 'white'
// // };
// // for (let x in product){
// //     console.log(x);
// // }

// alert("Hi there, this is dev dictionary")
// var keyWord = prompt("Enter a keyword")
// if(keyWord =="debug"){
//     alert("The process of figuring out why your program has a certain error and how to fix it")
// }
// if(keyWord =="dev"){
//     n  =prompt("We could not find the word : dev,leave your expalaination")
//     d =alert("done")
//     keyWord = prompt("Enter a keyword")
//     if(keyWord =="dev"){
//     alert(n)
//     }
// }



// const product ={
//     name:' xiaomi rice cooker'
//     price: 1700,
//     brand: 'xiaomi',
//     color: 'white'
// };
// for(let x in product){
//     console.log(product[x])
// }


// var price = 0 
// const product ={
//     name:['xiaomi portable charger 20000mah','VSmart Active 1','Iphone X','Samsung Galaxy A9'],
//     brand:['xiaomi','vsmart','apple','samsung']
//     price : 428,5487,21490,8490,
//     color:['white','black','gray','blue']
// }