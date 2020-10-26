import React from 'react'
import Divider from '@material-ui/core/Divider';

const Dividers = () => {
    const date = new Date();

    return (
        <div>
            <p style={{fontFamily: 'Roboto', margin: '20px'}}><Divider /></p>

            <p style={{fontFamily: 'Roboto', fontSize: "15px"}}>@{date.getFullYear()} Blue Tac</p>

        </div>
    )
}

export default Dividers
