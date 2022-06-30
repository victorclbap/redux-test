import {createSlice} from '@reduxjs/toolkit';


export const counterSlice = createSlice ({
    name:"counter",
    initialState: {      // é onde é definico o state dos reducer abaixo, inicialmente o state.value é igual a 0, mas é definido como inicialState(state)
        count: 0
    },

                           
    reducers : {
        increment: (state)=> {   // definição da ação increment (action)
            state.count += 1;    //realização da ação de fato (reducer)
        },

        decrement : (state=> {     // definição da ação decrement
            state.count -= 1;
        }), 
        incrementByAmount: (state, action ) => {   // definição da ação incrementByAmout
            state.count += action.payload   
        }
    }
})

// tem que exportar as ações também, para elas serem usadas pelos arquivos
export const {increment, decrement, incrementByAmount} = counterSlice.actions;

//exportação do reducer
export default counterSlice.reducer