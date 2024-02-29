function recomendar(genero) {
    let edad=document.getElementById("edad").value;
    let recomendacion=document.getElementById("recomendacion");

    switch (genero){
        case 'comedia':
            if (edad<18){
                recomendacion.textContent= "Elemental (titulada Elementos en Hispanoamérica) es una película de ciencia ficción fantástica y comedia romántica animada por computadora estadounidense producida por Walt Disney Pictures y Pixar Animation Studios y distribuida por Walt Disney Studios Motion Pictures. Dirigida por Peter Sohn y producida por Denise Ream a partir de un guion de Brenda Hsueh, cuenta con Leah Lewis y Mamoudou Athie en los papeles principales de voz. La película describe el vínculo entre Ember (Lewis), un elemento fuego, y Wade (Athie), un elemento agua, que ambos no pueden tocarse; pero descubren cuánto tienen en común. Elemental se inspira en la juventud de Sohn, que creció como hijo de inmigrantes en la ciudad de Nueva York en la década de 1970, destacando la diversidad cultural y étnica distintiva de la ciudad."
            }else{
                recomendacion.textContent= "No Hard Feelings. La película está ambientada en Montauk, Nueva York, donde Maddie (Jennifer Lawrence), una conductora de Uber que se enfrenta a la bancarrota después de que embargan su automóvil, por lo que se ve obligada a aceptar un trabajo bastante inusual publicado en el sitio web de anuncios clasificados, Craigslist. Sus nuevos empleadores son padres que han notado que su hijo adolescente socialmente despistado pero académicamente dotado no está interesado en las interacciones humanas, salir con mujeres o tener relaciones sexuales. A cambio de un Buick Regal, acepta convertirse en la «novia» de su hijo, «salir con él hasta sacarle los sesos» y ayudarlo a incorporarse a la vida adulta"
            }
            break;
        case 'drama':
            if (edad<18){
                recomendacion.textContent= "No tenemos recomendaciones."
            }else{
                recomendacion.textContent= "Black Swan.Nominada a cinco premios de la Academia y ganadora de un Globo de Oro por la actuación de su protagonista, narra la historia de Nina (Natalie Portman, 'Star Wars', 'Closer'), una bailarina de Nueva York cuya vida está absorbida por sus ambiciones y su profesión. Cuando el director artístico Thomas Leroy (Vincent Cassel, 'Irreversible', 'Shrek') sustituye a la bailarina principal Beth Macintyre (Winona Ryder, 'Eduardo Manostijeras', 'Drácula') del montaje de 'El lago de los cisnes', Nina ve una oportunidad para convertirse en una estrella. Pero Leroy también se fija en la misteriosa Lily (Mila Kunis, 'Aquellos maravillosos 70', 'Paso de ti') para el papel principal, una bailarina que debe representar la pureza del Cisne Blanco a la vez que la sensualidad del Cisne Negro. Thomas cree que Nina se mueve con soltura en la piel del primero, pero piensa que le falta erotismo para encarnar al segundo. La rivalidad y las presiones de su madre Erica (Barbara Hershey, 'Un día de furia'), antigua bailarina ya retirada, harán que Nina mantenga una relación casi enfermiza con Lily y saque lo peor de sí misma conectando con su lado destructivo."
            }
            break;
        case 'fantasia':
            if (edad<18){
                recomendacion.textContent= "Harry Potter. La serie cinematográfica de Harry Potter comprende ocho películas basadas en Harry Potter, una serie de siete novelas juveniles escritas por la autora británica J. K. Rowling y protagonizadas por el mago ficticio del mismo nombre. Se trata de películas de cine fantástico, todas basadas en las novelas de la saga y todas estrenadas en el decenio comprendido entre 2001 y 2011.1​ Se realizó una película por cada libro de la saga a excepción del último libro, cuya adaptación cinematográfica ocupó dos películas distintas."
            }else{
                recomendacion.textContent= "Glass. Las razones por las que la crítica americana azotaron la conclusión de la trilogía del cómic de Shyamalan se nos escapan, pero lo cierto es que, más allá de que no es una película de David Dunn, como podrían esperar los fans de 'El protegido' (Unbreakable, 2000), da un verdadero sentido a aquella, mejorándola como a 'Múltiple' (Split, 2016) que dejaba flecos sueltos que aquí se cierran en una performance final minuciosamente orquestada y llena de decisiones valientes."
            }
            break;
         case 'romance':
            if (edad<18){
                recomendacion.textContent= "“La Sirenita” reimagina la amada historia de Ariel, una curiosa sirena que anhela experimentar la vida en tierra firme y que visita la superficie, contra los deseos de su padre. Ariel se halla en un inesperado viaje de autodescubrimiento en el que descubre a un príncipe, una bruja marina y un mundo increíble."
            }else{
                recomendacion.textContent= "La forma del agua. Estados Unidos, alrededor de 1963. Es la Guerra Fría y la carrera militar y espacial está en su punto más álgido. La solitaria Elisa (Sally Hawkins) es una empleada de la limpieza que trabaja en un oculto laboratorio dentro de unas instalaciones de alta seguridad del gobierno. Atrapada en una vida llena de silencio y aislamiento, su vida cambia por completo al descubrir junto con su compañera Zelda (Octavia Spencer) un experimento clasificado como secreto. Se trata de un ser enigmático: un hombre-pez único, una auténtica anomalía natural, que vive encerrado y es víctima de diversos experimentos. Elisa empieza entonces a sentir simpatía por este extraño ser y se establece una fuerte conexión entre ambos. Pero el mundo real no es un lugar seguro para un hombre de estas características."
            }
            break;
    }
    
}