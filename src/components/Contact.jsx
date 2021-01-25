import React from 'react';

function Contact(props) {
    return (
        <div className="container-fluid">
             <h3 style={{fontWeight:'bolder'}} className="my-5 text-cnter">Drop us a line...</h3>
        <div className="row my-5">
        <div className="col-sm-6 col-md-4 mx-auto">
       
        <div className="mb-3 ">
        <label for="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">Have any Questions?</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="btn btn-get-started mt-3" onClick={()=>alert('Thank You for your Response')}>Submit</div>
        </div>
        
        </div>
        <div className="row">
       
        
        <h4 className="text-center" style={{fontWeight:'bolder'}}>Contact Us</h4>
        
        <div className="col-sm-12 col-md-4 py-5">
        <ion-icon name="mail-sharp"></ion-icon>
        <h5>vmscontrols@gmail.com</h5>
        </div>    
        <div className="col-sm-12 col-md-4 py-5">
        <ion-icon name="call-outline"></ion-icon>
        <h5>020-24364027</h5>
        </div>    
        <div className="col-sm-12 col-md-4 py-5">
        <ion-icon name="logo-linkedin"></ion-icon>
        <h5>vmscontrols@gmail.com</h5>
        </div>        
        </div>
    </div>
    );
}

export default Contact;