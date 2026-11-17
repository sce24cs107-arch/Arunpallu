import React from "react";

export const products = [
  { id: 1, name: "Snake Plant", category: "Indoor", description: "A hardy, low-maintenance plant for bright or low-light rooms.", price: 18, emoji: "🪴", image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=85" },
  { id: 2, name: "Monstera Deliciosa", category: "Indoor", description: "A tropical statement plant with beautiful split leaves.", price: 32, emoji: "🌿", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=85" },
  { id: 3, name: "Peace Lily", category: "Indoor", description: "An elegant leafy plant with graceful white blooms.", price: 24, emoji: "🌱", image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=85" },
  { id: 4, name: "Aloe Vera", category: "Succulent", description: "A sun-loving succulent that is easy to care for.", price: 15, emoji: "🌵", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=85" },
  { id: 5, name: "Golden Pothos", category: "Indoor", description: "A trailing vine that brings greenery to shelves and hanging pots.", price: 20, emoji: "🍃", image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=85" },
  { id: 6, name: "Rubber Plant", category: "Indoor", description: "A bold plant with glossy leaves for a modern space.", price: 29, emoji: "🌳", image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=85" },
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
            <img className="product-image" src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="product-bottom">
                <span className="price">${product.price.toFixed(2)}</span>
                <button className="add-button" onClick={() => onAddToCart(product)}>
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
