import React from 'react'
import styled from 'styled-components'


export default function SmallCard(props) {
    return (
        <div className="col-12 col-sm-6 col-lg-3 mt-4">
            <CardWrapper className="card card-sm h-100 p-4  border">
                <h6 className="">{props.title}</h6>

                <div className="text-secondary ">
                    {props.description}
                </div>
            </CardWrapper>
        </div>
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