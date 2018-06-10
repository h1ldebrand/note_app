import React, {Component} from 'react';

class Note extends Component{

    constructor(props){
        super(props);
    }

    render(){
        const {
            children,
            color,
            } = this.props;
        return(
            <div className="note" style={{backgroundColor : color}}>
                {children}
            </div>
        )
    }

}

export default Note;