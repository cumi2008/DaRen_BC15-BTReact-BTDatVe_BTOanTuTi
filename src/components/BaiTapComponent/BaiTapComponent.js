import React, { Component } from 'react'
import Content from '../Content'
import Footer from './Footer'
import Header from './Header'
import Nav from './Nav'

export default class BaiTapComponent extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className = "row">
                    <div className = "col-5">
                        <Nav/>
                    </div>
                    <div className = "col-7">
                        <Content/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
