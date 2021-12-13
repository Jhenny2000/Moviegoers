import { BsPlayCircle, BsThreeDotsVertical, BsPlusCircle } from 'react-icons/bs'
import styled from 'styled-components';

export const Play = styled(BsPlayCircle)`
    width: 32px;
    height: 32px;
    /* margin-right: 20px; */
    position: absolute;
    left: 4%;
    :hover{
        color: #00A8E1;
        cursor: pointer;
    }
`
export const Add = styled(BsPlusCircle)`
    width: 32px;
    height: 32px;
    position: absolute;
    right: 17%;
    :hover{
        color: #00A8E1;
        cursor: pointer;
    }
`
export const Desc = styled(BsThreeDotsVertical)`
    width: 32px;
    height: 32px;
    position: absolute;
    right: 2%;
    :hover{
        color: #00A8E1;
        cursor: pointer;
    }
`

export const Icons = styled.div`
    height: 32px;
    width: inherit;
    position: relative;
    top: 15%;
`

export const Text = styled.p`
    font-weight: bold;
    font-size: 17px;
    position: absolute;
    left: 22%;
    margin-top: 4px;
    :hover{
        color: #00A8E1;
        cursor: pointer;
    }
`