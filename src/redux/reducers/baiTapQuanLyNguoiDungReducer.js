import { XOA_NGUOI_DUNG, THEM_NGUOI_DUNG } from "../type/BTQuanLyNguoiDungType";

const stateDefault = {
  mangNguoiDung: [
    {
      taiKhoan: "nguyenVanA",
      matKhau: "123",
      hoTen: "Nguyễn Văn A",
      soDienThoai: "1234556789",
      email: "abc@gmail.com",
      maLoaiNguoiDung: "KhachHang",
    },
    {
      taiKhoan: "nguyenVanB",
      matKhau: "123",
      hoTen: "Nguyễn Văn B",
      soDienThoai: "1234556789",
      email: "xyz@gmail.com",
      maLoaiNguoiDung: "QuanTri",
    },
  ],
  nguoiDungChinhSua: {
    taiKhoan: "nguyenVanB",
    matKhau: "123",
    hoTen: "Nguyễn Văn B",
    soDienThoai: "1234556789",
    email: "xyz@gmail.com",
    maLoaiNguoiDung: "QuanTri",
  },
};

export const baiTapQuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case THEM_NGUOI_DUNG: {
      state.mangNguoiDung = [...state.mangNguoiDung, action.nguoiDung];
      return { ...state };
    }

    case XOA_NGUOI_DUNG: {
      state.mangNguoiDung = [
        ...state.mangNguoiDung.filter(
          (nguoiDung) => nguoiDung.taiKhoan !== action.taiKhoan
        ),
      ];

      return { ...state };
    }

    case 'CHINH_SUA_NGUOI_DUNG' : {
        state.nguoiDungChinhSua = action.nguoiDung;
        return {...state}
    }

    default:
      return state;
  }
};
