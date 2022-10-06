import ItemCount from "../ItemCount/ItemCount"
import Item from "./Item";

const ItemDetail = ({producto}) => {
    
    return(
        <>
        <Item producto={producto}></Item>
        <ItemCount/>
        </>
       
    );
}

export default ItemDetail;