import ItemCount from "./ItemCount"

function ItemDetail({item}) {
   return(
    <div>
    <div className="imgDetail">
    <img src={item?.img} alt="" />
    </div>,
    <div>
    <h2 className="detail">{item?.name}</h2>
    <p className="detail">{item?.description}</p>
    <p className="detail">{item?.price}</p>
    <ItemCount detail={item} />
    </div>
    </div>
    )
}
export default ItemDetail 