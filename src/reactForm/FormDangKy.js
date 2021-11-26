import React, { Component } from "react";
import { connect } from "react-redux";

class FormDangKy extends Component {
  state = {
    values: {
      //Thông tin người dùng nhập
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      email: "",
      soDienThoai: "",
      maLoaiNguoiDung: "KhachHang",
    },
    errors: {
      //Thông tin lỗi
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      email: "",
      soDienThoai: "",
      maLoaiNguoiDung: "",
    },
  };

  handleChangeInput = (event) => {
    //Dựa vào biến event có thể truy xuất được các thông tin của thẻ
    // let value = event.target.value;
    let { id, name, value } = event.target;
    //Mỗi lần nhập liệu sẽ xử lý 2 phần
    //Phần 1 values
    let newValues = { ...this.state.values };
    newValues[name] = value;

    //Phần 2 errors
    let newErrors = { ...this.state.errors };
    let messError = "";

    if (value.trim() === "") {
      messError = name + "không được bỏ trống!";
    }
    if (event.target.type === "email") {
      let regexEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regexEmail.test(value)) {
        messError = "Email không đúng định dạng";
      }
    }

    newErrors[name] = messError;
    this.setState({
      values: newValues,
      errors: newErrors,
    });

    // this.setState({
    //   [name]: value,
    // });
    // console.log(this.state);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //Gửi giá trị người dùng nhập vào lên redux

    let { values, errors } = this.state;
    let valid = true; //valid = true là form hợp lệ

    for (let key in values) {
      if (values[key] === "") {
        valid = false;
        break;
      }
    }

    //Kiểm tra tất cả giá trị {taiKhoan, matKhau,...} trong error xem có lỗi không

    for (let key in errors) {
      if (errors[key] !== "") {
        valid = false;
        break;
      }
    }

    if (!valid) {
      alert("Dữ liệu nhập không hợp lệ");
      return;
    }

    const action = {
      type: "THEM_NGUOI_DUNG",
      nguoiDung: this.state.values,
    };
    this.props.dispatch(action);
  };

  // static getDerivedStateFromProps(newProps, currentState) {
  //   //Chọ thời điểm trước khi render props mới từ redux trả về edit vào state và return về state - componentrender => renderstate

  //   if (newProps.nguoiDungChinhSua.taiKhoan !== currentState.values.taiKhoan) {
  //     currentState.values = { ...newProps.nguoiDungChinhSua };
  //   }
  //   return { ...currentState };
  // }
  componentWillReceiveProps(newProps) {
    this.setState({
      values: newProps.nguoiDungChinhSua,
    });
  }

  render() {
    let { taiKhoan, matKhau, hoTen, email, soDienThoai, maLoaiNguoiDung } =
      this.state.values;

    return (
      <form onSubmit={this.handleSubmit} className="card">
        <div className="card-header bg-dark text-white">
          <h3>Form Đăng ký</h3>
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <p>Tài khoản</p>
                  <input
                    className="form-control"
                    id="taiKhoan"
                    name="taiKhoan"
                    value={taiKhoan}
                    onChange={this.handleChangeInput}
                  />
                  <p className="text text-danger">
                    {this.state.errors.taiKhoan}
                  </p>
                </div>
                <div className="form-group">
                  <p>Mật khẩu</p>
                  <input
                    className="form-control"
                    id="matKhau"
                    name="matKhau"
                    value={matKhau}
                    onChange={this.handleChangeInput}
                  />
                  <p className="text text-danger">
                    {this.state.errors.matKhau}
                  </p>
                </div>
                <div className="form-group">
                  <p>Email</p>
                  <input
                    className="form-control"
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={this.handleChangeInput}
                  />
                  <p className="text text-danger">{this.state.errors.email}</p>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <p>Họ tên</p>
                  <input
                    className="form-control"
                    id="hoTen"
                    name="hoTen"
                    value={hoTen}
                    onChange={this.handleChangeInput}
                  />
                  <p className="text text-danger">{this.state.errors.hoTen}</p>
                </div>
                <div className="form-group">
                  <p>Số điện thoại</p>
                  <input
                    className="form-control"
                    id="soDienThoai"
                    name="soDienThoai"
                    value={soDienThoai}
                  />
                  <p className="text text-danger">
                    {this.state.errors.soDienThoai}
                  </p>
                </div>
                <div className="form-group">
                  <p>Mã loại người dùng</p>
                  <select
                    className="form-control"
                    id="maLoaiNguoiDung"
                    name="maLoaiNguoiDung"
                    value={maLoaiNguoiDung}
                    onChange={this.handleChangeInput}
                  >
                    <option value="KhachHang">Khách hàng</option>
                    <option value="QuanTri">Quản trị</option>
                  </select>
                  <p className="text text-danger">
                    {this.state.errors.maLoaiNguoiDung}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-success "
                style={{ marginRight: "5px" }}
              >
                Đăng ký
              </button>
              <button type="button" className="btn btn-primary">
                Cập nhật
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nguoiDungChinhSua: state.baiTapQuanLyNguoiDungReducer.nguoiDungChinhSua,
  };
};

export default connect(mapStateToProps)(FormDangKy);
