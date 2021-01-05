import React from 'react'
import { Container,Profile,Welcome,UserName } from './styles'

const MainHeader:React.FC = () => {
    return (
        <Container>
            <h1>toggle</h1>
            <Profile>
                <Welcome>welcome</Welcome>
                <UserName>username</UserName>
            </Profile>
        </Container>
    )
}

export default MainHeader