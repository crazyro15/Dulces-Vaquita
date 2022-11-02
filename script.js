$("#boton").on("click", function(){
    //Verificacion de nombre
    if($("#nombre").val() == ""){
      $("#error_nombre").show();
      $("#nombre").addClass("is-invalid");
    }
  
    //Verificacion de telefono
      if($("#telefono").val() == ""){
      $("#error_telefono").show();
      $("#telefono").addClass("is-invalid");
    }

    //Verificacion de consulta
    if($("#consulta").val() == ""){
        $("#error_consulta").show();
        $("#consulta").addClass("is-invalid");
      }
    
    //Si todos los campos se completan
    if(($("#nombre").val() != "") & ($("#mail").val() != "") & ($("#consulta").val() != "")){
      alert('datos enviados!');
      location.reload();
    }
  })