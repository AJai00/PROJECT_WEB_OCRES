import React from 'react';
import './Widget.css'
import Box from '@material-ui/core/Box';


export default class Widget extends React.Component {

   

    render() {
        return(
            <Box className="Widget" boxShadow={3} borderRadius={20}>
                                 
                        {this.props.widgetUsed}
                
            </Box>
        )
    }
}