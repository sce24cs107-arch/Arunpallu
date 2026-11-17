import React from "react";

export default function CartItem({ item, onRemove, onQuantityChange }) {
  return (
    <div className="cart-row">
      <div>
        <div className="cart-item-name">{item.name}</div>
        <div className="price">
          ${(item.price * item.quantity).toFixed(2)}
        </div>
      </div>
      <div className="cart-controls">
        <button
          className="quantity-button"
          aria-label={`Decrease ${item.name} quantity`}
          onClick={() => onQuantityChange(item.id, item.quantity - 1)}
        >
          −
        </button>
        <span aria-live="polite">{item.quantity}</span>
        <button
          className="quantity-button"
          aria-label={`Increase ${item.name} quantity`}
          onClick={() => onQuantityChange(item.id, item.quantity + 1)}
        >
          +
        </button>
        <button className="remove-button" onClick={() => onRemove(item.id)}>
          Remove
        </button>
      </div>
    </div>
  );
}
