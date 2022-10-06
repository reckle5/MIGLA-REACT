import Item from "./Item";


const ItemList = ({products}) =>{
return(
    <> 

      {products.map((producto) =>(
        <Item key={producto.id} producto={producto}/>
      ))}
   </>
);
}

export default ItemList;