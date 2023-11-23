import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Error from './Error'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'

const InputSubmit = styled.input`
background-color: #9497ff;
border: none;
width: 100%;
padding: 10px;
color: #fff;
font-weight: 700;
text-transform: uppercase;
font-size: 20px;
border-radius: 5px;
margin-top: 30px;
transition: background-color .3s ease;
&:hover {
    background-color: #7a7dfe;
    cursor: pointer;    
}
`


const Form = ({setMonedas}) => {

    const [cripto, setCrito] = useState('')
    const [error, setError] = useState(false)
    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas)
    const [criptomoneda, SelectCriptomoneda] = useSelectMonedas('Elige tu Criptomoneda', cripto)

    useEffect(() => {
        const consultApi = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
            const res = await fetch(url);
            const resp = await res.json();
            const ArrayCriptos = resp.Data.map(criptp => {
                const objet = {
                    id: criptp.CoinInfo.Name,
                    name: criptp.CoinInfo.FullName
                }
                return objet;
            })
            setCrito(ArrayCriptos)
        }

        consultApi();
    }, [])

    const hadleSubmit = e => {
        e.preventDefault();
        if ([moneda, criptomoneda].includes('')) {
            setError(true)
            return;
        }
        setError(false)

        setMonedas({ moneda, criptomoneda })

    }

    return (
        <>
            {error && <Error >Todos los campos son obligatorios</Error>}
            <form
                onSubmit={hadleSubmit}
            >
                <SelectMonedas />
                <SelectCriptomoneda />

                <InputSubmit
                    type="submit"
                    value='Cotizar'
                />
            </form>
        </>
    )
}

export default Form
