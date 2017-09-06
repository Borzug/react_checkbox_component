import React from 'react';

export default function Checkboxes ({ items, check, getLabelText }) {
    return ( 
        <div> 
            {items.map(item => {
                return (
                    <div key = {item.id}>
                        <label>
                            <input
                                id = {item.id}
                                type = "checkbox"        
                                checked = {item.checked}
                                onClick = {check}
                                value = {item.value}
                            />
                            {getLabelText(item.value)}
                        </label><br/>
                    </div>
                )}
            )}            
        </div>
    );
}