import React, { Component } from 'react'

export default class Publisher extends Component {
  constructor(props){
    super(props);
    this.state={
      pubport: "",
      pubaddr:"",
      pubtopic:""
  };
    this.handleSubmit= this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    const{pubport, pubaddr,pubtopic}= this.state;
    console.log(pubport, pubaddr, pubtopic);
  }
  render() {
    return (
      <form>
        <div className="auth-inner">
        <h3>Publisher</h3>

        <div className="mb-3">
          <label>IP address</label>
          <input type="text" className="form-control" placeholder="IP address"
          onChange={e=>this.setState({pubaddr: e.target.value})}/>
        </div>
        
        <div className="mb-3">
          <label>Port</label>
          <input type="text" className="form-control" placeholder="Port"
          onChange={e=>this.setState({pubport: e.target.value})}/>
        </div>

        <div className="mb-3">
          <label>Topics</label>
          <input type="text" className="form-control" placeholder="topics"
          onChange={e=>this.setState({pubtopic: e.target.value})}/>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
      </form>
    )
  }
}
