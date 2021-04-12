import React from 'react'
import styled from 'styled-components'

const HelloContent = styled.header`
  color: darkred;
`

const Hello: React.FC = () => {
    return (
        <HelloContent>
            <h1>💖 Hello World!</h1>
            <p>Welcome to your Electron application.</p>
        </HelloContent>
    )
}

export {Hello}