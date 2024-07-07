const productos = [
    {
        id: "1",
        nombre:"Gibson Les Paul",
        descripción:"La Gibson Les Paul Standard es una guitarra eléctrica icónica que rinde homenaje a la Época Dorada de Gibson. Tiene un cuerpo de caoba sólido con una tapa de arce y un mástil de caoba con perfil SlimTaper estilo años 60. El diapasón es de palisandro con incrustaciones trapezoidales. Equipada con pastillas Burstbucker 61, proporciona un sonido potente y clásico. Otros detalles incluyen un puente tune-o-matic ABR-1, clavijeros Grover Rotomatic y controles de volumen y tono personalizados​",
        stock: 5,
        categoria: "Instrumentos",
        imagen: "../../src/Images/Productos/1.png",
        precio: 2600
    },
    {
        id: "2",
        nombre:"Fender Stratocaster",
        descripción:"La Fender Stratocaster es una guitarra eléctrica icónica diseñada por Leo Fender y lanzada en 1954. Reconocida por su versatilidad tonal y diseño elegante, la Stratocaster cuenta con dos cuernos que destacan las recortes del cuerpo de la guitarra, mejorando el acceso a los trastes superiores y reduciendo su peso. Una de sus innovaciones más notables es el sistema de vibrato Synchronized Tremolo, que permite al guitarrista modificar el tono ajustando la tensión de las cuerdas.",
        stock: 10,
        categoria: "Instrumentos",
        imagen: "../../src/Images/Productos/2.png",
        precio: 1300
    },
    {
        id: "3",
        nombre:"Squier Stratocaster",
        descripción:"La Squier Stratocaster es una guitarra eléctrica fabricada por Squier, que es una subsidiaria de Fender. Está basada en el icónico diseño de la Fender Stratocaster, conocida por su cuerpo contorneado de doble cutaway, tres pastillas de bobina simple que ofrecen un sonido versátil, y un puente flotante que permite efectos de vibrato. Las Squier Stratocaster suelen ser más accesibles en términos de precio, pero mantienen muchas de las características tonales y de diseño que han hecho famosa a la Stratocaster de Fender. Son populares entre músicos principiantes y también entre profesionales que buscan una opción de calidad a un costo más bajo.",
        stock: 50,
        categoria: "Instrumentos",
        imagen: "../../src/Images/Productos/3.png",
        precio: 200
    },
    {
        id: "4",
        nombre:"Fender Mustang 2",
        descripción:"El Fender Mustang 2 es un amplificador de guitarra eléctrica versátil y potente de la serie Mustang de Fender. Con aproximadamente 40 watts de potencia, ofrece modelado digital de amplificadores clásicos de Fender y otros fabricantes, junto con efectos integrados como reverb y delay. Es fácil de usar, con controles intuitivos y conectividad USB para edición detallada a través del software Fender Fuse. Ideal para prácticas y actuaciones en vivo pequeñas.",
        stock: 20,
        categoria: "Audio",
        imagen: "../../src/Images/Productos/4.png",
        precio: 220
    },
    {
        id: "5",
        nombre:"Monitor KRK Rokit 8",
        descripción:"El KRK Rokit 8 es un monitor de estudio activo que destaca por su calidad de sonido precisa y potencia. Con un woofer de 8 pulgadas y un tweeter de cúpula de 1 pulgada, ofrece un sonido claro y balanceado, ideal para monitoreo detallado en entornos de estudio. Incorpora tecnología de ajuste de habitación para adaptarse mejor al entorno acústico. Su diseño robusto y controles de ajuste permiten a los usuarios personalizar el sonido según sus preferencias y necesidades específicas de mezcla. Es una opción popular entre productores y músicos que buscan un monitor confiable y de alta fidelidad para su trabajo creativo.",
        stock: 20,
        categoria: "Audio",
        imagen: "../../src/Images/Productos/5.png",
        precio: 600
    },
    {
        id: "6",
        nombre:"Monitores JBL 306p",
        descripción:"El JBL 306P MkII es un monitor de estudio activo con un diseño compacto pero potente. Equipado con un woofer de 6.5 pulgadas y un tweeter de cúpula blanda de 1 pulgada, proporciona un sonido equilibrado y claro con una respuesta de frecuencia extendida. Los controles de ajuste en la parte posterior permiten adaptar el sonido según el entorno de escucha, optimizando la experiencia de mezcla y producción en estudios domésticos y profesionales. Conectividad flexible que incluye entradas XLR y TRS, y la tecnología Image Control Waveguide de JBL, que mejora la imagen estéreo y la claridad del sonido. Es una opción popular entre los profesionales del audio que buscan calidad y precisión en sus proyectos musicales y de producción.",
        stock: 10,
        categoria: "Audio",
        imagen: "../../src/Images/Productos/6.png",
        precio: 500
    },
    {
        id: "7",
        nombre:"Cable de Guitarra Fender 6m",
        descripción:"El cable de guitarra Fender es conocido por su calidad y durabilidad. Fabricado con materiales de alta calidad, como cobre libre de oxígeno para una transmisión de señal limpia y sin interferencias. ",
        stock: 20,
        categoria: "Accesorios",
        imagen: "../../src/Images/Productos/7.png",
        precio: 50
    },
    {
        id: "8",
        nombre:"Capotraste",
        descripción:"Un capotraste es un dispositivo metálico o de plástico que se coloca sobre el mástil de la guitarra, presionando las cuerdas contra los trastes. Esto permite elevar la afinación de todas las cuerdas al mismo tiempo, facilitando tocar en tonos más altos sin cambiar la digitación de los acordes. Los capotrastes vienen en diferentes diseños y materiales, algunos con almohadillas de goma para proteger el mástil y asegurar una sujeción firme. Son herramientas versátiles y prácticas para músicos que necesitan adaptar rápidamente la tonalidad de su instrumento durante presentaciones en vivo, grabaciones o sesiones de práctica.",
        stock: 20,
        categoria: "Accesorios",
        imagen: "../../src/Images/Productos/8.png",
        precio: 20
    },
    {
        id: "9",
        nombre:"Estuche Epiphone",
        descripción:"Los estuches de tela Epiphone están diseñados para ofrecer una protección ligera y portátil para guitarras. Fabricados con materiales duraderos y resistentes al agua, ofrecen una capa de amortiguación contra golpes y rasguños mientras se transporta la guitarra.",
        stock: 10,
        categoria: "Accesorios",
        imagen: "../../src/Images/Productos/9.png",
        precio: 60
    },
]

const obtenerProductos = () => {
    return new Promise( (resolve, reject)=> {
        //Simulamos retraso de red
        setTimeout(()=>{
            resolve(productos)
        },1000)
    })
}

export { obtenerProductos }