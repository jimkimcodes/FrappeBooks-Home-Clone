import React from 'react'
import face_img from '../images/face_img.png';
import comic from '../images/comic.jpeg'
import { Button } from 'react-bootstrap';

export default function Face() {  
    const imgStyle = {
        width:'600px',
        height:'520px'
    }  
    return (
        <div className="container pt-5 mt-lg-5 mb-5">
            <div className="row ">
                <div className="col-md-7 pr-0 pb-5 pt-lg-5">
                    <h3 className="d-block d-md-none">Free, Modern Desktop Accounting</h3>
                    <h1 className="d-none d-md-block" style={{marginTop:'130px'}}>Free, Modern Desktop Accounting</h1>
                    <div className="text-secondary mb-1 mt-4 container-fluid pl-0 font-plus">Simple, well designed, desktop accounting software for freelancers and small businesses. Free and Open Source.</div>
                    <div className="mt-4">
                        <Button variant="primary" size="lg" className="px-4 py-2 rounded">Download</Button>
                        <Button id="github-face-button" size="lg" className="ml-4 text-primary px-4 py-2 rounded">Github</Button>
                    </div>
                </div>
                <div className="col-md-5 pl-0 d-none d-md-block ">
                    <img className="" src={face_img} alt="" style={imgStyle} />
                </div>
            </div>

            <img src={comic} alt="" className="img-fluid mb-5" id="comic"/>
        </div>
    )
}


