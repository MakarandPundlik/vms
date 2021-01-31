import React,{useState} from 'react';
import isValid from '../validator/Validate';
import firebase from '../Firebase';
function Contact(props) {
    
    const [state,setState] = useState({
        email:'',
        questions:'',
       
    });
    const handleChange = (e) =>{
        setState({...state,[e.target.id]:e.target.value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        let profile={};
        profile.email=state.email;
        profile.questions=state.questions;
        profile.today = new Date();

        let promt = '';
       if(isValid(profile))
       {
            firebase.firestore().collection('test').add({
                email:profile.email,
                questions:profile.questions,
                Date : profile.today.getDate()+'-'+parseInt(profile.today.getMonth()+1)+'-'+profile.today.getFullYear()
            });
           promt='Thank You for your Response'
       }
        
       else promt='Please check your emailid';

       setState({
           email:'',
           questions:''
       });
       alert(promt);
    }
    return (
        <div className="container-fluid">
             <h3 style={{fontWeight:'bolder'}} className="my-5 text-cnter">Drop us a line...</h3>
        <div className="row my-5">
        <div className="col-sm-6 col-md-4 mx-auto">
       
        <div className="mb-3 ">
        <label for="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" value={state.email} className="form-control" id="email" placeholder="name@example.com" onChange={(e)=>handleChange(e)}/>
        </div>
        <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">Have any Questions?</label>
        <textarea className="form-control" value={state.questions} id="questions" rows="3"  onChange={(e)=>handleChange(e)}></textarea>
            </div>
            <div className="btn btn-get-started mt-3" onClick={(e)=>handleSubmit(e)}>Submit</div>
        </div>
        
        </div>
        <div className="row">
       
        
        <h4 className="text-center" style={{fontWeight:'bolder'}}>Contact Us</h4>
        
        <div className="col-sm-12 col-md-4 py-5">
        <ion-icon name="mail-sharp"></ion-icon>
        <h5>vmscontrols@gmail.com</h5>
        </div>    
        <div className="col-sm-12 col-md-4 py-5">
        <ion-icon name="call-sharp"></ion-icon>
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