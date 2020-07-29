/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 var vPreLamp= 35
 var vCantLamp
 var vMarcaLamp
 var vIIBB
 var vPreFinal

    vCantLamp = parseInt(document.getElementById("txtIdCantidad").value);
    vMarcaLamp = document.getElementById("Marca").value;

 ////////////////////////////A/////////////////////////////////
        /*Si compra 6 o más  lamparitas bajo 
            consumo tiene un descuento del 50%.*/

if (vCantLamp>=6) {
    vPreFinal = vCantLamp*vPreLamp*0.5;
    document.getElementById("txtIdprecioDescuento").value=vPreFinal;
    }

 ////////////////////////////B/////////////////////////////////
        /*Si compra 5  lamparitas bajo consumo marca 
            "ArgentinaLuz" se hace un descuento del 40 % 
            y si es de otra marca el descuento es del 30%.*/

if ((vCantLamp==5) && (vMarcaLamp=="ArgentinaLuz")) {
    vPreFinal = vCantLamp*vPreLamp*0.6;
    document.getElementById("txtIdprecioDescuento").value=vPreFinal;
    }
    
    else;
    {
        if ((vCantLamp==5) && (vMarcaLamp!="ArgentinaLuz")) {
        vPreFinal = vCantLamp*vPreLamp*0.7;
        document.getElementById("txtIdprecioDescuento").value=vPreFinal.toFixed(2);
        }
    }

 ////////////////////////////C/////////////////////////////////
            /*Si compra 4  lamparitas bajo consumo marca 
                "ArgentinaLuz" o “FelipeLamparas” se hace un 
                descuento del 25 % y si es de otra marca el 
                descuento es del 20%.*/
            
if ((vCantLamp==4) && ((vMarcaLamp=="ArgentinaLuz") || (vMarcaLamp=="FelipeLamparas"))) {
    vPreFinal = vCantLamp*vPreLamp*0.75;
    document.getElementById("txtIdprecioDescuento").value=vPreFinal.toFixed(2);
    }
    
    else;
    {
        if ((vCantLamp==4) && ((vMarcaLamp=="HazIluminacion") || (vMarcaLamp=="Osram") || (vMarcaLamp=="JeLuz"))) {
        vPreFinal = vCantLamp*vPreLamp*0.8;
        document.getElementById("txtIdprecioDescuento").value=vPreFinal.toFixed(2); 
        }   
    }

////////////////////////////D/////////////////////////////////
            /*Si compra 3  lamparitas bajo consumo marca 
                "ArgentinaLuz"  el descuento es del 15%, 
                si es  “FelipeLamparas” se hace un descuento 
                del 10 % y si es de otra marca un 5%.*/

if ((vCantLamp==3) && (vMarcaLamp=="ArgentinaLuz")) {
    vPreFinal = vCantLamp*vPreLamp*0.85;
    document.getElementById("txtIdprecioDescuento").value=vPreFinal;
    }
    
    else;
    {
        if ((vCantLamp==3) && (vMarcaLamp=="FelipeLamparas")) {
            vPreFinal = vCantLamp*vPreLamp*0.9;
            document.getElementById("txtIdprecioDescuento").value=vPreFinal;
            }
        
        if ((vCantLamp==3) && ((vMarcaLamp!="ArgentinaLuz") && (vMarcaLamp!="FelipeLamparas"))) {
            vPreFinal = vCantLamp*vPreLamp*0.95;
            document.getElementById("txtIdprecioDescuento").value = vPreFinal.toFixed(2);           
        }
    }

////////////////////////////E/////////////////////////////////
            /*Si el importe final con descuento suma más 
                de $120  se debe sumar un 10% de ingresos 
                brutos en informar del impuesto con el siguiente mensaje:
                ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.*/

if (vCantLamp>=7) {
    vPreFinal = (vCantLamp*vPreLamp*0.5)*1.1;
    vIIBB = vPreFinal*0.1;
    document.getElementById("txtIdprecioDescuento").value = vPreFinal.toFixed(2);
    alert("Usted pago " + vIIBB.toFixed(2) + " " + "de IIBB");
}
}
