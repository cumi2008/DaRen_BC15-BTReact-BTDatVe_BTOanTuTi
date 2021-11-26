import { XOA_NGUOI_DUNG } from "../type/BTQuanLyNguoiDungType"



export const xoaNguoiDungAction = (taiKhoan) => {
    return {
        type:XOA_NGUOI_DUNG,
        taiKhoan: taiKhoan
    }
}