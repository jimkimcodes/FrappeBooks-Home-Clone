import React from 'react'
import SmallCard from './SmallCard'
import './More.css'

import {Button} from 'react-bootstrap'

export default function More() {
    const moreData=[
        {
            id:1,
            title:'Journal Entries',
            description: 'Record ad-hoc accounting entries for entering expenses, opening entires, and bank payments.'
        },
        {
            id:2,
            title:'Invoice Templates',
            description: 'Beautiful Invoice templates that you can further customize with the color and logo of your brand.'
        },
        {
            id:3,
            title:'Works Offline',
            description: 'Frappe Books uses a local file from your computer and when you create invoices, it saves them on your local machine.'
        },
        {
            id:4,
            title:'Privacy by Default',
            description: 'Frappe Books data is never uploaded to a cloud, which means you never compromise your ownership and privacy.'
        },
        {
            id:5,
            title:'Portable',
            description: 'Frappe Books uses the lightweight SQLite database which uses simple files to store their data.'
        },
        {
            id:6,
            title:'Financial Reports',
            description: 'Frappe Books comes with standard financial reports like Profit and Loss Statement, Trial Balance and Balance Sheet.'
        },
        {
            id:7,
            title:'Multi-currency',
            description: 'Record your invoices in your customer’s currency and Frappe Books will convert them in your currency.'
        },
        {
            id:8,
            title:'Open Source',
            description: 'Frappe Books is free and open-source software. Help us improve it by reporting issues or fixing them on GitHub.'
        },

    ]
    return (
         
        <div className=" py-5">
            <div className="container my-5" >
                <div className="row mx-1 ">
                    <h5 className="d-block d-md-none">More Features</h5>
                    <h2 className="d-none d-md-block">More Features</h2>
                </div>

                <div className="row mb-2 mb-lg-5 pb-5" >
                    { moreData.map(item => <SmallCard key={item.id} title={item.title} description={item.description} />) }  
                </div>
                <div className="row mt-3 mx-1">
                    <div className="container blue-container text-center py-5 px-2 p-lg-5 rounded">
                        <span className="dot dot-top"></span>
                        <span className="dot dot-bottom"></span>
                        <span className="dot dot-left"></span>
                        <div className="container px-lg-5 inner">
                            <h4 className="d-block d-md-none">Free Desktop Accounting Software for Small Businesses</h4>
                            <h1 className="mt-5 mb-3 d-none d-md-block">Free Desktop Accounting Software for Small Businesses</h1>
                            <p className="text-secondary font-plus">Frappe Books simplifies invoicing, billing, and accounting for freelancers and small business owners. </p>
                            <Button variant="primary" size="lg" className="px-5 py-3 mt-4 rounded">Download for free</Button><br />
                            <small>Available for macOS, Linux and Windows</small>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

