import React, { Component } from 'react'

export default class Example extends Component {
    /**
     * B1: Xây dựng layout hoàn chỉnh
     * B2: Phân tích dữ liệu thay đổi (xác định state là gì khi click vào đâu thì giao diện chỗ nào thay đổi) xác định kiểu dữ liệu lưu trữ
     * B3: Xây dựng xử lý thay đổi state
     */

    state = {
        fSize : 16 //Giá trị thay đổi trên giao diện là fontSize của chữ => fontSize là state
    }

    handleFontSize = (size) => {
        //Thay đổi state = hàm setState
        this.setState ({
            fSize: this.state.fSize + size
        })
    }
    render() {
        return (
            <div>
                <h3>Demo về State</h3>
                <h3>Thay đổi phông chữ</h3>
                <p style ={{fontSize:this.state.fSize}}>Đoạn văn bản.............</p>
                <button className="btn btn-outline-success mr-2" onClick={()=>{this.handleFontSize(1)}}>+</button>
                <button className="btn btn-outline-success " onClick={()=>{this.handleFontSize(-1)}}>-</button>

            </div>
        )
    }
}
