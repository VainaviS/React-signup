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
    const{port, addr,topic}= this.state;
    console.log(port, addr, topic);
    fetch("http://localhost:5000/register",{
      method:"POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept :"application/json",
        "Access-Control-Allow-Origin":"*"
      },
      body: JSON.stringify({
        port,
        addr, 
        topic
      }),

    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data, "Pub Register");
    });
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
