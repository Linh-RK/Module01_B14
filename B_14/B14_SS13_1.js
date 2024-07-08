// [Thực hành] Đảo ngược các phần tử trong mảng
// let a = [-3, 5, 1, 3, 2, 10];
// let first = 0;
// let last = a.length - 1;
// while (first < last) {
//   let b = a[first];
//   a[first] = a[last];
//   a[last] = b;
//   first++;
//   last--;
// }
// console.log(a);
// =====================================================================================

// let a = [-3, 5, 1, 3, 2, 10];
// for (let i = 0; i <= a.length / 2; i++) {
//   let b = a[i];
//   a[i] = a[a.length - 1 - i];
//   a[a.length - 1 - i] = b;
// }
// console.log(a);
// =====================================================================================

//BAI 2: [Thực hành] Tìm giá trị trong mảng
// Viết một chương trình JavaScript để tìm một giá tri được nhập vào từ hộp thoại có nằm trong mảng hay không. Nếu có in ra vị trí của phần tử đó.
// let n = +prompt(" moi ban nhap gia tri n");
// let a = [-3, 5, 1, 3, 2, 10];
// for (let i = 0; i < a.length - 1; i++) {
//   if (a[i] == n) {
//     console.log(i);
//     break;
//   }
// }
// =====================================================================================
// BAI 3: [Thực hành] LUYỆN TẬP VÀ THAO TÁC MẢNG

// =====================================================================================

// BAI 4: [Thực hành] TÌM GIÁ TRỊ TRONG MẢNG
// Tạo mảng có sẵn với các phẩn tử số. Cho người dùng nhập vào một số bất kỳ, sau đó tiến hành kiểm tra:
// Nếu số đó có trong mảng cho sẵn thì alert(“Bingo”)
// Nếu số đó không có trong mảng cho sẳn thì alert(“Chúc bạn may mắn lần sau”)

// let a = [-3, 5, 1, 3, 2, 10];
// let n = +prompt(" moi ban nhap gia tri n");
// let check = false;
// for (let i = 0; i < a.length; i++) {
//   if (a[i] === n) {
//     check = true;
//     // alert("Bingo");
//     break;
//   }
//   //   alert("Chuc ban may man lan sau");
//   // break;
// }
// if (check) {
//   alert("Bingo");
// } else {
//   alert("Chuc ban may man lan sau");
// };

// let a = [-3, 5, 1, 3, 2, 10];
// let n = +prompt(" moi ban nhap gia tri n");
// // let check = false;
// for (let i = 0; i < a.length; i++) {
//   if (a[i] === n) {
//     // check = true;
//     alert("Bingo");
//     break;
//   }
// }

// BAI 5  [Thực hành] ĐẢO NGƯỢC CÁC PHẦN TỬ TRONG MẢNG

// let n = prompt(`Moi ban nhap vao day bat ki ngan boi dau ","`);
// let a = n.split(",");

// let b = [];
// for (let i = a.length - 1; i >= 0; i--) {
//   b.push(a[i]);
// }
// console.log(b);

// =====================================================================================

// BAI 6 [Thực hành] TÌM PHẦN TỬ LỚN NHẤT TRONG MẢNG
// let n = prompt(`Moi ban nhap vao day phan tu bat ki cach nhau bang dau ","`);
// let a = n.split(",");
// console.log(a);
// let max;
// for (let i = 0; i < a.length; i++) {
//   if (a[i] < a[i + 1]) {
//     max = a[i + 1];
//   }
// }
// console.log(max);

// =====================================================================================

// BAI 7 [Bài tập] Sử dụng các hàm có sẵn của mảng
// Bài 1: Viết một chương trình JavaScript để nối tất cả các phần tử trong một mảng chuỗi lại với nhau. Ví dụ có mảng chuỗi như sau:
// let myColor = ["Lion", "Tiger", "Wolf", "Kangaroo"];
// myColor.join();
// console.log(myColor.join());
// =====================================================================================
// Bài 2: Viết một chương trình nhận một số nhập vào và chèn dấu (_) giữa 2 số chẵn.
// let n = prompt("Moi ban nhap vao 1 chuoi");
// let a = n.split("");
// // let b = [];
// console.log(a);

// for (let i = 0; i < a.length; i++) {
//   if (a[i] % 2 === 0 && a[i + 1] % 2 === 0) {
//     b.push(a[i], "-");
//   } else {
//     b.push(a[i]);
//   }
// }
// console.log(b);
// console.log(b.join(""));
// CACH 2
// =====================================================================================
// Bài 3: Viết một chương trình nhập vào một chuỗi và chuyển các ký tự chữ thường trong chuỗi vừa nhập sang thành dạng chữ hoa.
// let UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
// let LowerCase = "abcdefghijklmnopqrstuvwxyz ";
// let u = UpperCase.split("");
// let l = LowerCase.split("");
// console.log(u);
// console.log(l);

// let string = "Keep Calm And Code On";
// let a = string.split("");
// console.log(a);
// // console.log(u.includes(a[0]));
// for (let i = 0; i < a.length; i++) {
//   if (u.indexOf(a[i]) == -1) {
//     a[i] = u[l.indexOf(a[i])];
//   } else {
//     a[i] = l[u.indexOf(a[i])];
//   }
// }
// console.log(a.join(""));
// =====================================================================================

