import React from 'react'
import Card from './Card'


export default function CardContainer() {

    const data = [
        {
            id:1,
            title:'Small Business Accounting',
            description: 'Everything you need from a small, simple small business accounting tool. Billing, Payments, Ledgers, Invoices, Reporting. A fully featured replacement for tools like GNU Cash and Tally.'
        },
        {
            id:2,
            title:'No Cloud', 
            description:'Cloud apps make you dependent on service provider. A service like that is never truly free, and it does not have to be like that. With desktop apps, you have much more control over your data.'
        },
        {  
            id:3,
            title:'Free and Open Source',
            description:'Frappe Books is free software. This means it comes with the four essential freedoms. You are allowed to run it as you wish, you can look at its source code and modify it.'

        },
        {
            id:4,
            title:'Modern Web Friendly UI',
            description:'Frappe Books is built with our homegrown framework FrappeJS which is based on NodeJS and bundled with Electron. But it is still designed in a way how a desktop software functions.'

        }
    ]

    return (
        <div className="bg-light py-5">
            <div className="container my-md-5" >
                <div className="row">
                    { data.map(item => <Card key={item.id} title={item.title} description={item.description} />) }  
                </div>

            </div>
        </div>
    )
}













