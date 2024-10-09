import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProducts: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { success: false, message: "Please fill in all the fields" };
    }

    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    const data = await res.json();

    set((state) => ({ products: [...state.products, data.data] }));

    return { success: true, message: "Product created succesfully" };
  },
  allProducts: async () => {
    try {
      const res = await fetch("api/products");
      if (!res.ok) throw new Error("Failed to fetch data products");
      const data = await res.json();
      set({ products: data.data });
    } catch (error) {
      console.log(error);
    }
  },
}));
