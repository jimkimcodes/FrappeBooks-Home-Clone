import React from 'react'
import styled from 'styled-components'

export default function Card(props) {

    return (
        <CardWrapper className="mt-5 ml-4 mr-4 ml-md-5 mr-md-0 p-4 col-md-5 border">
            <h5 className="d-block d-md-none">{props.title}</h5>
            <h3 className="d-none d-md-block">{props.title}</h3>

            <div className="text-secondary mb-4 font-plus">
                {props.description}
            </div>
        </CardWrapper>
    )
}


const CardWrapper = styled.div`

    border-radius: 20px;
    background: #FFFFFF;
    transition: all 0.26s ease-in-out;
    :hover{
        border: 0.2px solid grey !important;
    }

`




