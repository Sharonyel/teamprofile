const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
      super(name, id, email)
      this.officeNumber = officeNumber;

    
  }
  getOfficeNumber(){
    return this.officeNumber;
  }
  getRole(){
    return "Manager";
  }

  generateHTML(){
    return `
    <div class=wrapper>
    <div class="card" style="width: 18rem;">
    <div class="card-body" style="background-color: rgb(10, 103, 224); text-align: center;">
      <h5 class="card-title">${this.name}</h5>
      <i class="fas fa-mug-hot"<p class="card-text"> Manager</p></i>
    </div>
    <br>
    <div class="card" style="width: 18rem;">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Id: ${this.id}</li>
      <li class="list-group-item">Email: ${this.email}</li>
      <li class="list-group-item">Office Number: ${this.officeNumber}</li>
    </ul>
</div>
</div>
</div>
`
  }

  

}

module.exports = Manager;


