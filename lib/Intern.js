const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
      super(name, id, email)
      this.school = school;

    
  }
  getSchool(){
    return this.school;

  }
  getRole(){
    return "Intern";

  }
  generateHTML(){
    return `
    <div class=wrapper>
    <div class="card" style="width: 18rem;">
    <div class="card-body" style="background-color: rgb(10, 103, 224); text-align: center;">
      <h5 class="card-title">${this.name}</h5>
      <i class="fas fa-user-graduate"<p class="card-text"> Intern</p></i>
    </div>
    <br>
    <div class="card" style="width: 18rem;">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Id: ${this.id}</li>
      <li class="list-group-item">Email: ${this.email}</li>
      <li class="list-group-item">School: ${this.school}</li>
    </ul>
</div>
</div>
</div>
`
  }


}

module.exports = Intern;


