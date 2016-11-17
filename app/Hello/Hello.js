import React from 'react'
import styles from './style.css'
import CSSModules from 'react-css-modules';

class Pulse extends React.Component {
    render () {
        return <div styleName='root'>
          some content
        </div>
    }
}

export default CSSModules(Pulse, styles);
