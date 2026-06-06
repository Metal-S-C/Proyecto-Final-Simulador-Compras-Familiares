let presupuestoActual = 0;

function ingresar(){

    let nombre =
    document.getElementById("nombre").value;

    if(nombre.trim()==""){

        alert("Ingrese su nombre");
        return;
    }

    document.getElementById("inicio").style.display="none";

    document.getElementById("simulador").style.display="block";

    document.getElementById("saludo").innerHTML=
    "Bienvenido(a): " + nombre;
}

function registrarPresupuesto(){

    presupuestoActual =
    Number(document.getElementById("presupuesto").value);

    if(presupuestoActual<=0){

        alert("Ingrese un presupuesto válido");
        return;
    }

    document.getElementById("presupuestoRestante").innerHTML=
    "Presupuesto restante: " +
    presupuestoActual.toFixed(2) + " Bs";

    alert("Presupuesto registrado correctamente");
}

function calcular(){

    let producto =
    document.getElementById("producto").value;

    let precio =
    Number(document.getElementById("precio").value);

    let cantidad =
    Number(document.getElementById("cantidad").value);

    if(
        producto=="" ||
        precio<=0 ||
        cantidad<=0
    ){
        alert("Complete todos los campos");
        return;
    }

    let total =
    precio * cantidad;

    presupuestoActual =
    presupuestoActual - total;

    let porcentaje =
    (total*100)/(presupuestoActual+total);

    let estado="";

    if(presupuestoActual>=0){

        estado =
        "<p class='exito'>✅ El presupuesto alcanza</p>";

    }else{

        estado =
        "<p class='error'>❌ El presupuesto NO alcanza</p>";
    }

    document.getElementById("presupuestoRestante").innerHTML=
    "Presupuesto restante: " +
    presupuestoActual.toFixed(2) +
    " Bs";

    document.getElementById("resultado").innerHTML +=

    `
    <div class="tarjetaCompra">

        <h3>${producto}</h3>

        <p>Precio: ${precio} Bs</p>

        <p>Cantidad: ${cantidad}</p>

        <p>Total Gastado:
        ${total.toFixed(2)} Bs</p>

        <p>Porcentaje utilizado:
        ${porcentaje.toFixed(2)}%</p>

        ${estado}

    </div>
    `;

    document.getElementById("producto").value="";
    document.getElementById("precio").value="";
    document.getElementById("cantidad").value="";
}

function cargarCaso(){
    document.getElementById("presupuesto").value=500;
    registrarPresupuesto();
    document.getElementById("producto").value="Arroz";
    document.getElementById("precio").value=58;
    document.getElementById("cantidad").value=10;
}