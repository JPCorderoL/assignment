let studentData = [];

function editStudent(index) {
  document.getElementById("nombre").value = studentData[index].nombre;
  document.getElementById("apellido").value = studentData[index].apellido;
  document.getElementById("matricula").value = studentData[index].matricula;
  document.getElementById("curso").value = studentData[index].curso;
  document.getElementById("nota").value = studentData[index].nota;

  document.getElementById("addButton").style.display = "none";

  let saveButton = document.getElementById("saveButton");
  saveButton.style.display = "block";
  saveButton.onclick = function() {
    studentData[index].nombre = document.getElementById("nombre").value;
    studentData[index].apellido = document.getElementById("apellido").value;
    studentData[index].matricula = document.getElementById("matricula").value;
    studentData[index].curso = document.getElementById("curso").value;
    studentData[index].nota = document.getElementById("nota").value;

    displayStudentDataInTable();
    document.querySelector("form").reset();
    document.getElementById('saveButton').style.display = 'none';
  // Show the add button
    document.getElementById('addButton').style.display = 'block';
  };
}
  let deleteButton = document.getElementById('deleteButton');
  deleteButton.style.display = 'block';
  deleteButton.onclick = function() {
    studentData.splice(index, 1);
    displayStudentDataInTable();
    document.querySelector('form').reset();

    deleteButton.style.display = 'none';
    document.getElementById('addButton').style.display = 'block';
  };


function addStudent() {
  let newStudent = {
    nombre: document.getElementById('nombre').value,
    apellido: document.getElementById('apellido').value,
    matricula: document.getElementById('matricula').value,
    curso: document.getElementById('curso').value,
    nota: document.getElementById('nota').value
  };
  studentData.push(newStudent);
  displayStudentDataInTable();
  document.querySelector('form').reset();
}

function displayStudentDataInTable() {
  let table = document.getElementById('studentTable');
  table.innerHTML = '<tr><th>Nombre</th><th>Apellido</th><th>Matrícula</th><th>Curso</th><th>Nota</th><th>Acciones</th></tr>';
  studentData.forEach(function(student, index) {
    let row = table.insertRow(-1);
    let nombreCell = row.insertCell(0);
    nombreCell.textContent = student.nombre;
    let apellidoCell = row.insertCell(1);
    apellidoCell.textContent = student.apellido;
    let matriculaCell = row.insertCell(2);
    matriculaCell.textContent = student.matricula;
    let cursoCell = row.insertCell(3);
    cursoCell.textContent = student.curso;
    let notaCell = row.insertCell(4);
    notaCell.textContent = student.nota;
    let actionCell = row.insertCell(5);
    let editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.onclick = function() {
      editStudent(index);
    };
    actionCell.appendChild(editButton);
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.onclick = function() {
      studentData.splice(index, 1);
      displayStudentDataInTable();
    };
    actionCell.appendChild(deleteButton);
    
  });
}

document.getElementById('addButton').addEventListener('click', addStudent);