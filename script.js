$("#boton").on("click", function(){
    //Verificacion de nombre
    if($("#nombre").val() == ""){
      $("#error_nombre").show();
      $("#nombre").addClass("is-invalid");
    }
  
    //Verificacion de mail
    if($("#mail").val().indexOf('@', 0) == -1 || $("#email").val().indexOf('.', 0) == -1){
      $("#error_mail").show();
      $("#mail").addClass("is-invalid");
    }

    //Verificacion de consulta
    if($("#consulta").val() == ""){
        $("#error_consulta").show();
        $("#consulta").addClass("is-invalid");
      }
    
    
  })