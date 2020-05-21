import React, { useEffect } from 'react'
import { Header, Grid, TransitionablePortal, Image } from 'semantic-ui-react'
import { Link, Route } from 'react-router-dom'
import videos from './videos.json'
const style = {
    h1: {
        marginBottom: '1.5em',
    },
    video: {
        position: 'fixed',
        zIndex: 1000,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '100%',
        outline: 'none',
    }
}
const VIDEO_PREFIX = 'https://xfxpal.com/videos'
const Video = ({ match: { params: { video } }, history }) => {
    return (
        <TransitionablePortal open closeOnTriggerClick key={video} onClose={() => history.replace('/videos')} transition={{ animation: 'fade' }}>
            <video controls style={style.video}>
                <source src={`${VIDEO_PREFIX}/${video}`}></source>
            </video>
        </TransitionablePortal>
    )
}

export default props => {
    useEffect(() => {
        const { location: { pathname } } = props
        document.title = 'FXPAL Videos' + (pathname.length > 8 ? ` - ${pathname.substring(8)}` : '')
    })
    return (
        <>
            <Header as='h1' textAlign='center' style={style.h1}>Videos showcasing the work done at FXPAL</Header>
            <Grid doubling columns={4}>
                {videos.map(({ video, image }) => (
                    <Grid.Column key={video}>
                        <Link to={`/videos/${video}`} replace>
                            <Image src={`${VIDEO_PREFIX}/${image}`} title={decodeURIComponent(video).substring(video.length - 4)} />
                        </Link>
                    </Grid.Column>
                ))}
            </Grid>
            <Route exact path='/videos/:video' component={Video} />
        </>
    )
}