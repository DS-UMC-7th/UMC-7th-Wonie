import { create } from "zustand";
import cartItems from "../../constants/cartItems"; // 초기 데이터 가져오기

export const useCartStore = create((set, get) => ({
  cartItems: cartItems, // 초기 데이터 설정
  amount: 0,
  total: 0,

  // 아이템 추가/삭제/수량 조절 관련 메서드
  increase: (id) => {
    const updatedCartItems = get().cartItems.map((item) =>
      item.id === id ? { ...item, amount: item.amount + 1 } : item
    );
    set({ cartItems: updatedCartItems });
    get().calculateTotals();
  },

  decrease: (id) => {
    const updatedCartItems = get().cartItems.map((item) =>
      item.id === id
        ? { ...item, amount: Math.max(1, item.amount - 1) }
        : item
    );
    set({ cartItems: updatedCartItems });
    get().calculateTotals();
  },

  removeItem: (id) => {
    const updatedCartItems = get().cartItems.filter((item) => item.id !== id);
    set({ cartItems: updatedCartItems });
    get().calculateTotals();
  },

  clearCart: () => {
    set({ cartItems: [] });
    get().calculateTotals();
  },

  calculateTotals: () => {
    const { cartItems } = get();
    const amount = cartItems.reduce((acc, item) => acc + item.amount, 0);
    const total = cartItems.reduce(
      (acc, item) => acc + item.amount * item.price,
      0
    );
    set({ amount, total });
  },

  setCartItems: (items) => set({ cartItems: items }),
}));

export const useModalStore = create((set) => ({
  isOpen: false,

  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));

export default useCartStore;
