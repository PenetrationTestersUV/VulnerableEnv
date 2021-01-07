import React from 'react'

function InjectionForm() {
  return (
      <div>
        <h1>Inyección de código</h1>
        <form className="vertical-center-content" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="exampleInputEmail1">Dirección IP</label>
            <input type="text" className="form-control" id="pinginput" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleChange}></input>
            <button id="ping" type="submit" className="btn btn-primary">Ping</button>
          </div>
        </form>
      </div>
  )
}

export default InjectionForm
