const stateDefault = []





export const gioHangReducer = (state = [], action) => {
    switch (action.type) {
        case 'THEM_GIO_HANG': {
            let gioHang = state;
            //Kiểm tra sp có trong giỏ hàng hay chưa
            let spGH = gioHang.find (sp =>sp.maSP === action.spGH.maSP);
            if (spGH) {
                spGH.soLuong += 1;
            }else {
                gioHang.push(action.spGH)
            }
            //Trả về state mới => giao diện mới cập nhật
            //Immutable: tính bất biến của redux
            return [...gioHang]; //Trả về state sau khi xử lý


        }
        case 'XOA_GIO_HANG': {
            let gioHangCapNhat = state.filter (sp => sp.maSP !== action.maSP);
            return [...gioHangCapNhat]
        }

        
        case 'TANG_GIAM_SO_LUONG': {
            let gioHangCapNhat = [...state];
            let spGH = gioHangCapNhat.find(sp =>sp.maSP === action.maSP);
            if (spGH) {
                spGH.soLuong += action.soLuong;
                if (spGH.soLuong <1) {
                    spGH.soLuong -= action.soLuong;
                }
            }
            return gioHangCapNhat;
        }
    }

    return state;
}