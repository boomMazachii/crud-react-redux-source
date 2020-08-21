import React, { Component } from 'react'
import '../bootstrap.css'
import TransactionForm from './TransactionForm'
import { connect } from "react-redux";
import * as actions from "../actions/transactionActions"
import { bindActionCreators } from "redux";


class TransactionList extends Component {


    handleEdit = (index) => {
        this.props.updateTransactionIndex(index)
    }

    handleDelete = (index) => {
        this.props.deleteTransaction(index)
    }

 
    render() {
        return (
            
            <div>
                <TransactionForm />
                <div class = "card">
                <table id="dt-all-checkbox" class="table-striped" >
                    <thead>
                        <tr>
                        <th scope="col" style= {{textAlign :"center"}}>CitizenID</th>
                        <th scope="col" style= {{textAlign :"center"}}>Name</th>
                        <th scope="col" style= {{textAlign :"center"}}>Gender</th>
                        <th scope="col" style= {{textAlign :"center"}}>Mobile Phone</th>
                        <th scope="col" style= {{textAlign :"center"}}>Nationality</th>
                        <th scope="col" style= {{textAlign :"center"}}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           this.props.list.map((item, index) =>{
                                return <tr key = {index}>
                                    <td style= {{width:"250px",textAlign :"center"}}>{item.citi1}-{item.citi2}-{item.citi3}-{item.citi4}-{item.citi5}</td>
                                    <td style= {{width:"450px"}}>{item.title}&nbsp;{item.fname}&nbsp;{item.lname}</td>
                                    <td style= {{width:"225px",textAlign :"center"}}>{item.gender}</td>
                                    <td style= {{width:"300px",textAlign :"center"}}>{item.titlephone}{item.phone}</td>
                                    <td style= {{width:"270px",textAlign :"center"}}>{item.ucountries}</td>
                                    <td style= {{width:"200px"}}><button onClick={() => this.handleEdit(index)} class="btn btn-primary">Edit</button>&nbsp;
                                        <button onClick={() => this.handleDelete(index)} class="btn btn-danger">Delete</button>
                                    </td> 
                                </tr>
                            })
                        }
                    </tbody>
                    </table>
                </div>
            </div>
           
            

        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        updateTransactionIndex: actions.updateIndex,
        deleteTransaction: actions.Delete
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(TransactionList)