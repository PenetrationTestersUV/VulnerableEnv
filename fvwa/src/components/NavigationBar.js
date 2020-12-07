import React from 'react';

function NavigationBar() {
    return (
        <div className="sidebar-nav">
            <nav class="nav flex-column sidebar-content">
                <a class="nav-link sidebar-item" href="#">Active</a>
                <a class="nav-link sidebar-item" href="#">Link</a>
                <a class="nav-link sidebar-item" href="#">Link</a>
                <a class="nav-link sidebar-item" href="#">Disabled</a>
            </nav>
        </div>
    );
}

export default NavigationBar;