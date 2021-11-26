import React, { Component } from 'react'
import BTContent from './BTContent'
import BTFooter from './BTFooter'
import BTHeader from './BTHeader'
import BTNav from './BTNav'


export default class BTVNComponent extends Component {
    render() {
        return (
            <div>
                <BTNav/>
                <BTHeader/>
                <BTContent/>
                <BTFooter/>

                
            </div>
        )
    }
}
