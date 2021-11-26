import React, { Component } from 'react'
import { connect } from 'react-redux'


class KetQuaGame extends Component {
    render() {
        return (
            <div className="text-center mt-5">
                <h1 className="display-6 text-danger">{this.props.ketQua}<span className="text-success"></span> </h1>
                <h1 className="display-6 text-primary">số bàn thắng: <span className="text-success">{this.props.soBanThang}</span> </h1>
                <h1 className="display-6 text-primary">số bàn chơi: <span className="text-success">{this.props.tongSoBanChoi}</span> </h1>

                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        soBanThang: state.gameOanTuTiReducer.soBanThang,
        tongSoBanChoi: state.gameOanTuTiReducer.tongSoBanChoi,
        ketQua: state.gameOanTuTiReducer.ketQua
    }
}

export default connect(mapStateToProps)(KetQuaGame)
