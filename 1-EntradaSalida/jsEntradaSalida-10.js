/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	
	let Importe;
	let importeFinal;	
	let descuento;

	Importe = parseInt(document.getElementById("txtIdImporte").value);

	descuento = Importe * 25 / 100;

	importeFinal = Importe - descuento;

	document.getElementById("txtIdResultado").value = descuento




}