// BAI 8 [Bài tập] Từ điển
// Phát triển một ứng dụng từ điển đơn giản. Ứng dụng cho phép tra cứu các từ tiếng Anh sang tiếng Việt. Danh sách các từ được lưu trữ trong các mảng.

// Bước 1: Tạo một trang web với một form đơn giản cho phép người dùng nhập từ cần tìm kiếm.

// Bước 2: Viết mã JavaScript

// Tạo 2 mảng có độ dài bằng nhau để lưu trữ danh sách các từ. Mảng 1 lưu trữ các từ tiếng Anh, mảng 2 lưu trữ các từ tiếng Việt tương ứng.

// Khi tìm kiếm, tìm vị trí của từ tiếng Anh trong mảng 1. Nếu tìm thấy thì hiển thị từ tiếng Việt ở cùng vị trí trong mảng 2.

// Nếu không tìm thấy thì hiển thị thông báo không tìm thấy.
// let E = ["listen", "read", "speak", "write"];
// let V = ["nghe", "doc", "noi", "viet"];
// let language = prompt(`
//     Moi ban chon tu dien:
//     1. E-V
//     2. V-E
//     `);
// console.log(language);
// if (language != 1 && language != 2) {
//   alert("moi ban chon lai tu dien nhe");
// } else if (language == 1) {
//   let find = prompt("Moi ban nhap tu can tra");
//   if (E.indexOf(find) !== -1) {
//     console.log(V[E.indexOf(find)]);
//   } else {
//     alert("chung toi se som cap nhat tu vung nay");
//   }
// } else {
//   let find = prompt("Moi ban nhap tu can tra");
//   if (V.indexOf(find) !== -1) {
//     console.log(E[V.indexOf(find)]);
//   } else {
//     alert("chung toi se som cap nhat tu vung nay");
//   }
// }

// =====================================================================================

// BAI 9
// Mô phỏng ứng dụng todo list, tạo sẵn một mảng todoList có sẵn 2 phần tử
// Cho người dùng nhập vào todo mới, sau đó in ra toàn bộ phần tử có trong todoList theo dạng :

// Mô phỏng ứng dụng todo list, tạo sẵn một mảng todoList có sẵn 2 phần tử
// const todoList = [“Go to bed at 11pm”, “Do homework at 8pm”];
// Copy
// Sử dụng những kiến thức thao tác với mảng (C/R/U/D), hỏi người dùng command mà người dùng muốn nhập vào thông qua 4 chữ cái C/R/U/D :

//       C — Create:
// Cho người dùng nhập vào todo mới, sau đó in ra toàn bộ phần tử có trong todoList theo dạng :
// 1. Go to bed at 11pm
// 2. Do homework at 8pm
// 3. New todo
// Copy
//       R — Read:
// In ra toàn bộ phần tử có trong todoList giống phần C
//       U — Update:
// Hỏi người dùng vị trí phần tử muốn update
// Hỏi người dùng nội dung muốn update → tiến hành update
// Sau đó in ra toàn bộ phần tử có trong todoList giống phần C
//       D — Delete:
// Hỏi người dùng vị trí phần tử muốn delete
// Tiến hành delete
// Sau đó in ra toàn bộ phần tử có trong todoList giống phần C
let list = ["Go to bed at 11pm", "Do home work at 8pm"];
function madeList() {
  let choice = +prompt(`
        Option:
        1. C — Create
        2. R — Read
        3. U — Update
        4. D — Delete
        5. Exit
        `);
  let alert1 = "";
  switch (choice) {
    case 1:
      console.log(list);
      let todo = prompt("Add new job");
      list.push(todo);
      for (let i = 0; i < list.length; i++) {
        alert1 += `
            ${i + 1}.${list[i]} 
            `;
      }
      console.log(list);
      alert(alert1);
      break;

    case 2:
      console.log(list);
      for (let i = 0; i < list.length; i++) {
        alert1 += `
              ${i + 1}.${list[i]} 
              `;
      }
      console.log(list);
      alert(alert1);
      break;

    case 3:
      console.log(list);
      let updateIndex = +prompt("Update position");
      while (
        !Number.isInteger(updateIndex) ||
        updateIndex >= list.length ||
        updateIndex < 0
      ) {
        updateIndex = +prompt("Update position");
      }
      let updateContent = prompt("Updating content");
      list[updateIndex] = updateContent;
      for (let i = 0; i < list.length; i++) {
        alert1 += `
              ${i + 1}.${list[i]} 
              `;
      }
      console.log(list);
      alert(alert1);
      break;

    case 4:
      console.log(list);
      let deleteIndex = +prompt("Delete position");
      while (
        !Number.isInteger(deleteIndex) ||
        deleteIndex >= list.length ||
        deleteIndex < 0
      ) {
        deleteIndex = +prompt("Delete position");
      }
      list.splice(deleteIndex, 1);
      for (let i = 0; i < list.length; i++) {
        alert1 += `
              ${i + 1}.${list[i]} 
              `;
      }
      console.log(list);
      alert(alert1);
      break;
    case 5:
      console.log(list);
      return;
    default: {
      let choice = prompt(`
          Option:
          1. C — Create
          2. R — Read
          3. U — Update
          4. D — Delete
          5. Exit
          `);
    }
  }
  madeList();
}
madeList();
