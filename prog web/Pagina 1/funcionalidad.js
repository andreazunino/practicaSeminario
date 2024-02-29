function irPagina1(){
    var pagina1 = "conceptos.html";
        
        // Redirige a la página
        window.location.href = pagina1;
}

function irHome(){
    var home = "probando.html"

    window.location.href = home;
}


// Función para mostrar el texto correspondiente al elemento de la lista seleccionado
function mostrarTexto(id) {
    console.log('Haciendo clic en:', id);

    var textoMostrado = document.getElementById("textoMostrado");
    textoMostrado.style.display = "block"; // Muestra el contenedor de texto

    switch (id) {
        case 'produccion':
            textoMostrado.innerHTML = "En la producción agrícola se asume que hay factores fijos -tierra, capital, trabajo-; factores variables -energía eléctrica, diésel, refacciones, semillas, fertilizantes- y otros factores -tecnología, apoyos gubernamentales, conocimiento-, que en su conjunto influyen y determinan el valor de la producción.";
            break;
        case 'planeamiento':
            textoMostrado.innerHTML = "La planeación es la función por la que se forja anticipadamente un curso de acción para moldear acontecimientos proyectados. Es decir, es un proceso que permite determinar de antemano lo que debe hacerse e implica la orientación a objetivos y la visualización de alternativas. Resolver la incertidumbre del futuro y encontrar cómo ejercer control sobre esos eventos desconocidos por venir son procesos mentales característicos de la raza humana. En este sentido, la planeación es un instrumento que, bien empleado, puede proveer certezas, generar confianza y proporcionar las bases para fomentar el éxito de proyectos de cualquier orden: personales, grupales, profesionales, organizacionales, empresariales, regionales, nacionales o mundiales.";
            break;
        case 'costos':
            textoMostrado.innerHTML = "Los costos variables son aquellos que aumentan o disminuyen en forma directamente proporcional al volumen de producción o a la prestación de servicios. Por ejemplo, la suplementación en un feed lot se incrementa al engordar más cabezas o al vender hacienda con mayor peso. Costo variable por producto: un costo variable por producto es aquel que se incrementa con una unidad adicional de producto generado. Por ejemplo, en el negocio de criar y engordar cerdos: el costo de obtener un capón adicional por cerda. Costo variable por escala: un costo variable por escala es aquel que, manteniendo el nivel de productividad, se incrementa al aumentar la escala del negocio. Por ejemplo, en la producción de porcinos correspondería a los costos derivados de la incorporación de mayor cantidad de cerdas, generando la misma cantidad de capones por cerda. Los costos fijos son aquellos que se mantienen constantes, independientemente del nivel de actividad desarrollado. Por ejemplo, en ganadería, el personal necesario para manejar un rodeo de 400 o 500 cabezas es el mismo. Dentro de una determinada escala, los costos fijos pueden ser diluidos, con un mayor nivel de producción. Este sistema de costeo resulta de gran utilidad debido a que permite calcular las contribuciones marginales por producto adicional o por escala. Los costos directos son los costos asignables a una determinada unidad de negocios o a una actividad específica, por ejemplo la cosecha de trigo o la sanidad en la cría. Si existe la actividad, existe el costo; si la actividad no se realiza, el costo tampoco cuenta. Los costos indirectos son aquellos que no son asignables a una unidad de negocio o actividad específica. Por ejemplo, los honorarios contables.";
            break;
        case 'inversion':
            textoMostrado.innerHTML = "Se trata de dos indicadores financieros muy utilizados en el cálculo de la rentabilidad y viabilidad de un proyecto y se basan en los ingresos menos gastos netos que tiene la caja de una empresa. El VAN es el Valor Actual Neto y se calcula con los pagos que son necesarios para iniciar un proyecto, además de con los supuestos ingresos que se generarán en un futuro. El VAN determina si la inversión es rentable o no, por lo que debe usarse en la fase inicial de un proyecto, para tener una estimación de sí una inversión es viable o no. Dicho de otra manera, el VAN es la oportunidad con la que cuenta una empresa para medir y evaluar sus inversiones a mediano o largo plazo.El TIR es la Tasa Interna de Retorno y muestra el tipo de interés necesario para que el VAN sea igual a 0. Por lo tanto, el TIR es la tasa de retorno de la inversión realizada, indicando el porcentaje de beneficio o pérdida que se obtiene en una inversión. Este indicador determina la rentabilidad y la viabilidad de un proyecto, en este caso usando las entradas y salidas de caja en neto y el total de la inversión que se ha realizado.";
            break;
        case 'presupuesto':
            textoMostrado.innerHTML = "El presupuesto financiero es un plan detallado y personalizado de inversiones y gastos. El presupuesto económico hace referencia a las cuentas del Estado. Ambos son útiles pero diferentes en alcance y propósito.";
            break;
        case 'mb':
            textoMostrado.innerHTML = "¿Qué es el margen bruto agrícola? Es la diferencia entre los ingresos directos de una actividad y los costos directos de la misma. ¿Qué es y para qué sirve? Es una herramienta de análisis económico que permite evaluar las distintas actividades productivas, compararlas y calcular el retorno real o estimado de la misma.";
            break;
        case 'planificacion':
            textoMostrado.innerHTML = "La planificación forrajera es una herramienta que se utiliza para proyectar, en espacio y tiempo, la producción y utilización de los recursos forrajeros, realizando el balance entre la oferta forrajera y la demanda ganadera del sistema ";
            break;
    }
}
