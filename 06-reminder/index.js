/*
  <input type="text" class="ipt">
  <button class="btn-put">put</button>
  <button class="btn-clean">clean</button>
  <div class="lis"></div>
*/
const ipt = document.querySelector('.ipt');
const btnPut = document.querySelector('.btn-put');
const btnClean = document.querySelector('.btn-clean');
const lis = document.querySelector('.lis');
let saveArr = [];

btnPut.addEventListener('click', () => {
  saveArr.push(ipt.value);
  ipt.value = "";
  console.log(saveArr);
});