import React from 'react'

import NoteCard from "../NoteCard/noteCard";
import Note from '../../model/note'
import Grid from '@material-ui/core/Grid'



const NoteViewer = (props: any) => {

    const notesList = props.notes;
    console.log(notesList)

    const list = notesList.map((item: Note) =>
        <NoteCard key={item.id} note={item}></NoteCard>
    )

    return (
        <div>
            <Grid>
                {list}

            </Grid>


        </div>
    )
}


export default NoteViewer