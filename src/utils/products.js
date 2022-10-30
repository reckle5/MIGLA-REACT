import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";

const products = [
  { nombre: "Maceta White", precio: 1200, tipo: "N°16", stock: 5, category: "maceta", imagenUrl: "https://e-commerce-migla.vercel.app/imagenes/white.png" },
  { nombre: "Maceta Golden", precio: 850, tipo: "N°14", stock: 5, category: "maceta", imagenUrl: "https://e-commerce-migla.vercel.app/imagenes/golden.png" },
  { nombre: "Maceta Wooden Like", precio: 450, tipo: "N°8", stock: 5, category: "maceta", imagenUrl: "https://e-commerce-migla.vercel.app/imagenes/m6.png" },
  { nombre: "Maceta Daisy", precio: 680, tipo: "N°12", stock: 5, category: "maceta", imagenUrl: "https://e-commerce-migla.vercel.app/imagenes/maceta%20amarrilla.png" },
  { nombre: "Maceta Marga", precio: 680, tipo: "N°12", stock: 5, category: "maceta", imagenUrl: "https://e-commerce-migla.vercel.app/imagenes/m5.png" },
  { nombre: "Maceta Mate", precio: 680, tipo: "N°12", stock: 5, category: "maceta", imagenUrl: "https://e-commerce-migla.vercel.app/imagenes/maceta%20mate.png" },
  { nombre: "Maceta Fatima", precio: 850, tipo: "N°14", stock: 5, category: "maceta", imagenUrl: "https://e-commerce-migla.vercel.app/imagenes/m7.png" },
  { nombre: "Maceta Brains", precio: 680, tipo: "N°12", stock: 5, category: "maceta", imagenUrl: "https://e-commerce-migla.vercel.app/imagenes/macetabrains.png" },
  { nombre: "Maceta Llama", precio: 680, tipo: "N°12", stock: 5, category: "maceta", imagenUrl: "https://e-commerce-migla.vercel.app/imagenes/llama.png" },
  { nombre: "Maceta Homero", precio: 750, tipo: "N°10", stock: 5, category: "maceta", imagenUrl: "https://e-commerce-migla.vercel.app/imagenes/m4.png" },
  { nombre: "Maceta Perfect", precio: 450, tipo: "N°8", stock: 5, category: "maceta", imagenUrl: "https://miglahogar.000webhostapp.com/imagenes/m8.png" },
  { nombre: "Almohadon Parma", precio: 600, tipo: "Tussor Rayas", stock: 5, category: "almohadon", imagenUrl: "https://e-commerce-migla.vercel.app/imagenes/almohadones%20parma.jpeg" },
  { nombre: "Almohadon Invierno Pack x3", precio: 2300, tipo: "Piel Sintetica, Tussor", stock: 5, category: "almohadon", imagenUrl: "https://e-commerce-migla.vercel.app/imagenes/almo.jpg" },
  { nombre: "Almohadon Vikings Pack x3", precio: 2300, tipo: "Piel Sintetica, Tussor", stock: 5, category: "almohadon", imagenUrl: "https://e-commerce-migla.vercel.app/imagenes/pakx3.png" },
  { nombre: "Almohadon Tussor Pack x3", precio: 1950, tipo: "Tussor Liso", stock: 5, category: "almohadon", imagenUrl: "https://e-commerce-migla.vercel.app/imagenes/CAR5.jpg" },
  { nombre: "Almohadon Tussor silla", precio: 440, tipo: "Tussor Liso", stock: 5, category: "almohadon", imagenUrl: "https://e-commerce-migla.vercel.app/imagenes/almosilla.png" },
  { nombre: "Almohadon Grey Pack x2", precio: 2200, tipo: "Piel Sintetica, Tussor Print", stock: 5, category: "almohadon", imagenUrl: "https://e-commerce-migla.vercel.app/imagenes/amoha%20gris.jpg" },
  { nombre: "Almohadon Tussor", precio: 440, tipo: "Tussor Liso", stock: 5, prod: "almohadon", imagenUrl: "https://e-commerce-migla.vercel.app/imagenes/tussor.png" },
  { nombre: "Almohadon Pack Bohemian", precio: 2100, tipo: "Tussor Rayas, Decorado", stock: 5, category: "almohadon", imagenUrl: "https://e-commerce-migla.vercel.app/imagenes/pack%203%20boho.webp" },
  { nombre: "Almohadon Della", precio: 1500, tipo: "Seda", stock: 5, category: "almohadon", imagenUrl: "https://e-commerce-migla.vercel.app/imagenes/della.jpg" }
]

export const createAllProducts = async () => {
  try {
    const database = getFirestore();

    const collectionReference = collection(database, 'items');
    for (let i = 0; i < products.length; i++) {

      const snapshot = await addDoc(collectionReference, products[i]);
    }
  } catch (error) {
    console.warn(error)
  }
}

export const getProducts = () => {

  const dataBase = getFirestore();

  const collectionReference = collection(dataBase, "items");
  return getDocs(collectionReference)
    .then((snapshot) => {
      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))
      return list

    })
    .catch(error => console.warn(error))

};

export const getProduct = (id) => {

  const dataBase = getFirestore();

  const itemReference = doc(dataBase, "items", id);
  return getDoc(itemReference)
    .then(snapshot => {

      if (snapshot.exists()) {
        
        const item = {
          id: snapshot.id,
          ...snapshot.data()
        };
        return item;
      }
    })
};


export const getProductsByType = (categoryId) => {

  const dataBase = getFirestore();

  const collectionReference = collection(dataBase, "items")

  const collectionQuery = query(collectionReference, where("category", "==", categoryId))

  return getDocs(collectionQuery)
    .then(snapshot => {
      if (snapshot.size === 0)
        return [];

      const list = snapshot
        .docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
      return list;
    })
    .catch(error => console.warn(error))
};



