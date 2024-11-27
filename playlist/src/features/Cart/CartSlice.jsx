import { createSlice } from '@reduxjs/toolkit';
import cartItems from "../../constants/cartItems"

const initialState = {
    cartItems: cartItems,
    amount: 0,
    total: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // 증가
        increase: (state, {payload}) => {
            //내가 클릭한 음반의 ID 가지고옴
            const itemId = payload;
            //그 ID 통해서 전체 음반 중에서 내가 클릭한 id랑 비교해서 같은 음반 찾아냄
            const item = state.cartItems.find((cartItem) => cartItem.id === itemId); 
            //내가 클릭한 아이템이 무엇인지 찾았으니까 이제 그 아이템의 수량을 증가 시킴
            item.amount += 1;
        },

        // 감소
        decrease: (state, {payload})  => {
            const itemId = payload;
            const item = state.cartItems.find((cartItem) => cartItem.id === itemId); 
            item.amount -= 1;
        },

        //아이템 제거
        removeItem: (state, {payload})  => {
            const itemId = payload;
            state.cartItems = state.cartItems.filter((item) => item.id != itemId); 
        
        },

        //모든 아이템 제거
        clearCart: (state)  => {
            state.cartItems = [];
        },

        //Total 계산
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;

            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            })

            state.amount = amount;
            state.total = total;
        }
    }
})

export const {increase, decrease, removeItem, clearCart, calculateTotals} = cartSlice.actions;
export default cartSlice.reducer;