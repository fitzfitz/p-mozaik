import React, { Component } from 'react'
import './LoadSpinner.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class LoadSpinner extends Component {
    render() {
        return (
            this.props.type === 'success' ? (
                <div className={`success ${this.props.className}`}>
                    <FontAwesomeIcon className="la-success" icon={['fas', 'check']} />
                </div>
            ) : (
                <div style={{ background: `#${this.props.bg}` }} className={`la-ball-clip-rotate-pulse ${this.props.className}`}>
                    <div></div>
                    <div></div>
                </div>
            )
        )
    }
}
