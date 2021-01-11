import React from 'react'
import {MdDashboard , MdArrowDownward ,MdArrowUpward ,MdExitToApp} from 'react-icons/md'
import logoImg from '../../assets/logo.svg'
import { Container,Header,LogImg,Title,MenuContainer ,MenuItemLink} from  './styles'

const Aside:React.FC = () => {
    return (
        <Container>
            <Header>
                <LogImg src={logoImg} alt="Logo" />
            </Header>
            <MenuContainer>
                <MenuItemLink href="#">
                    <MdDashboard />
                    DashBoard
                    </MenuItemLink>

                <MenuItemLink href="#">
                    <MdArrowUpward />
                    111
                </MenuItemLink>

                <MenuItemLink href="#">
                    <MdArrowDownward />
                    222
                </MenuItemLink>

                <MenuItemLink href='#'>
                    <MdExitToApp />
                </MenuItemLink>
            </MenuContainer>
        </Container>
    )
}

export default Aside