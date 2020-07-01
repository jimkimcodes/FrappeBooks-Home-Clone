import React from 'react'
import teamURL from '../images/team.webp'

export default function Team() {
    return (
        <div className="bg-light py-5">
            <div className="container my-md-5">
                <div className="row mx-2 mx-md-5 ">
                    <h5 className="d-block d-md-none">From the Team Behind ERPNext</h5>
                    <h2 className="d-none d-md-block">From the Team Behind ERPNext</h2>
                    <span className="text-secondary font-plus">We have been building business software for over a decade now. Learning from our mistakes and picking the best parts of our flagship product ERPNext, we came up with a simple app that does one thing well, Accounting.</span>
                </div>

                <div className="row mt-5 mx-2 mx-md-5 ">
                    <img className="img-fluid " src={teamURL} alt="" style={{transition: 'opacity 1s ease-in-out', borderRadius:'12px'}}/>
                </div>  
            </div>
        </div>
    )
}
