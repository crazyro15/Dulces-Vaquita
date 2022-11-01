$("#boton").on("click", function(){
    //Verificacion de nombre
    if($("#nombre").val() == ""){
      $("#error_nombre").show();
      $("#nombre").addClass("is-invalid");
    }
  
    //Verificacion de telefono
    //if($("#mail").val().indexOf('@', 0) == -1 || $("#email").val().indexOf('.', 0) == -1){
      if($("#telefono").val() == ""){
      $("#error_telefono").show();
      $("#telefono").addClass("is-invalid");
    }

    //Verificacion de consulta
    if($("#consulta").val() == ""){
        $("#error_consulta").show();
        $("#consulta").addClass("is-invalid");
      }
    
    if(($("#nombre").val() != "") & ($("#mail").val() != "") & ($("#consulta").val() != "")){
      alert('datos enviados!');
      location.reload();
    }
  })