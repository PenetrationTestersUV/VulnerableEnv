import React from 'react';
import { Link } from 'react-router-dom';
import {InjectionDataMenu} from './DataMenu'

function NavigationBar() {
    return (
        <div className="sidebar-nav">
            <nav class="nav flex-column sidebar-content">
                {
                    InjectionDataMenu.map( item => {
                        return (
                            <Link to={item.url} class="nav-link sidebar-item">
                                {item.title}
                            </Link>
                        )
                    })
                }
            </nav>
        </div>
    );
}

export default NavigationBar;