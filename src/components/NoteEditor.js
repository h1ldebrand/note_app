import React, {Component} from 'react';

class NoteEditor extends Component{

    constructor(props){
        super(props);

        this.state = {
            text: ''
        };

        this.handleNoteAdd = this.handleNoteAdd.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.resetState = this.resetState.bind(this);
    }

    handleNoteAdd(){
        const newNote = {
            text: this.state.text,
            id: Date.now(),
            color: 'yellow'
        };

        this.props.onNoteAdd(newNote);
        this.resetState();
    }

    resetState(){
        this.setState({
            text: ''
        })
    }

    handleTextChange(e){
        this.setState({
            text: e.target.value
        })
    }

    render(){
        return(
            <div className="editor">
                <textarea
                    rows={5}
                    placeholder="Enter your not here..."
                    className="editor__textarea"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <button className="editor__button" disabled={!this.state.text} onClick={this.handleNoteAdd}>Add</button>
            </div>
        )
    }

}

export default NoteEditor;