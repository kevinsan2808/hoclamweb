// // //console.log("Huy");lệnh hiển thị in ra trong console ( tụ xem 1 mình)
// // //alert("Huy"); lệnh cảnh bảo
// // //confirm("yeu Apple?")lệnh xác nhận
// // //prompt("Bạn bao nhiêu tuổi");lệnh điền thông tin

// // //var x=1;
// // //let y=2;


// // //for(let i =1; i<=10; i++){
// // //    console.log("Huy");
// // //}

// // let yourAge = prompt("Nhập tuổi của bạn: ")
// // if (yourAge<10){
// //     alert("Bạn là trẩu");
// // }
// // else{
// //     alert("Bạn là người lớn")
// // }
// let inp = -1;

// while (inp<=0){
//     inp= prompt("Nhập số dương: ");
// }

let monAn = ["Cơm","Thịt","Cá"];
//Creat
monAn.push("bún đậu");
console.log(monAn);
//read
console.log(monAn[0]);
//update
monAn[0]= "Cháo"
console.log(monAn)
//delete
monAn.splice(0,1);
console.log(monAn)

//Creat Read Update Delete(CRUD)