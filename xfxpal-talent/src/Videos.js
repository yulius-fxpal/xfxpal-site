import React from 'react'
import { Header } from 'semantic-ui-react'
const style = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 60px)',
    },
    iframe: {
        border: 0,
        flexGrow: 1,
    }
}
export default () => {
    return (
        <div style={style.container}>
            <Header as="h1" textAlign="center">Videos showcasing the work done at FXPAL</Header>
            <iframe title='Videos' src='https://xfxpal.com/videos' style={style.iframe} allowFullScreen></iframe>
        </div>
    )
}