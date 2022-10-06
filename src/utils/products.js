
export const products = [
    {id:1, nombre:"Alisa", precio:850,  tipo:"N°14",  cantidad:1, category: "maceta", imagenUrl:"https://e-commerce-migla.vercel.app/imagenes/alisa.png"},
    {id:2, nombre:"White", precio:1200, tipo:"N°16",  cantidad:1, category: "maceta", imagenUrl:"https://e-commerce-migla.vercel.app/imagenes/white.png"},
    {id:3, nombre:"Golden", precio:850, tipo:"N°14",  cantidad:1, category: "maceta", imagenUrl:"https://e-commerce-migla.vercel.app/imagenes/golden.png"},
    {id:4, nombre:"Wooden Like" , precio:450, tipo:"N°8",  cantidad:1, category: "maceta", imagenUrl:"https://e-commerce-migla.vercel.app/imagenes/m6.png"},
    {id:5, nombre:"Daisy", precio:680, tipo:"N°12", cantidad:1, category: "maceta", imagenUrl:"https://e-commerce-migla.vercel.app/imagenes/maceta%20amarrilla.png"},
    {id:6, nombre:"Marga", precio:680, tipo:"N°12",  cantidad:1, category: "maceta", imagenUrl:"https://e-commerce-migla.vercel.app/imagenes/m5.png"},
    {id:7, nombre:"Mate", precio:680, tipo:"N°12",  cantidad:1, category: "maceta", imagenUrl:"https://e-commerce-migla.vercel.app/imagenes/maceta%20mate.png"},
    {id:8, nombre:"Fatima", precio:850, tipo:"N°14",  cantidad:1, category: "maceta", imagenUrl:"https://e-commerce-migla.vercel.app/imagenes/m7.png"},
    {id:9, nombre:"Brains", precio:680, tipo:"N°12", cantidad:1, category: "maceta", imagenUrl:"https://e-commerce-migla.vercel.app/imagenes/macetabrains.png"},
    {id:10, nombre:"Llama", precio:680, tipo:"N°12",  cantidad:1, category: "maceta", imagenUrl:"https://e-commerce-migla.vercel.app/imagenes/llama.png"},
    {id:11, nombre:"Homero", precio:750, tipo:"N°10", cantidad:1, category: "maceta", imagenUrl:"https://e-commerce-migla.vercel.app/imagenes/m4.png"},
    {id:12, nombre:"Perfect", precio:450, tipo:"N°8",  cantidad:1, category: "maceta", imagenUrl:"https://miglahogar.000webhostapp.com/imagenes/m8.png"},
    {id:13,nombre:"Parma",  precio:600, tipo:"Tussor Rayas",  cantidad:1, category: "almohadon", imagenUrl:"https://e-commerce-migla.vercel.app/imagenes/almohadones%20parma.jpeg"},
    {id:14,nombre:"Invierno Pack x3",  precio:2300,  tipo:"Piel Sintetica, Tussor",cantidad:1, category: "almohadon", imagenUrl:"https://e-commerce-migla.vercel.app/imagenes/almo.jpg"},
    {id:15,nombre:"Vikings Pack x3", precio: 2300,  tipo:"Piel Sintetica, Tussor",  cantidad:1, category: "almohadon", imagenUrl:"https://e-commerce-migla.vercel.app/imagenes/pakx3.png"},
    {id:16,nombre:"Tussor Pack x3", precio:1950, tipo:"Tussor Liso",cantidad:1, category: "almohadon", imagenUrl:"https://e-commerce-migla.vercel.app/imagenes/CAR5.jpg"},
    {id:17,nombre:"Tussor silla", precio:440, tipo:"Tussor Liso", cantidad:1, category: "almohadon", imagenUrl:"https://e-commerce-migla.vercel.app/imagenes/almosilla.png"},
    {id:18,nombre:"Grey Pack x2",  precio:2200, tipo:"Piel Sintetica, Tussor Print",  cantidad:1, category: "almohadon", imagenUrl:"https://e-commerce-migla.vercel.app/imagenes/amoha%20gris.jpg"},
    {id:19,nombre:"Tussor",  precio:440,  tipo:"Tussor Liso",  cantidad:1, prod: "almohadon", imagenUrl:"https://e-commerce-migla.vercel.app/imagenes/tussor.png"},
    {id:20,nombre:"Pack Bohemian",  precio:2100, tipo: "Tussor Rayas, Decorado",cantidad:1, category: "almohadon", imagenUrl:"https://e-commerce-migla.vercel.app/imagenes/pack%203%20boho.webp"},
    {id:21,nombre:"Della",  precio:1500, tipo: "Seda",  cantidad:1, category: "almohadon", imagenUrl:"https://e-commerce-migla.vercel.app/imagenes/della.jpg"}
  ]

  export const getProducts = () => {
    const promise = new Promise ((resolve) => {
       setTimeout(() =>{
        return resolve (products);
    },2000)
       }) 
       
    return promise
  }

  export const getProduct = (id) => {
    const promise = new Promise ((resolve) => {
      const result = products.find((producto) => producto.id === parseInt(id));
        setTimeout(() =>{
       })
        return resolve (result);
    })
    return promise
  }


  export const getProductsByType = (categoryId) => {
    const promise = new Promise ((resolve) => {
      const results = products.filter((product) => product.category === categoryId);
      setTimeout(() =>{
        return resolve (results);
    },2000)
       }) 
       
    return promise
  };
