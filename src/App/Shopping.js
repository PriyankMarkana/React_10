import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
  price: 0,
  dis: 0,
  amt: 0,
  tdis: 0,
  cnt:0,
}

export const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, data) => {    
      let check=false;
      for (let i = 0; i < state.value.length; i++) {
          if(state.value[i].title==data.payload.title)
          {
            check=true;
          }
          else
          {
            check=false;
          }
          if(check==true)
          {
            break;
          }
      }
      
      if(check==true)
      {
        alert("All Ready In Cart")
      }
      else
      {
        data.payload.qty = 1;
        data.payload.tprice = 0;
        data.payload.tprice = data.payload.price;
        state.value = [...state.value, data.payload];


        state.price = state.price + data.payload.price;

        state.dis = data.payload.price / data.payload.discountPercentage;
        state.tdis = state.tdis + state.dis;
        state.amt = state.price - state.tdis;
        state.cnt++;
    }

    },
    increment: (state, ele) => {

      console.log(ele);
      state.value[ele.payload.ind].qty = ele.payload.ele.qty + 1;
      state.value[ele.payload.ind].tprice = ele.payload.ele.price * state.value[ele.payload.ind].qty;

      state.price = state.price + ele.payload.ele.price;

      state.dis = ele.payload.ele.price / ele.payload.ele.discountPercentage;
      state.tdis = state.tdis + state.dis;
      state.amt = state.price - state.tdis;
    },
    decrement: (state, ele) => {

      if (state.value[ele.payload.ind].qty > 1) {
        state.value[ele.payload.ind].qty = ele.payload.ele.qty - 1;

        state.value[ele.payload.ind].tprice = ele.payload.ele.price * state.value[ele.payload.ind].qty;

        state.price = state.price - ele.payload.ele.price;

        state.dis = ele.payload.ele.price / ele.payload.ele.discountPercentage;
        state.tdis = state.tdis - state.dis;
        state.amt = state.price - state.tdis

      }

    },
    remove:(state,action)=>{
      state.value=state.value.filter((ele,ind)=>{
          return action.payload.ele.title!=ele.title;
      })
      state.price = state.price - action.payload.ele.tprice;

      state.dis = action.payload.ele.tprice / action.payload.ele.discountPercentage;
      state.tdis = state.tdis - state.dis;
      state.amt = state.price - state.tdis;
      state.cnt--;

    }
  },
})

// Action creators are generated for each case reducer function
export const { add, increment, decrement,remove } = cart.actions

export default cart.reducer