import "../css/card.css"
import { useSelector, useDispatch } from "react-redux"
import { remove } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

export const Card = () => {
  const product = useSelector(state => state.cart);
  // console.log(product);
  // console.log(product.length);

  const dispatch = useDispatch();
  const removeProduct = (id) => {
    toast.success('Product Remove To Cart Successfully.', {
      style: {
        padding: '16px',
        backgroundColor:"black",
        color:"white",
      }
    });
    dispatch(remove(id));
  };

  const navigate = useNavigate()
  const gotoHome = () => {
    navigate("/")
  }

  const navigate1 = useNavigate()
  const paymentPage = () => {
    localStorage.setItem("total", JSON.stringify({total}));
    navigate1("/payments")
  }

  // calculate the total value in cart
  const totalPrice = product.reduce((accumulator, product) => accumulator + (product.price), 0);
  // console.log(totalPrice);

  // calculate the product discount value
  const discountRate = product.reduce((accumulator, product) => accumulator + (product.discountPercentage), 0);
  const valueDiscount = Math.round(discountRate);
  // console.log("this is discou",valueDiscount);

  // const discountValue=totalPrice-(totalPrice*valueDiscount/100);
  // console.log("=>",discountValue);
  // const answer=totalPrice-discountValue;
  // console.log(answer);

  // const totalSaving=totalPrice-(totalPrice*discountRate/100);
  let real = 0;
  let total = 0;
  return (
    <>{product.length == 0 ?
      <div style={{
        backgroundColor: "#f1f3f6",
        width: "100%",
        paddingLeft: "12rem",
        paddingRight: "12rem",
        paddingTop: "4rem"
      }}>
        <div style={{
          backgroundColor: "white",
          height: "70vh",
          padding: "5rem",
          display: "flex",
          justifyContent: "center"
        }}>
          <div style={{
            justifyContent: "center",
            textAlign: "center"
          }}>
            <img src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt="image" height={"200vh"} />
            <p style={{ fontSize: "1.5rem", padding: "1rem" }}>Your cart is empty!</p>
            <p>Add items to it now.</p>
            <button style={{
              fontSize: "1rem",
              margin: "1rem",
              width: "12vw",
              height: "2.5rem",
              backgroundColor: "#2874f0",
              color: "white",
              border: "none",
              outline: "none",
              borderRadius: "0.1rem",
              cursor: "pointer"
            }} className="shopNow" onClick={gotoHome}>Shop now</button>
          </div>

        </div>
      </div>
      :
      <div style={{ padding: "2rem", marginBottom: "1rem", backgroundColor: "#f1f3f6", width: "100%", display: "flex", justifyContent: "center" }}>
        <div className="leftDiv" style={{ backgroundColor: "white", Width: "60%", height: "auto", padding: "1rem" }}>
          <h2 style={{ color: "#2874f0", textAlign: "center" }}>Product List</h2>
          {product.map(item => {
            const discountpercent = Math.round(item.discountPercentage)
            const price = item.price
            const discount = Math.round(price - (price * discountpercent / 100));
            total = total + discount;
            real = real + discount;
            return (
              <>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <div style={{ marginRight: "1rem" }}>
                    <img src={item.thumbnail} alt="image" width={"300vw"} height={"300vh"} style={{ cursor: "pointer", }} />
                  </div>
                  <div style={{ width: "40vw" }}>
                    <p style={{ cursor: "pointer", fontSize: "1rem", fontWeight: "500" }} className="card1">{item.description}</p>
                    <p style={{ marginTop: "1rem", marginBottom: "0.5rem" }}>{item.brand}</p>
                    <p>
                      <span style={{ marginRight: "1rem", color: "#4e4e4e" }}>
                        <strike>₹{item.price}</strike>
                      </span>
                      <span style={{ marginRight: "1rem", fontSize: "1.8rem" }}>
                        ₹{discount}
                      </span>
                      <span style={{ color: "#388e3c", fontSize: "1.2rem" }}>
                        <b>{discountpercent}% Off</b>
                      </span>
                    </p>
                    <p style={{ fontWeight: "500", fontSize: "1.5rem", cursor: "pointer" }} onClick={() => removeProduct(item.id)} className="card2">Remove</p>
                    {/* <p className="card10"><button>-</button><span>{2}</span><button>+</button></p> */}
                  </div>
                </div>
                <hr />
                <br />
              </>
            )
          })}
          <div className="stickey">
            <button className="stickey2" onClick={paymentPage}>PLACE ORDER</button>
            <br />
          </div>
          <br />
        </div>
        <div className="rightDiv" style={{ backgroundColor: "white", marginTop: "2rem", margin: "1rem", Width: "40%", height: "40%" }}>
          <div style={{ width: "20vw", display: "flex", flexDirection: "column", padding: "0.5rem" }} >
            <span style={{
              fontSize: "1.2rem",
              fontFamily: "sans-serif",
              padding: "0.5rem",
              color: "#aaa5a5",
              fontWeight: "500"
            }}>PRICE DETAILS</span>
            <hr />
            <div className="card3">
              <span>Price ({product.length} items)</span>
              <span>₹{totalPrice}</span>
            </div>
            <div className="card3">
              <span>Discount</span>
              <span style={{ color: "#388e3c", fontFamily: "Roboto,Arial,sans-serif" }}>-₹{real = totalPrice - real}</span>
            </div>
            <div className="card3">
              <span>Delivery Charges</span>
              <span style={{ color: "#388e3c", fontFamily: "Roboto,Arial,sans-serif" }}>Free</span>
            </div>
            <hr />
            <div className="card4">
              <span>Total Amount</span>
              <span> ₹{total}</span>
            </div>
            <hr />
            <p style={{
              color: "#388e3c",
              padding: "1rem",
              fontWeight: "600",
              fontFamily: "Roboto,Arial,sans-serif"
            }}>You will save ₹{real} on this order</p>
          </div>

          <div className="stickey3" style={{ textAlign: "center" }}>
            <button className="stickey4" onClick={paymentPage}>PLACE ORDER</button>
          </div>
          <br />
        </div >
      </div>
    }
    <Toaster
      position="top-right"
      reverseOrder={false}
    />
    </>
  )
}

