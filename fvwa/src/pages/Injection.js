import { stderr, stdout } from 'process';
import React from 'react'
import InjectionForm from '../components/InjectionForm';
import ResponsePanel from '../components/ResponsePanel'

class Injection extends React.Component {
  constructor(props) {
    super();
    this.state = { ipValue: '', output: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ ipValue: event.target.value });
  }

  handleSubmit(event) {
    alert("Algo xd");
  }

  render() {
    return (
      <div className="vertical-center-content">
        <div className="row">
          <div className="col-md-5 col-sm-12 offset-md-1">
            <InjectionForm/>
          </div>
          <div className="col-md-5 col-sm-12">
            <ResponsePanel response="Aqui se ve la salida"/>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    )
  }
}

export default Injection;
