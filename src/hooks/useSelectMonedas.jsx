import {useState} from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
color: #fff;
display: block;
font-family: 'Lato',sans-serif;
font-size: 24px;
font-weight: 700;
margin: 15px 0;

`
const Select = styled.select`
width: 100%;
display: block;
padding: 14px;
font-size: 18px;
border-radius: 10px;
`

const useSelectMonedas = (label, opciones) => {
    const [state, setState] = useState('')


    const SelectMonedas = () => (
        <>
            <Label>{label}</Label>
            <Select
                value={state}
                onChange={e => setState(e.target.value)}
            >
                <option> Seleccione </option>
                {Array.isArray(opciones) && opciones.map(opcion => (
                    <option
                        key={opcion.id}
                        value={opcion.id}>
                        {opcion.name}
                    </option>
                ))}

            </Select>
        </>
    )
    return [state,SelectMonedas]

}

export default useSelectMonedas
