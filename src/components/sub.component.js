import React, { Component } from 'react'

export default class Subscriber extends Component {
  constructor(props){
    super(props);
    this.state={
      subport: "",
      subaddr:"",
      subtopic:""
  };
    this.handleSubmit= this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    const{subport, subaddr,subtopic}= this.state;
    console.log(subport, subaddr, subtopic);
  }
  render() {
    return (
      <form>
        <div className="auth-inner">
        <h3>Subscriber</h3>

        <div className="mb-3">
          <label>IP address</label>
          <input type="text" className="form-control" placeholder="IP address"
          onChange={e=>this.setState({subaddr: e.target.value})}/>
        </div>
        
        <div className="mb-3">
          <label>Port</label>
          <input type="text" className="form-control" placeholder="Port"
          onChange={e=>this.setState({subport: e.target.value})}/>
        </div>

        <div className="mb-3">
          <label>Topics</label>
          <input type="text" className="form-control" placeholder="topics"
          onChange={e=>this.setState({subtopic: e.target.value})}/>
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
