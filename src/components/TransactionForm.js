import React, { Component } from 'react'
import '../bootstrap.css'
import { connect } from 'react-redux'
import * as actions from "../actions/transactionActions"
import { bindActionCreators } from "redux";
import '../countries.json'
import '../phonecode.json'
class TransactionForm extends Component {

    state = {
        ...this.returnStateObject()
    }

    returnStateObject() {
        if (this.props.currentIndex == -1)
            return {
                title:'',
                fname:'',
                lname:'',
                birthday:'',
                ucountries:'',
                gender:'',
                citi1:'',
                citi2:'',
                citi3:'',
                citi4:'',
                citi5:'',
                phone:'',
                titlephone:'',
                passport:'',
                expsalary:''
                
            }
        else
            return this.props.list[this.props.currentIndex]  
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentIndex != this.props.currentIndex || prevProps.list.length != this.props.list.length) {
            this.setState({ ...this.returnStateObject() })
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.props.currentIndex == -1)
            this.props.insertTransaction(this.state)
        else
            this.props.updateTransaction(this.state)
    }

    render() {
        const countries = require("../countries.json");
        const phonecode = require("../phonecode.json");

            return (
            <div class = "card">
            <form onSubmit= {this.handleSubmit} autoComplete="off">
                    <div class="form-group row">
                        <label class="col-form-label">Title:</label><h4 style={{color:"red"}}>*</h4>
                        <div class="col-1">
                        <select class="form-control" name="title" value = {this.state.title} onChange = {this.handleInputChange} required>
                                <option selected value=" " >--Please Select--</option>
                                <option value="Mr" >Mr</option>
                                <option value="Miss">Miss</option>
                                <option value="Mrs">Mrs</option>
                                <option value="Ms">Ms</option>
                        </select>
                        </div>

                        <label class="col-form-label">Firstname:</label><h4 style={{color:"red"}}>*</h4>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name ="fname" placeholder="Firstname" value = {this.state.fname} onChange = {this.handleInputChange} required></input>
                        </div>
                        
                        <label class="col-form-label">Lastname:</label><h4 style={{color:"red"}}>*</h4>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" name ="lname" placeholder="Lastname" value = {this.state.lname} onChange = {this.handleInputChange} required></input>
                        </div>
                    </div>

                    <div class="form-group row">
                    <label class="col-form-label">Birthday:</label><h4 style={{color:"red"}}>*</h4>
                        <div class="col-4">
                            <input class="form-control" type="date" name ="birthday" value = {this.state.birthday} onChange = {this.handleInputChange} required></input>
                        </div>

                        <label class="col-form-label">Nationality:</label>
                        <div class="col-6">
                        <select class="form-control" name="ucountries" value = {this.state.ucountries} onChange = {this.handleInputChange}>
                        {
                           countries.map(item => (
                                <option key = {item.code} value = {item.name}>{item.name}</option>
                           )) 
                        }
                        </select>
                        </div>
                    </div>

                    <div class="form-group row">
                    <label for="inputCitizenID" class="col-form-label" >CitizenID:</label><h4 style={{color:"red"}}>*</h4>
                        <div class="col-sm-6">
                            <fieldset onChange = {this.handleInputChange}>
                            <input type="num" class="input-cart-number" maxlength="1" name ="citi1" value = {this.state.citi1} required onChange = {this.handleInputChange}></input>
                            <input type="num" class="input-cart-number2" maxlength="4" name ="citi2" value = {this.state.citi2} required onChange = {this.handleInputChange}></input>
                            <input type="num" class="input-cart-number3" maxlength="5" name ="citi3" value = {this.state.citi3} required onChange = {this.handleInputChange}></input>
                            <input type="num" class="input-cart-number4" maxlength="2" name ="citi4" value = {this.state.citi4} required onChange = {this.handleInputChange}></input>
                            <input type="num" class="input-cart-number5" maxlength="1" name ="citi5" value = {this.state.citi5} required onChange = {this.handleInputChange}></input>
                            </fieldset>
                        </div>
                    </div>
                    
                    <div class="form-group row">
                    <label class="col-form-label">Gender:</label>
                            <div class="col-1 form-check form-check-inline">  
                                <input class="form-check-input" type="radio" name="gender"  value = "Male"  onChange = {this.handleInputChange}></input>
                                <label class="form-check-label">Male</label>
                            </div>
                            <div class="col-1 form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="gender"  value = "Female" onChange = {this.handleInputChange}></input>
                                <label class="form-check-label">Female</label>
                            </div>
                                <div class="col-1 form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="gender"  value = "Unisex" onChange = {this.handleInputChange}></input>
                                <label class="form-check-label">Unisex</label>
                            </div>
                    </div>

                    <div class="form-group row">
                    <label for="exampleSelect1" class="col-form-label">Mobile:</label><h4 style={{color:"red"}}>*</h4>
                        <div class="col-1">
                        <select class="form-control" name="titlephone" value = {this.state.titlephone} onChange = {this.handleInputChange} >
                        {
                           phonecode.map(item => (
                                <option key = {item.number} value = {item.number} style={{backgroundImageurl:({})}}>
                                    {/*<div><img src={item.flag} style= {{width:"2px",height:"1"}}></img></div>{item.flag}*/}{item.number}&nbsp;{item.name}</option> 
                           )) 
                        }
                        </select>
                        </div>
                        <div class="col-4">
                            <input class="form-control" type="tel" maxlength="10" pattern="^0([8|9|6])([0-9]{8}$)" placeholder="e.g. 081 234 5678 (TH)" name = "phone" value = {this.state.phone} onChange = {this.handleInputChange} required></input>
                        </div>
                    </div>

                    <div class="form-group row">
                    <label class="col-form-label">Passport No:</label>
                        <div class="col-4">
                            <input class="form-control" type="text" placeholder="e.g. PA12345678" name = "passport" value = {this.state.passport} onChange = {this.handleInputChange}></input>
                        </div>
                    </div>
                    <div class="form-group row">
                    <label  class="col-form-label">Expected Salary:</label><h4 style={{color:"red"}}>*</h4>
                        <div class="col-4">
                            <input class="form-control" type="text"  name = "expsalary" value = {this.state.expsalary} onChange = {this.handleInputChange} required  placeholder="e.g. 1,000,000"></input>
                        </div>

                        <label class="col-2">THB</label>
                        <div class ="col-4">
                            <button class="btn btn-success">SUBMIT</button>
                        </div>
                    </div>
                </form>
                </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        list: state.list,
        currentIndex: state.currentIndex
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        insertTransaction: actions.insert,
        updateTransaction: actions.update
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm)