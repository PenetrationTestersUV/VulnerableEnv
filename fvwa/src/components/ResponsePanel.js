import React, {  Component } from 'react'

function ResponsePanel({messagge}) {

    return (
        <div className="response-panel-container">
            <div className="tile-response-panel">
                <h1>Salida</h1>
            </div>
            <div className="input-group">
                <div>
                    {messagge}
                </div>
            </div>
        </div>
    )
}

export default ResponsePanel
