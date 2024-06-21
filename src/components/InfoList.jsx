import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { data } from './Data';

class InfoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      itemsPerPage: 20,
      changedValue :'',
    };
  }





  handleOnChange = (e) => {
    // console.log(e.target.value)
    this.setState({
      changedValue : e.target.value
    })


  }



  render() {
    const { currentPage, itemsPerPage } = this.state;

    // Logic for displaying current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    return (
      <div>
        <Container>
          <div className='header'>
            <h1 className='text-center mt-4 header'>Customer Information</h1>
          </div>
          <div className='InfoBox'>
            <Form className='text-center mb-4'>
              <input type="text" onChange={this.handleOnChange} placeholder='Search Contacts' />
            </Form>
            <Table>
              <thead className='tableHead' style={{ backgroundColor: '#FF6969' }}>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.filter((item) => {
                return this.state.changedValue.toLowerCase() === ''
                  ? item
                  : item.first_name.toLowerCase().includes(this.state.changedValue);
              }).map((item) => (
                  <tr key={item.id}>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                  </tr>
                ))}
              </tbody>
            </Table>

            {/* Pagination controls */}
            <div className="pagination">
              <button
                onClick={() => this.setState({ currentPage: currentPage - 1 })}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <button
                onClick={() => this.setState({ currentPage: currentPage + 1 })}
                disabled={indexOfLastItem >= data.length}
              >
                Next
              </button>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default InfoList;
