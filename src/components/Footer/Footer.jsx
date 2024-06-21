import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';


export default class Footer extends Component {
  render() {
    return (
      <div>
        <Container>
        <footer>
        <p>Author: Abdullah Al Noman</p>
        <p><a href="mailto:alnomaan20@gmail.com">Mail : alnomaan20@gmail.com</a></p>
        </footer> 
        </Container>
      </div>
    )
  }
}
