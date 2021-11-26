import React, { Component } from 'react'
//Cách 1: import css áp dụng toàn dự án
import './StyleDemo.css'
import style from './StyleDemo.module.css'

export default class Style extends Component {
    render() {
        return (
            <div>
                <p className="color-red">Demo CSS</p>

                <p className={style['color-green']}>Hello</p>
                <p className={style.colorGreen}> Hello css</p>
                <p className={`${style.colorGreen} ${style.fontBold}`}> Green Bold</p>

                <h3>Cách 3: import css trực tiếp</h3>
                <p style ={{backgroundColor:'black', color:'green'}}>abc</p>
            </div>
        )
    }
}
