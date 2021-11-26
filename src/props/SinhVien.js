import React, { Component } from 'react'

export default class SinhVien extends Component {
    render() {
        let {sinhVien} = this.props
        return (
            <div>
                <ul>
                    <li>Mã sinh viên: {sinhVien.mssv}</li>
                    <li>Họ tên: {sinhVien.hoTen}</li>
                    <li>Năm sinh: {sinhVien.namSinh}</li>
                </ul>
                
            </div>
        )
    }
}
