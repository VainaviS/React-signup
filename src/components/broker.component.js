import React, { Component } from 'react'

export default class Broker extends Component {
  render() {
    return (
      <form>
        <div className="auth-inner">
        <h3>Broker</h3>

        <div className="mb-3">
          <label>Port</label>
          <input
            type="text"
            className="form-control"
            placeholder="Port"
          />
        </div>

        <div className="mb-3">
          <label>IP address</label>
          <input type="text" className="form-control" placeholder="IP address" />
        </div>

        <div className="mb-3">
          <label>Topics</label>
          <input type="text" className="form-control" placeholder="Topics" />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Connect
          </button>
        </div>
      </div>
      </form>
    )
  }
}
