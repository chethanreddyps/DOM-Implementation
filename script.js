function hello() {
  const userName = document.getElementById('inp').value;
  const hedr = document.getElementById('headerrr');
  let size1 = userName.length;
  if(size1!=0){
    hedr.innerText = "Hello, " + userName;
  }
  else {
    hedr.innerText = "Hello ";
  }
}

let box1 = document.getElementById('box-1');
box1.addEventListener('click',() => {
    box1.style.backgroundColor = 'red'
})
let box2 = document.getElementById('box-2');
box2.addEventListener('click',() => {
    box2.style.backgroundColor = 'blue'
})
let box3 = document.getElementById('box-3');
box3.addEventListener('click',() => {
    box3.style.backgroundColor = 'green'
})
let box4 = document.getElementById('box-4');
box4.addEventListener('click',() => {
    box4.style.backgroundColor = 'yellow'

})

