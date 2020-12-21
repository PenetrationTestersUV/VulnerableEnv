import React from 'react'

const ResponsePanel = () => {
    return (
        <div className="response-panel-container">
            <div className="tile-response-panel">
                <h1>Salida</h1>
            </div>
            <div class="input-group">
                <textarea class="form-control output-size" readOnly></textarea>
            </div>
        </div>
    )
}

export default ResponsePanel
