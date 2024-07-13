import deleteIcon from "../assets/delete-icon.svg";

const CartItem = ({id, item, decrease, increase, remove}) => {
   
    return (
        <div>
            <div className="cart-item">
                <button className="delete-icon" onClick={()=>remove(item.id)}><img src={deleteIcon} alt="delete" /></button>
                <div className="grid gap-1 ">
                    <img className="cart-item-img" src={"https://api.timbu.cloud/images/" + item.photos[0].url} alt="" />
                    <div className="increaseQuantity">
                        <div className="fs-100">
                            <p className="mg-bt">{item.productTitle}</p>
                            <p className="mg-bt green-text">In-stock</p>
                            <p className="mg-bt yellow-text">Pro Version</p>
                        </div>
                        <div className="item-quantity fs-300 flex">
                            <button className="yellow-text" onClick={()=>decrease(id)}>-</button>
                            <p>{item.quantity}</p>
                            <button className="yellow-text" onClick={()=>increase(id)}>+</button>
                        </div>
                    </div>
                </div>
                <div className="item-price">
                    <p className="fw-bold fs-200">${item.current_price}</p>
                    <p>Discount Applied <span className="cart-discount">-30%</span></p>
                </div>
            </div>
            
            
        </div>
    )
}

export default CartItem;