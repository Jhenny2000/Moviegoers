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
    font-size: 14px;
    position: absolute;
    left: 20%;
    margin-top: 6px;
    :hover{
        color: #00A8E1;
        cursor: pointer;
    }
`

export const Info = styled.div` //max 220
    width: 184px;
    max-width: 220px;
    height: 32px;
    /* border: 1px solid hotpink; */
    position: relative;
    top: 23%;
    margin-left: 9px;
`

export const TextP = styled.div`
    width: 74px;
    max-width: 85px;
    height: 20px;
    /* border: 1px solid red; */
    font-weight: bold;
    margin-top: 5px;
    font-size: 12px;
    color: #46d369;
    float: left;
    text-align: left;
    `
export const TextT = styled.div`
    width: 60px;
    max-width: 96px;
    height: 20px;
    /* border: 1px solid red; */
    font-weight: bold;
    margin-top: 5px;
    font-size: 12px;
    color: #fff;
    float: left;
    text-align: left;
`
