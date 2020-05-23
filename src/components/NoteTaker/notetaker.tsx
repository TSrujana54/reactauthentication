import React, { useState } from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';


import Input from '@material-ui/core/Input'
import Button from "@material-ui/core/Button";

import Note from '../../model/note'



const NoteTaker = (props:any) => {
    // object
    const [title, setTitle] = useState<string>('');
    const [text, setText] = useState<string>('');

    // Event for input

    const handleOnChange = (event: any) => {
        event.preventDefault();
        const value = event.target.value;
        const key = event.target.name;
        if (key == "title") {
            setTitle(value);
        }
        else {
            setText(value);
        }
    }


    const handleOnClick = () => {
       
        const newNote= new Note(title,text);
        props.saveNote(newNote);
        console.log(newNote);
        setTitle('');
        setText('');
    }
    return (
        <div>
            <h3>{props.msg}</h3>
            <ExpansionPanel>
                <ExpansionPanelSummary>
                    <Input placeholder="Enter Title" value={title} onChange={handleOnChange} name='title'></Input>
                </ExpansionPanelSummary>

                <ExpansionPanelDetails>
                    <Input placeholder="Enter Note" value={text} onChange={handleOnChange} name='note'></Input>
                </ExpansionPanelDetails>
                <ExpansionPanelActions>
                    <Button size="small" onClick={handleOnClick} color="primary">Save</Button>
                </ExpansionPanelActions>
            </ExpansionPanel>
        </div>


    )
}


export default NoteTaker