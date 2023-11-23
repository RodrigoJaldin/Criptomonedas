import React from 'react'
import styled from '@emotion/styled'

const ResultDiv = styled.div`
color: #fff;
font-family: 'Lato', sans-serif;
display: flex;
align-items: center;
gap: 1rem;
margin-top: 30px;

`
const Imagen = styled.img`
display: block;
width: 110px;
`
const Texto = styled.p`
font-size: 18px;
`

const Precio = styled.p`
font-size: 30px;
span{
    font-weight: 700;

}
`
const Result = ({ resultado }) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE, IMAGEURL } = resultado;
    return (
        <ResultDiv>
            <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen"></Imagen>
            <div>
                <Precio>El Precio es de: <span>{PRICE}</span></Precio>
                <Texto>Precio mas alto del dia: <span>{HIGHDAY}</span></Texto>
                <Texto>Precio mas bajo del dia: <span>{LOWDAY}</span></Texto>
                <Texto>Variacion ultimas 24 Horas <span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Ultima Actualizacion <span>{LASTUPDATE}</span></Texto>
            </div>

        </ResultDiv>
    )
}

export default Result
