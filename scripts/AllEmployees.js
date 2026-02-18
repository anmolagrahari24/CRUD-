const employeeContainerEle = document.getElementById("employees-container");

async function getAllEmployees() {
    try {
        let resp = await fetch(`http://localhost:5000/employees`);
        let data = await resp.json();
        console.log(data); // [{},{},{}]
        displayEmployees(data);
    } catch (err) {
        console.log(err);
        alert("Something went wrong ❌");
    }
}

// CALLS FUNCTION AFTER DOM TREE CREATION
window.addEventListener("DOMContentLoaded", () => {
    getAllEmployees();
});

function displayEmployees(allEmployees) {
    allEmployees.map((emp) => {
        const empCard = document.createElement("article");
        empCard.className = "emp-card";

            empCard.innerHTML = `
            <header class = "emp-header>
            <h3 class = "emp-name">
               ${emp.firstname} ${emp.middlename} ${emp.lastname}
            </h3>
            <span class="emp-id>ID: ${emp.id}</span>
            </header>

            <section class="emp-info">
            <p><strong>Date of Birth:</strong> ${emp.dob}</p>
            <p><strong>Marital Status:</strong> ${emp.maritalstatus}</p>
            </section>

            <section class="emp-contact">
            <p><strong>Email:</strong> ${emp.email}</p>
            <p><strong>Phone:</strong> ${emp.phoneno}</p>
            </section>

            <section class="emp-address">
            <p><strong>Address:</strong></p>
            <p>
               ${emp.address.street}, ${emp.address.city}, <br>
               ${emp.address.state}, ${emp.address.country} - ${emp.address.zipcode}
            </p>
            </section>

            <footer class="emp-actions">
            <button class="btn edit-btn" data-id="${emp.id}">Edit</button>
            <button class="btn delete-btn" data-id="${emp.id}">Delete</button>
            </footer>
            `;

            // apply click event in deleteBTN
            const deleteBtn = empCard.querySelector(".delete-btn");
            deleteBtn.addEventListener("click", () => {
                handleDelete(emp.id);
            });

            const editBtn = empCard.querySelector(".edit-btn");
            editBtn.addEventListener("click", () => {
                handleEdit(emp.id);
            });
            
            employeeContainerEle.append(empCard);
    });

}

async function handleDelete(id) {
    console.log(id);
    try {
      let resp = await fetch(`http://localhost:5000/employees/${id}`, {
        method: "DELETE",
      });
      console.log(resp);
    } catch (error) {
        console.log(error);
        alert("Unable to delete ❌");
    }
}

function handleEdit(id) {
  
    window.location.href = `EditEmployees.html?id=${id}`;
}