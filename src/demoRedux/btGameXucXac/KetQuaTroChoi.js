import React, { Component } from 'react'
import { connect } from 'react-redux'


class KetQuaTroChoi extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="container text-center mt-5">
                <div className="display-4">
                    Bạn chọn: <span className="text-danger text-success">{this.props.banChon ? 'Tài' : 'Xỉu'}</span>
                </div>
                
                <div className="display-4">
                    Số bàn thắng: <span className="text-success ">{this.props.soBanThang}</span>
                </div>
                <div className="display-4">
                    Tổng số bàn chơi: <span className="text-primary">{this.props.tongSoBanChoi}</span>
                </div>
                <div className="display-4">
                    <button className="btn btn-primary" onClick={() => {this.props.playGame()}}>Play game</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            // console.log('playGame');

            const action = {
                type: 'PLAY_GAME',
            }
            dispatch(action);

        }
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        banChon: rootReducer.gameXucXacReducer.banChon,
        soBanThang: rootReducer.gameXucXacReducer.soBanThang,
        tongSoBanChoi: rootReducer.gameXucXacReducer.tongSoBanChoi
    }
}

export default  connect (mapStateToProps, mapDispatchToProps)(KetQuaTroChoi)
