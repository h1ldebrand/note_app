import React, {Component} from 'react';
import Note from './Note'

class NoteGrid extends Component{

    constructor(props){
        super(props);
    }

    render(){
        const {notes} = this.props;
        return(
            <div className="grid">
                {
                    notes.map(note => {
                        return(
                            <Note
                                key={note.id}
                                id={note.id}
                                color={note.color}
                            >{note.text}</Note>
                        )
                    })
                }
            </div>
        )
    }

}

export default NoteGrid;