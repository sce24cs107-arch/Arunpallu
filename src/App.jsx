import React, { useReducer } from "react";
import "./App.css";
import AboutUs from "./AboutUs";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import { cartReducer, initialCartState, cartActions } from "./CartSlice";

export default function App() {
  const [cart, dispatch] = useReducer(cartReducer, initialCartState);
  const itemCount = cart.items.reduce((total, item) => total + item.quantity, 0);

  // Calculate the complete cart amount from every item's price and quantity.
  const calculateTotalAmount = () =>
    cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

  const changeQuantity = (id, quantity) =>
    dispatch(cartActions.updateQuantity(id, quantity));

  const continueShopping = () =>
    document.getElementById("plants")?.scrollIntoView({ behavior: "smooth" });

  const checkout = () => {
    if (cart.items.length === 0) {
      window.alert("Your cart is empty. Please add a plant before checkout.");
      return;
    }
    window.alert(`Thank you for shopping at Paradise Nursery! Your total is $${calculateTotalAmount().toFixed(2)}.`);
  };

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="brand">🌿 Paradise Nursery</div>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#plants">Plants</a>
          <a href="#cart">Shopping Cart</a>
        </nav>
        <div className="cart-count" aria-label={`${itemCount} items in cart`}>
          🛒 {itemCount}
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">BRING NATURE HOME</p>
          <h1>Grow a little happiness.</h1>
          <p>Discover beautiful plants that make your home feel fresh, peaceful, and full of life.</p>
          <button className="primary-button" onClick={continueShopping}>Get Started</button>
        </div>
      </section>

      <main>
        <AboutUs />
        <ProductList onAddToCart={(product) => dispatch(cartActions.addItem(product))} />

        <section id="cart" className="cart-section">
          <div className="section-heading">
            <p className="eyebrow">YOUR GREEN PICKS</p>
            <h2>Shopping Cart</h2>
            <p>{itemCount} item(s) in your cart</p>
          </div>

          {cart.items.length === 0 ? (
            <p className="cart-empty">Your cart is empty. Add a plant you love!</p>
          ) : (
            <div className="cart-items-list">
              {cart.items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onRemove={(id) => dispatch(cartActions.removeItem(id))}
                  onQuantityChange={changeQuantity}
                />
              ))}
            </div>
          )}

          <div className="cart-summary">
            <p className="cart-total">
              Total Cart Amount: <strong>${calculateTotalAmount().toFixed(2)}</strong>
            </p>
            <div className="cart-actions">
              <button className="continue-button" onClick={continueShopping}>
                Continue Shopping
              </button>
              <button className="checkout-button" onClick={checkout}>
                Checkout
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        © {new Date().getFullYear()} Paradise Nursery. Grow with us.
      </footer>
    </div>
  );
}
