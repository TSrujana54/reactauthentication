import React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const NoteCard = (props: any) => {
    return (
        <div>
            <Card>
                <CardContent>
                    <h1>{props.note.title}</h1>
                    {
                        props.note.text
                    }
                </CardContent>
            </Card>
        </div>
    )
}


export default NoteCard
