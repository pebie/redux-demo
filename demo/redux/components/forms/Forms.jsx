/**
* Created by Pebie on 22/09/15.
*/

import "./forms.scss"

import React, { Component, PropTypes } from 'react';
import { Input, ButtonInput, Row, Col } from 'react-bootstrap';

class Forms extends Component {
  constructor(props) {
    super(props);
  }

  onAddComic(){
    var result = {
      name: this.refs.name.getValue(),
      writter: this.refs.writter.getValue(),
      artist: this.refs.artist.getValue(),
      serie: this.refs.serie.getValue(),
      pageCount: this.refs.pageCount.getValue(),
      description: this.refs.description.getValue(),
      thumbnail: this.refs.thumbnail.getValue(),
    }
    this.props.onAddComic(result);
  }

  render() {
    let { onAddComic } = this.props;
    return (
      <div className="forms header-offset">
        <h2>Add a Comic !</h2>
        <form>
          <Row>
            <Col md={6}><Input label="Name" type="text" ref="name"/></Col>
            <Col md={6}><Input label="Writter" type="text" ref="writter"/></Col>
          </Row>
          <Row>
            <Col md={6}><Input label="Artist" type="text" ref="artist"/></Col>
            <Col md={6}><Input label="Serie" type="text" ref="serie"/></Col>
          </Row>
          <Row>
            <Col md={6}><Input label="Page count" type="text" ref="pageCount"/></Col>
            <Col md={6}><Input label="Image" type="text" ref="thumbnail"/></Col>
          </Row>
          <Row>
            <Col md={12}><Input label="Description" type="textarea" ref="description"/></Col>
          </Row>
          <ButtonInput
            value="Submit Your Comic !"
            onClick={this.onAddComic.bind(this)}
            bsStyle="success"
            bsSize="large" />
        </form>
      </div>
    );
  }
}

Forms.propTypes = {
  onAddComic: PropTypes.func.isRequired
};

export default Forms;
