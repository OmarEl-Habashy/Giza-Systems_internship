//first task

// let arr = [];
// function addFunc() {
//   let element = document.getElementById("input").value;
//   arr.push(element);
// }
// function displayFunc() {
//   let para = document.getElementById("p_dis");
//   let cont = "";
//   for (let i in arr) {
//     cont += arr[i] + "<br>";
//   }
//   para.innerHTML = cont;
// }

// second task

function addArrays() {
  let arr1 = [1, 0, 2, 3, 4];
  let arr2 = [3, 5, 6, 7, 8, 13];
  let sum = [];
  let maxLength = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < maxLength; i++) {
    sum.push((arr1[i] || 0) + (arr2[i] || 0));
  }
  for (let i in sum) {
    console.log(sum[i]);
  }
}
addArrays();
