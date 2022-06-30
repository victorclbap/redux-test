import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counter'



export default configureStore ({
    reducer: {
        counter: counterReducer,      // O nome do reducer é counter
        // user: userReducer          // exemplo adição de novo reducer/slice
    }
});