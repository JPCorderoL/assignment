let studentData = [];

    function addStudent() {
      let nombre = document.getElementById('nombre').value;
      let apellido = document.getElementById('apellido').value;
      let matricula = document.getElementById('matricula').value;
      let curso = document.getElementById('curso').value;
      let nota = document.getElementById('nota').value;

      let student = {nombre, apellido, matricula, curso, nota};
      studentData.push(student);
      displayStudentDataInTable();
    }

    function displayStudentDataInTable() {
      let table = document.getElementById('studentTable');
      table.innerHTML = '<tr><th>Nombre</th><th>Apellido</th><th>Matricula</th><th>Curso</th><th>Nota</th><th>Actions</th></tr>'; // Clear the table
      studentData.forEach((student, index) => {
        let row = table.insertRow(-1);
        let nombreCell = row.insertCell(0);
        let apellidoCell = row.insertCell(1);
        let matriculaCell = row.insertCell(2);
        let cursoCell = row.insertCell(3);
        let notaCell = row.insertCell(4);
        let actionsCell = row.insertCell(5);
        nombreCell.textContent = student.nombre;
        apellidoCell.textContent = student.apellido;
        matriculaCell.textContent = student.matricula;
        cursoCell.textContent = student.curso;
        notaCell.textContent = student.nota;
        actionsCell.innerHTML = '<button onclick="editStudent(' + index + ')">Edit</button> <button onclick="deleteStudent(' + index + ')">Delete</button>';
      });
    }

    function editStudent(index) {
      let student = studentData[index];
      document.getElementById('nombre').value = student.nombre;
      document.getElementById('apellido').value = student.apellido;
      document.getElementById('matricula').value = student.matricula;
      document.getElementById('curso').value = student.curso;
      document.getElementById('nota').value = student.nota;

      // Remove the edited student from the array
      studentData.splice(index, 1);
      displayStudentDataInTable();
    }

    function deleteStudent(index) {
      studentData.splice(index, 1);
      displayStudentDataInTable();
    }