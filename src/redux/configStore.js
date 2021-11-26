import { combineReducers } from "redux";
import { createStore } from "redux";
import { gameXucXacReducer } from "./reducers/gameXucXacReducer";
import { gioHangReducer } from "./reducers/gioHangReducer";
import { gameOanTuTiReducer } from "./reducers/gameOanTuTiReducer";
import {baiTapQuanLyNguoiDungReducer} from "./reducers/baiTapQuanLyNguoiDungReducer"
import baiTapDatGheReducer from "./reducers/baiTapDatGheReducer"

const rootReducer = combineReducers ({
    //Nơi chứa toàn bộ state của ứng dụng (thay vì đặt dưới this. state của component)

    stateGioHang : gioHangReducer,
    gameXucXacReducer,
    gameOanTuTiReducer,
    baiTapQuanLyNguoiDungReducer,
    baiTapDatGheReducer
    

});
export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
