import React, { useEffect } from 'react'
import { Header } from 'semantic-ui-react'

export default () => {
    useEffect(() => {
        document.title = 'FXPAL Publications'
    })
    return (
        <Header as="h1" textAlign='center' >FXPAL publishes in top scientific conferences and journals</Header>
    )
}