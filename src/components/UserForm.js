import React, { Component } from 'react'
import { FormStudent } from "./FormStudent";
import {FormEdu} from './FormEdu';
import { FormExp } from "./FormExp";
import { FormCourse } from "./FormCourse";
import {Confirm} from './Confirm';
import {Success} from './Success';

export class UserForm extends Component {
   
    state= { //informacion que se va a recopilar del usuario
        step:1,
        firstName: '', //Nombre
        lastName: '', //apellido paterno
        email: '',
        city: '',
        bio: '',

    }

    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        });
    }

    //handle field change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    render() {
        const {step} = this.state;
        const {firstName, lastName, email, city, bio} = this.state;
        const values = {firstName, lastName, email, city, bio}

        switch(step){
            case 1:
                return(
                    <FormStudent nextStep={this.nextStep} handleChange={this.handleChange} values={values}/>
                )
            case 2:
                return(
                    <FormEdu nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values}/>
                )
            case 3:
                return(
                    <FormExp nextStep={this.nextStep} handleChange={this.handleChange} values={values}/>
                )  
            case 4:
                return(
                    <FormCourse nextStep={this.nextStep} handleChange={this.handleChange} values={values}/>
                )
            case 5:
                return(
                    <Confirm nextStep={this.nextStep} prevStep={this.prevStep} values={values} />
                )  
            case 6:
                return(
                    <Success />
                )
        }
    }
}

export default UserForm
