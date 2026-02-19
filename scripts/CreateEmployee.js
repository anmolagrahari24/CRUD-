const employeeFormEle = document.getElementById("employee-form");
const firstNameEle = document.getElementById("firstname")
const middleNameEle = document.getElementById("middlename")
const lastNameEle = document.getElementById("lastname")
const dobEle= document.getElementById("dob")
const emailEle = document.getElementById("email")
const maritalStatusEle = document.getElementById("maritalstatus")
const phoneNoEle = document.getElementById("phoneno")
const streetEle = document.getElementById("address")
const cityEle = document.getElementById("city")
const stateEle = document.getElementById("state")
const countryEle = document.getElementById("country")
const zipCodeEle = document.getElementById("zipcode")

employeeFormEle.addEventListener("submit" , async (e) => {
    e.preventDefault();
    console.log("Form Submitted");

// CREATE NEW EMP OBJECT
let newEmployeeData = {
    firstname: firstNameEle.value.trim(),
    middlename: middleNameEle.value.trim(),
    lastname: lastNameEle.value.trim(),
    dob: dobEle.value.trim(),
    email: emailEle.value.trim(),
    maritalstatus: maritalStatusEle.value,
    phoneno: phoneNoEle.value,
    address: {
        street: streetEle.value.trim(),
        city: cityEle.value.trim(),
        state: stateEle.value.trim(),
        country: countryEle.value.trim(),
        zipcode: zipCodeEle.value.trim(),
    },
};

try{
let resp = await fetch("https://crud-1-s11a.onrender.com/employees",{
    method : "POST",
    header : {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(newEmployeeData), // <-- SEND EMP DATA IN JSON-FORMAT
});
console.log(resp);

// NAVIGATION
window.location.href = "AllEmployees.html";

} catch(err) {
    console.log(err);
    alert("Something went wrong ❌")
}
});