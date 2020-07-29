/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */

function CalcularPrecio() {
    let vPreLamp = 35
    let vCantLamp
    let vMarcaLamp
    let vIIBB
    let vPreFinal

    vCantLamp = parseInt(document.getElementById("txtIdCantidad").value);
    vMarcaLamp = document.getElementById("Marca").value;

    if (vCantLamp > 0) {
        switch (vCantLamp) {
            case 1:
            case 2:
                document.getElementById("txtIdprecioDescuento").value = vCantLamp * vPreLamp;
                break;
            case 3:
                if (vMarcaLamp == "ArgentinaLuz") {
                    document.getElementById("txtIdprecioDescuento").value = vCantLamp * vPreLamp * 0.85;
                }

                else;
                {
                    if (vMarcaLamp == "FelipeLamparas") {
                        document.getElementById("txtIdprecioDescuento").value = vCantLamp * vPreLamp * 0.9;
                    }

                    if ((vMarcaLamp != "ArgentinaLuz") && (vMarcaLamp != "FelipeLamparas")) {
                        document.getElementById("txtIdprecioDescuento").value = (vCantLamp * vPreLamp * 0.95).toFixed(2);
                    }
                }
                break;
            case 4:
                if ((vMarcaLamp == "ArgentinaLuz") || (vMarcaLamp == "FelipeLamparas")) {
                    document.getElementById("txtIdprecioDescuento").value = (vCantLamp * vPreLamp * 0.75).toFixed(2);
                }

                else;
                {
                    if ((vMarcaLamp == "HazIluminacion") || (vMarcaLamp == "Osram") || (vMarcaLamp == "JeLuz")) {
                        document.getElementById("txtIdprecioDescuento").value = (vCantLamp * vPreLamp * 0.8).toFixed(2);
                    }
                }
                break;
            case 5:
                if (vMarcaLamp == "ArgentinaLuz") {
                    document.getElementById("txtIdprecioDescuento").value = vCantLamp * vPreLamp * 0.6;
                }

                else;
                {
                    if (vMarcaLamp != "ArgentinaLuz") {
                        document.getElementById("txtIdprecioDescuento").value = (vCantLamp * vPreLamp * 0.7).toFixed(2);
                    }
                }
            case 6:
                document.getElementById("txtIdprecioDescuento").value = vCantLamp * vPreLamp * 0.5;
                break;
            default:
                if (vCantLamp > 6) {
                    vPreFinal = vCantLamp * vPreLamp * 0.5;
                    if (vPreFinal > 120) {
                        vIIBB = vPreFinal * 0.1;
                        document.getElementById("txtIdprecioDescuento").value = vPreFinal.toFixed(2);
                        alert("Usted pago " + vIIBB.toFixed(2) + " " + "de IIBB");
                    }
                }
                break;

        }

    }
}