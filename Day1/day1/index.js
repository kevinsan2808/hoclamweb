// // // // // // // // // // // // // // //console.log("Huy");lệnh hiển thị in ra trong console ( tụ xem 1 mình)
// // // // // // // // // // // // // // //alert("Huy"); lệnh cảnh bảo
// // // // // // // // // // // // // // //confirm("yeu Apple?")lệnh xác nhận
// // // // // // // // // // // // // // //prompt("Bạn bao nhiêu tuổi");lệnh điền thông tin

// // // // // // // // // // // // // // //var x=1;
// // // // // // // // // // // // // // //let y=2;


// // // // // // // // // // // // // // //for(let i =1; i<=10; i++){
// // // // // // // // // // // // // // //    console.log("Huy");
// // // // // // // // // // // // // // //}

// // // // // // // // // // // // // // let yourAge = prompt("Nhập tuổi của bạn: ")
// // // // // // // // // // // // // // if (yourAge<10){
// // // // // // // // // // // // // //     alert("Bạn là trẩu");
// // // // // // // // // // // // // // }
// // // // // // // // // // // // // // else{
// // // // // // // // // // // // // //     alert("Bạn là người lớn")
// // // // // // // // // // // // // // }
// // // // // // // // // // // // // let inp = -1;

// // // // // // // // // // // // // while (inp<=0){
// // // // // // // // // // // // //     inp= prompt("Nhập số dương: ");
// // // // // // // // // // // // // }

// // // // // // // // // // // // //let monAn = ["Cơm","Thịt","Cá"];
// // // // // // // // // // // // //Creat
// // // // // // // // // // // // //monAn.push("bún đậu");
// // // // // // // // // // // // //console.log(monAn);
// // // // // // // // // // // // //read
// // // // // // // // // // // // //console.log(monAn[0]);
// // // // // // // // // // // // //update
// // // // // // // // // // // // //monAn[0]= "Cháo"
// // // // // // // // // // // // //console.log(monAn)
// // // // // // // // // // // // //delete
// // // // // // // // // // // // //monAn.splice(0,1);
// // // // // // // // // // // // //console.log(monAn)

// // // // // // // // // // // // //Creat Read Update Delete(CRUD)

// // // // // // // // // // // // //let nameTen =["coding is great"]
// // // // // // // // // // // // //nameTen[0]="Coding might not be easy , but still great"
// // // // // // // // // // // // //console.log(nameTen[0])
// // // // // // // // // // // // //studentCount = 0
// // // // // // // // // // // // //console.log(studentCount)

// // // // // // // // // // // // //alert("you look beautiful today")
// // // // // // // // // // // // //ten = prompt("Hi there, your name please?")
// // // // // // // // // // // // //alert(ten)
// // // // // // // // // // // // //fName= prompt("Enter your first name")
// // // // // // // // // // // // //lName= prompt("Enter your last name")
// // // // // // // // // // // // //alert(fName+" " + lName)

// // // // // // // // // // // // //sLength= prompt("Enter side length of the square")
// // // // // // // // // // // // //alert("The square is "+sLength*sLength)

// // // // // // // // // // // // //radiusCircle = prompt("Enter the radius of the circle")
// // // // // // // // // // // // //alert("The circle area is "+(radiusCircle*31.4*1.0))

// // // // // // // // // // // // celsius= prompt("Enter the temperature in Celcius")
// // // // // // // // // // // // alert(celsius+"(C) = "+((celsius*1.8)+32)+"(F)")

// // // // // // // // // // // for(let i=0; i<=7;i++){
// // // // // // // // // // //     console.log(i)
// // // // // // // // // // // }

// // // // // // // // // // n = prompt("Enter a number?")
// // // // // // // // // // for(let i=0;i<n;i++){
// // // // // // // // // //     console.log(i)
// // // // // // // // // // }

// // // // // // // // // n = prompt("Enter n")
// // // // // // // // // for(let i =3; i<n;i++){
// // // // // // // // //     console.log(i)
// // // // // // // // // }

// // // // // // // // n = prompt("enter n")
// // // // // // // // c= prompt("enter c")
// // // // // // // // for(let i=c; i<n;i++){
// // // // // // // //     console.log(i)
// // // // // // // // }


 n= Number(prompt("Enter n"))
 c= Number(prompt("Enter c"))
 for(let i=c; i<=n;i=i+3){
     console.log(i)
 }

// // // // // // n = prompt("Enter a number")
// // // // // // let tong = 1
// // // // // // for(let i =1;i<=n;i++){
// // // // // //     tong = tong *i
// // // // // // }
// // // // // // alert("The factorial of "+n+" is "+tong)



// // // // // age=prompt("How old are you")
// // // // // if(age<14){
// // // // //     alert("You are not old enough to view this content")
// // // // // }
// // // // // else{
// // // // //     alert("Enjoy")
// // // // // }

// // // // n= prompt("Enter a number")
// // // // lHalf = 9/2
// // // // if(n<lHalf){
// // // //     alert("Lower half of 9")
// // // // }
// // // // else{
// // // //     alert("Higher half of 9")
// // // // }

// // // n= prompt("n = ")
// // // x= prompt("x = ")
// // // nHalf= n/2
// // // if(x<nHalf){
// // //     alert(x+" is in lower half of "+n)
// // // }
// // // else{
// // //     alert(x+" is in higher half of "+n)
// // // }

// // x = prompt("x = ")
// // if(x%2==0){
// //     alert(x+" is an even number")
// // }
// // else{
// //     alert(x+" is and odd number")
// // }

// kg = prompt("Your weight in kg")
// cm = prompt("Your height in cm")
// bmi = Math.round(((kg/(cm*cm))*10000)*100)/100
// alert("Your BMI is "+bmi)
// if(bmi<16){
//     alert("You are severely underweight")
// }
// else if(bmi<18){
//     alert("You are underweight")
// }
// else if(bmi>18.5&&bmi<25){
//     alert("You are normal")
// }
// else if(bmi<30){
//     alert("You are overweight")
// }
// else if(bmi>30){
//     alert("You are obese ")
// }