import React from 'react'

const OrderDetails = () => {
  return (
    <section className='orderDetails'>
        <main>
            <h1>Order Details</h1>
            <div>
                <h1>Shipping </h1>
                <p> <b>Address</b>
                    {"sjda 12-32ss dsad"}
                </p>
            </div>

            <div>
                <h1>Contact</h1>

                <p> <b>Name</b>
                    {"Ashish"}
                </p>
                <p> <b>Phone</b>
                    {231849303}
                </p>

            </div>

            <div>
                <h1>Status</h1>
                
                <p> <b>Order Status</b>
                    {"Processing"}
                </p>
                <p> <b>Placed At</b>
                    {"23-02-2002"}
                </p>

                <p> <b>Delivered At</b>
                    {"23-02-2006"}
                </p>

            </div>


            <div>
                <h1>Payment</h1>
                
                <p> <b>Payment Method</b>
                    {"online"}
                </p>
                <p> <b>Payment Reference</b>
                    #{"dfgbdaf"}
                </p>

                <p> <b>Paid At</b>
                    {"23-02-2006"}
                </p>

            </div>

            <div>
                <h1>Amount</h1>
                
                <p> <b>Items Total</b>
                ₹{876}
                </p>
                
                <p> <b>Shipping Changes</b>
                ₹{200}
                </p>

                <p> <b>Tax </b>
                ₹{86}
                </p>

                <p> <b>Total </b>
                ₹{876+200+86}
                </p>
            </div>

            <article>

            <h1>Order Items</h1>
            <div>
                <h4>cheese Burger</h4>
                <div>
                    <span>{12}</span>x
                    <span>{245}</span>
                </div>
            </div>

            <div>
                <h4>Veg cheese Burger</h4>
                <div>
                    <span>{12}</span>x
                    <span>{245}</span>
                </div>
            </div> 

            <div>
                <h4>Burger Fries</h4>
                <div>
                    <span>{10}</span>x
                    <span>{5000}</span>
                </div>

            </div> 

            <div ><h4
            style={{
                fontWeight:800
            }}
            >Sub Total </h4>
                    <div
                    style={{
                        fontWeight:800
                    }}>₹{4567}</div>
            </div>   
            </article>
        </main>
    </section>
  )
};

export default OrderDetails