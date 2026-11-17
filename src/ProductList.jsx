import React from "react";

export const products = [
  { id: 1, name: "Snake Plant", category: "Indoor", description: "A hardy, low-maintenance plant for bright or low-light rooms.", price: 18, emoji: "🪴" },
  { id: 2, name: "Monstera Deliciosa", category: "Indoor", description: "A tropical statement plant with beautiful split leaves.", price: 32, emoji: "🌿" },
  { id: 3, name: "Peace Lily", category: "Indoor", description: "An elegant leafy plant with graceful white blooms.", price: 24, emoji: "🌱" },
  { id: 4, name: "Aloe Vera", category: "Succulent", description: "A sun-loving succulent that is easy to care for.", price: 15, emoji: "🌵" },
  { id: 5, name: "Golden Pothos", category: "Indoor", description: "A trailing vine that brings greenery to shelves and hanging pots.", price: 20, emoji: "🍃" },
  { id: 6, name: "Rubber Plant", category: "Indoor", description: "A bold plant with glossy leaves for a modern space.", price: 29, emoji: "🌳" },
];

export default function ProductList({ onAddToCart }) {
  return (
    <section id="plants" className="plants-section">
      <div className="section-heading">
        <p className="eyebrow">GROW SOMETHING GOOD</p>
        <h2>Our Plants</h2>
        <p>Find a green companion for every corner of your home.</p>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <article className="product-card" key={product.id}>
            <div className="product-image" role="img" aria-label={product.name}>
              {product.emoji}
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="product-bottom">
                <span className="price">${product.price.toFixed(2)}</span>
                <button
                  className="add-button"
                  onClick={() => onAddToCart(product)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
