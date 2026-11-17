import React from "react";

export default function CartItem({ item, onRemove, onQuantityChange }) {
  const calculateTotalCost = (cartItem) => cartItem.price * cartItem.quantity;

  return (
    <article className="cart-row">
      <img
        className="cart-item-image"
        src={item.image}
        alt={item.name}
      />
      <div className="cart-item-details">
        <h3 className="cart-item-name">{item.name}</h3>
        <p className="cart-unit-price">Unit price: ${item.price.toFixed(2)}</p>
        <p className="cart-line-total">Item total: ${calculateTotalCost(item).toFixed(2)}</p>
      </div>
      <div className="cart-controls">
        <button
          className="quantity-button"
          aria-label={`Decrease ${item.name} quantity`}
          onClick={() => onQuantityChange(item.id, item.quantity - 1)}
        >−</button>
        <span className="quantity-value" aria-live="polite">{item.quantity}</span>
        <button
          className="quantity-button"
          aria-label={`Increase ${item.name} quantity`}
          onClick={() => onQuantityChange(item.id, item.quantity + 1)}
        >+</button>
        <button className="remove-button" onClick={() => onRemove(item.id)}>
          Remove
        </button>
      </div>
    </article>
  );
}
