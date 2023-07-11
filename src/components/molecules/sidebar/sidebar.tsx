import { useState } from 'react';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import './sidebar.css'

export const MyComponent = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div>
            <Button
                label="Sidebar"
                onClick={() => setVisible(true)}
            />

            <Sidebar visible={visible} onHide={() => setVisible(false)} className='fixed-sidebar'>
                <h2>Menu</h2>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>

            </Sidebar>
        </div>
    );
}

