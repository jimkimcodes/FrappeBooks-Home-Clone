import React, { Component } from 'react'
import './Examples.css'

import dashboardURL from '../images/dashboard.png'
import invoicingURL from '../images/invoicing.png'
import ledgerURL from '../images/ledger.png'
import paymentsURL from '../images/payments.webp'
import reportsURL from '../images/reports.png'


export default class ExamplesContainer extends Component {

    imgs = [dashboardURL,
            invoicingURL,
            ledgerURL,
            paymentsURL,
            reportsURL]

    state={
        imgURL: dashboardURL
    }

    handleClick = (e) => {
        let prev = document.getElementsByClassName('active')[0];
        prev.classList.remove('active');
        e.target.classList.add('active');
        let newImg = this.imgs.find(item => item.slice().indexOf(e.target.id) >= 0)

        this.setState({
            imgURL: newImg
        })
    }

    render() {
        return (
            <div className=" py-5">
            <div className="container my-5">
                <div className="row mx-2 mx-md-5 ">
                    <h5 className="d-block d-md-none">Everything You Need</h5>
                    <h3 className="d-none d-md-block">Everything You Need</h3>
                    <span className="text-secondary font-plus">Create professional invoices, generate beautiful PDFs and send them to your customers.</span>

                </div>
                <div className="row mx-2 mx-md-5 border-bottom">
                    <div className=" mt-5" style={{overflowX:"auto", whiteSpace:"nowrap", overflow:"auto"}}>
                    <div className="nav nav-tabs d-flex flex-nowrap" >
                        <a className="nav-link py-4 py-4 active" href id="dashboard"  onClick={(e)=>this.handleClick(e)}>
				            Dashboard
			            </a>
                        <a className="nav-link py-4" href id="invoicing"  onClick={(e)=>this.handleClick(e)}>
				            Invoicing
			            </a>
                        <a className="nav-link py-4" href id="payments"  onClick={(e)=>this.handleClick(e)}>
				            Payments
			            </a>
                        <a className="nav-link py-4" href id="reports"  onClick={(e)=>this.handleClick(e)}>
				            Financial Reports
			            </a>
                        <a className="nav-link py-4" href id="ledger" onClick={(e)=>this.handleClick(e)}>
				            Ledger
			            </a>
                    </div>
                    </div>
                </div>
                <div className="row mt-4 mx-2 mx-md-5 ">
                    <img className="img-fluid rounded border" src={this.state.imgURL} alt="" style={{transition: 'opacity 1s ease-in-out'}}/>
                </div>          
            </div>
        </div>
        )
    }
}
