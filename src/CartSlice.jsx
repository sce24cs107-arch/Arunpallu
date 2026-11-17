// Cart state and reducer functions for Paradise Nursery.
// These reducer helpers use immutable-style updates through a copied state.
export const initialCartState = { items: [] };

export function addItem(state, action) {
  const product = action.payload;
  if (!product) return state;
  const existing = state.items.find((item) => item.id === product.id);
  if (existing) {
    return {
      ...state,
      items: state.items.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    };
  }
  return { ...state, items: [...state.items, { ...product, quantity: 1 }] };
}

export function removeItem(state, action) {
  const id = action.payload;
  return { ...state, items: state.items.filter((item) => item.id !== id) };
}

export function updateQuantity(state, action) {
  const { id, quantity } = action.payload || {};
  const nextQuantity = Math.floor(Number(quantity));
  if (!Number.isFinite(nextQuantity) || nextQuantity <= 0) {
    return removeItem(state, { payload: id });
  }
  return {
    ...state,
    items: state.items.map((item) =>
      item.id === id ? { ...item, quantity: nextQuantity } : item
    ),
  };
}

export function cartReducer(state = initialCartState, action) {
  switch (action.type) {
    case "cart/addItem":
      return addItem(state, action);
    case "cart/removeItem":
      return removeItem(state, action);
    case "cart/updateQuantity":
      return updateQuantity(state, action);
    default:
      return state;
  }
}

export const cartActions = {
  addItem: (product) => ({ type: "cart/addItem", payload: product }),
  removeItem: (id) => ({ type: "cart/removeItem", payload: id }),
  updateQuantity: (id, quantity) => ({
    type: "cart/updateQuantity",
    payload: { id, quantity },
  }),
};
