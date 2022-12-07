$(document).ready(function(){
    $('.registrarEstudiante').click(function() {
        var nameStudent = $('.nameStudent').val();
        var edadStudent = $('.edad').val();
        let student ={}
        student.name = nameStudent
        student.age = edadStudent
        console.log(student)
        $.post('/api/newStudent',{student},function(data){
          
        })
    })

    $('.registrarClase').click(function() {
        var nameClass = $('.nameClass').val();
        console.log(nameClass)
        var order = $('.order').val();
        console.log(order)
        var numStudents = $('.numberstudents').val();
        console.log(numStudents)
    })
  })
