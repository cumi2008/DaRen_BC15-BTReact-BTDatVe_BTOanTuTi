import React, { Component } from "react";

export default class StateDemo extends Component {
    //this.state là thuộc tính có sẵn của react component, dùng để chứa các giá trị thay đổi trên UI khi người dùng thao tác (click, change, blur...)
    state = {
        login: false
    }
    

  login = false;
  userName = "cybersoft";

  renderLogin = () => {
    if (this.login) {
      return (
        <span className="nav-item text-white"> Hello! {this.userName}</span>
      );
    }
    return <button className="btn btn-outline-success"> Đăng nhập</button>;
  };

  handleLogin = () => {
      //this.state.login = truel không được gán giá trị state trực tiếp, mà phải qua phương thức setState
      //this.setState: là 1 phương thức có sẵn của react class component để thay đổi giá trị state và render lại giao diện

    //   let newState = {
    //       login:true
    //   }
      this.setState({
          login:true
      }, () => {
          console.log('state', this.state);
      });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="#">
                    Action 1
                  </a>
                  <a className="dropdown-item" href="#">
                    Action 2
                  </a>
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              {/* {this.renderLogin()} */}

              {this.state.login ? (
                <span className="nav-item text-white">
                  {" "}
                  Hello! {this.userName}
                </span>
              ) : (
                <button className="btn btn-outline-success" onClick={()=>{this.handleLogin()}}> Đăng nhập</button>
              )}
              {/* <button
                className="btn btn-outline-success"
              >
                Đăng nhập
              </button> */}
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
