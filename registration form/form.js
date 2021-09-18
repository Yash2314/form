const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const phoneNumber = document.getElementById("phoneNumber");
const language = document.getElementById("lang");

function formValidation() {
	console.log(name);
  if (name.value.length < 2 || name.value.length > 20) {
    alert("Name length should be more than 2 and less than 21");
    name.focus();
    return ;
  }
  if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    alert("Please enter a valid email!");
    email.focus();
    return ;
  }
  if (!password.value.match(/^.{5,15}$/)) {
    alert("Password length must be between 5-15 characters!");
    password.focus();
    return ;
  }
  if (!phoneNumber.value.match(/^[1-9][0-9]{9}$/)) {
    alert("Phone number must be 10 characters long number and first digit can't be 0!");
    phoneNumber.focus();
    returnfalse;
  }
  if (language.value === "") {
    alert("Please select your fav language!")
    return ;
  }

  const n = document.getElementById("name").value;
  const e = document.getElementById("email").value;
  const p = document.getElementById("phoneNumber").value;
  const c = document.getElementById("city").value;
  alert(`name: ${n} \nemail: ${e} \nPhone No.: ${p}\nCity: ${c}`);  
}