import React from "react";
import axios from "axios";

class signup extends React.Component{
    state={
        email:"",
        ShopName:"",
        password:"",
        Confirmpassword:"",
        shopLogo:"",
        description:""
    }
    handleChange=(event)=>{
        event.preventDefault();
        const {name,value}= event.target;
        this.setState({[name]:value});
    }
    formSubmit=()=>{
        if(this.state.Confirmpassword===this.state.password){
            let body={
                email:this.state.email,
                password: this.state.password,
                name: this.state.name,
                shopName:this.state.shopName,
                description:this.state.description,
            }
            axios.post("/auth/signup",body).then(res=>{
                window.location.assign("/dashboard")
            })
        }
    }
    render(){
        return (
            <div className="authCont">
                <div className="signupbody">
                    <div className="info">
                        <p className="signupHeader">W i S</p>
                        <p className="signupPara">Whats-In-store is a Ecomerence  market place where you can buy goods or create a stand
                        and open your very own store!
                        </p>

                    </div>
                    <div className="forminput">
                        <form>
                            <div className="form-group">
                              <label for="exampleFormControlInput1">Email address</label>
                              <input type="email" onClick={this.handleChange} className="form-control" name="email" placeholder="name@example.com"/>
                            </div>
                            <div className="form-group">
                              <label for="exampleFormControlInput1">Shop Name</label>
                              <input type="text" onClick={this.handleChange} className="form-control" name="shopName" placeholder="she sells seaShells"/>
                            </div>
                            <div className="form-group">
                              <label for="exampleFormControlInput1">Password</label>
                              <input onClick={this.handleChange} className="form-control" name="password" type="password" />
                            </div>
                            <div className="form-group">
                              <label for="exampleFormControlInput1"> Confrim Password</label>
                              <input onClick={this.handleChange} className="form-control" name="Confirmpassword" type="password" />
                            </div>
                            <div className="form-group">
                              <label for="exampleFormControlTextarea1">Shop description</label>
                              <textarea onClick={this.handleChange} className="form-control" name="description" rows="3"></textarea>
                            </div>
                            <button type="submit" onClick={this.formSubmit} class="btn btn-info">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}
export default signup;