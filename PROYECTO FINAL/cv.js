
function detalle_experiencia() {
    var vermastexto_exp = document.getElementById("vermastexto_exp");
    var detalle_boton_exp = document.getElementById ("detalle_boton_exp")

    if (vermastexto_exp.style.display === "") {
        vermastexto_exp.style.display = "block";
        detalle_boton_exp.innerHTML = 'Ver Menos';
    } else {
        vermastexto_exp.style.display = "";
        detalle_boton_exp.innerHTML = 'Ver Más';
    }
  }
function detalle_estudios() {
    var vermastexto_est = document.getElementById("vermastexto_est");
    var detalle_boton_est = document.getElementById ("detalle_boton_est")

    if (vermastexto_est.style.display === "") {
        vermastexto_est.style.display = "block";
        detalle_boton_est.innerHTML = 'Ver Menos';
    } else {
        vermastexto_est.style.display = "";
        detalle_boton_est.innerHTML = 'Ver Más';
    }
  }
function detalle_idiomas() {
    var vermastexto_idi = document.getElementById("vermastexto_idi");
    var detalle_boton_idi = document.getElementById ("detalle_boton_idi")

    if (vermastexto_idi.style.display === "") {
        vermastexto_idi.style.display = "block";
        detalle_boton_idi.innerHTML = 'Ver Menos';
    } else {
        vermastexto_idi.style.display = "";
        detalle_boton_idi.innerHTML = 'Ver Más';
    }
  }
function detalle_referencia() {
    var vermastexto_ref = document.getElementById("vermastexto_ref");
    var detalle_boton_ref = document.getElementById ("detalle_boton_ref")

    if (vermastexto_ref.style.display === "") {
        vermastexto_ref.style.display = "block";
        detalle_boton_ref.innerHTML = 'Ver Menos';
    } else {
        vermastexto_ref.style.display = "";
        detalle_boton_ref.innerHTML = 'Ver Más';
    }
  }
