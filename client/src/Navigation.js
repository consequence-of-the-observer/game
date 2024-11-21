import { useState } from 'react';

export default function Navigation() {
    function Tab_button( screenName ) {
        const [name, changeName] = useState(screenName);
        return(
            <div>
                <button>{name}</button>
            </div>
        )
    }

    return(
        <div>
            <Tab_button screenName="home"/>
        </div>
    )
}