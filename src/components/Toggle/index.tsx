import React from 'react'

import {Container,ToggleLabel} from './styles'

const Toggle:React.FC = () => (
    <Container>
        <ToggleLabel>Light</ToggleLabel>
        <Switch
            checked
            uncheckedIcon={false}
            checkedIcon={false}
            onChange={()=>console.log('mudou')}
        />
        <ToggleLabel>Dark</ToggleLabel>
    </Container>
)

export default Toggle