import React, { Component } from 'react'
import TransactionForm from './TransactionForm'
import { connect } from "react-redux";
import { Container, Row, Col, Button, Table } from 'reactstrap';
import * as actions from "../actions/registrationActions"
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
                <hr />
                <Container fluid={true}>
    
      <Table>
      <thead>
        <tr>
         
          <th>First Name</th>
          <th>Last Name</th>
          <th>Father Name</th>
          <th>Email Id</th>
          <th>Address </th>
          <th>Mobile  </th>
          <th>Gender  </th>
          <th>BOD  </th>
          <th>Country  </th>
          <th>Action  </th>
        </tr>
      </thead>
      <tbody>
                        {this.props.list.map((item, index) => {
                            return <tr key={index}>
                                {/* <td> <img src={`${item.file}`}></img> </td> */}
                                <td>{item.firstname}</td>
                                <td>{item.lastname}</td>
                                <td>{item.fathername}</td>
                                <td>{item.emailid}</td>
                                <td>{item.address}</td>
                                <td>{item.mobileno}</td>
                                <td>{item.radio1}</td>
                              
                                <td>{item.bod}</td>
                                <td>{item.selectMulti}</td>
                               
                                <td><Button color="warning mb-1" onClick={() => this.handleEdit(index)}>Edit</Button>
                               <Button color="danger" onClick={() => this.handleDelete(index)}>Delete</Button></td>
                            </tr>
                        })}
                    </tbody>
                </Table>
                
                </Container>
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