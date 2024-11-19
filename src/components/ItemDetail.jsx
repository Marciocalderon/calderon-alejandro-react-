import ItemCount from "./ItemCount"

function ItemDetail({item}) {
   return(
   <div>
    <img src={item?.thumbnail} alt="" />
    <h2>{item?.title}</h2>
    <p>{item?.description}</p>
    <p>{item?.price}</p>
    <ItemCount/>
    </div>
    )
}
export default ItemDetail 