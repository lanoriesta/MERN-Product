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
  deleteProduct: async (id) => {
    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error({ success: false, message: res.message });

      set((state) => ({
        products: state.products.filter((item) => item._id !== id),
      }));
      return { success: true, message: "Successfuly deleted a product" };
    } catch (err) {
      console.log(err);
    }
  },
  updateProduct: async (id, updatedProduct) => {
    try {
      const res = await fetch(`api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      });
      if (!res.ok) return { success: false, message: "Error updating product" };

      const data = await res.json();

      set((state) => ({
        products: state.products.map((item) =>
          item._id === id ? updatedProduct : item
        ),
      }));
      return { success: true, message: "Successfully Updated the Product" };
    } catch (error) {
      return { success: false, message: error };
    }
  },
}));
