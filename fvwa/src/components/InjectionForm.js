import React from 'react'

function InjectionForm() {
  return (
      <div>
        <h1>Inyección de código</h1>
        <form className="vertical-center-content">
          <div class="form-group">
            <label for="exampleInputEmail1">Correo</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
            <small id="emailHelp" class="form-text text-muted">No compartiremos tus datos con nadien</small>
            <button type="submit" class="btn btn-primary">Imprimir correo</button>
          </div>
        </form>
      </div>
  )
}

export default InjectionForm
