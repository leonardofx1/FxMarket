import {Link} from 'react-dom'
import * as S from './style'

import Topics from './Topics'
import adestramento from '../../assets/img/adestramento.jpg'
const NavTopics = () => {

    return (
        <S.ContainerTopics>
            <Topics img={adestramento} link={'oi'} titulo='teste' />
        </S.ContainerTopics>
    )
}

export default NavTopics