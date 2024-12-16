// const input1 = document.querySelector('.inputvalue')
// const email1 = document.querySelector('#email');
// const divdata = document.querySelector('.student-information');
// const button = document.querySelector('#button')
// button.addEventListener("click", addstudentvalue);
// function addstudentvalue() {
//     console.log('Hello');
//     console.log(input1.value);

// const para1 = document.createElement("span");
// const email2 = document.createElement("span");
// const para1 = document.createElement("span");
// divdata.appendChild(para1);
// divdata.appendChild(email2);
//  input1.value = ''
//  email1.value = ''
// para1.innerHTML = input1.value;
// email2.innerHTML = email1.value;
//  input1.innerHTML = ()
//  console.log(para1);
// localStorage.setItem('Full name',input1);
// const btn = document.createElement('button')
// divdata.appendChild(btn);
// btn.addEventListener('click',reset)
// function reset(){
// para1.innerHTML = '----'
// }
// const delbtn = document.createElement('button')
// divdata.appendChild(delbtn);
// divdata.addEventListener('click',delet)
// function delet(e){
// const i = e.target
// console.log(i);

//  const item = i.parentNode;
// item.remove();
// }

//  localStorage.getItem(input1)
// }

const input = document.querySelector("#full-name");
const input2 = document.getElementsByClassName("input");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const rollno = document.querySelector("#rollno");
const studentid = document.querySelector("#studentid");
const tablerow = document.querySelector('.table-row')
const studentdata = document.querySelector("#student-data");
const button = document.querySelector("#button");

button.addEventListener("click", register);
function register() {
  const div = document.createElement("div");
  studentdata.appendChild(div);

  // const inputspan = document.createElement("p");
  // div.appendChild(inputspan);
  const tabldat = tablerow.appendChild(document.createElement('td'))
  tabldat.innerHTML = input.value;

  // const phonespan = document.createElement("p");
  // div.appendChild(phonespan);
  // phonespan.appendChild(tabledata)
  const tabldat1 = tablerow.appendChild(document.createElement('td'))
  tabldat1.innerHTML = phone.value;



  // const emailspan = document.createElement("p");
  // div.appendChild(emailspan);
  // emailspan.appendChild(tabledata)
  const tabldat2 = tablerow.appendChild(document.createElement('td'))
  tabldat2.innerHTML = email.value;


  // const rollnospan = document.createElement("p");
  // div.appendChild(rollnospan);
  // rollnospan.appendChild(tabledata)
  const tabldat3 = tablerow.appendChild(document.createElement('td'))
  tabldat3.innerHTML = rollno.value;


  // const studentidspan = document.createElement("p");
  // div.appendChild(studentidspan);
  // studentidspan.appendChild(tabledata)
  const tabldat4 = tablerow.appendChild(document.createElement('td'))
  tabldat4.innerHTML = studentid.value;

  // if (
  //   input2.value == ''
  // ) {
  //   alert("Please Fill All The Details");
  // } else {
  // inputspan.innerHTML = input.value;
  input.value = "";
  // phonespan.innerHTML = phone.value;
  phone.value = "";
  // emailspan.innerHTML = email.value;
  email.value = "";
  // rollnospan.innerHTML = rollno.value;
  rollno.value = "";
  // studentidspan.innerHTML = studentid.value;
  studentid.value = "";
  // alert("Thanku For Submiting The Form");

  //  }
}
