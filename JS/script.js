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

  //Consumo API Google Maps
  var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.65340581016057, lng: -58.37054181797363},
      zoom: 13
    });

    var marker = new google.maps.Marker({
      position: {lat: -34.65340581016057, lng: -58.37054181797363},
      map: map,
      title: 'Dulces Vaquita'
    });
    console.log(map);
  }
