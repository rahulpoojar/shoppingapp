/*
   - Slice: creating a "slice" is a way to organize and encapsulate parts of your Redux state and the corresponding logic for updating that state. 
   - Store: The big whiteboard where all the tasks (or the to-do list) are listed.
   - Reducers: You, the person in charge of updating the to-do list based on the requests.
   - Actions: The requests or commands (like adding, completing, or removing tasks) given to you to update the list.

*/
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState: [],
    reducers:{
// state.push(action.payload): This line actually adds the item (action.payload) to the list (state). It's like putting the item into the shopping cart.
        add(state, action) {
            state.push(action.payload);
        },
        remove(state, action)
        {
            return state.filter(item=> item.id != action.payload)
        }
    }
     
});


export const {add,remove} = cartSlice.actions;
export default cartSlice.reducer;