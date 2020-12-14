import React from 'react'
import InjectionForm from '../components/InjectionForm'
import ResponsePanel from '../components/ResponsePanel'

function Injection() {
  return (
    <div class=" vertical-center-content">
      <div className="row">
          <div class="col-md-5 col-sm-12 offset-md-1">
            <InjectionForm />
          </div>
          <div className="col-md-5 col-sm-12">
            <ResponsePanel />
          </div>
          <div className="col-md-1"></div>
        </div>
    </div>
  )
}

export default Injection
