import React, { useState } from "react"
import NoteTaker from "../NoteTaker/notetaker";

import NoteViewer from "../NoteViewer/noteViewer"

import Note from '../../model/note'


const DashBoard = () => {
    // Notes Object
    const [noteList, setNotesList] = useState<Note[]>([]);

    const saveNotes = (note: Note) => {
        const newNote = [...noteList, note]
        setNotesList(newNote);

        console.log("DashBoard")
       // console.log(noteList);

    }

    return (
        <div>
            <NoteTaker msg={"Take New Notes"} saveNote={saveNotes}></NoteTaker>

            <NoteViewer notes={noteList}></NoteViewer>
        </div>
    )
}


export default DashBoard