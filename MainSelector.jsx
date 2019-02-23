import * as React from 'react';

export function MainSelector({ toggle, status }) {
    return (
        <div>
            <input
                type="checkbox"
                name="main_checkbox"
                onClick={toggle}
                checked={status.checked}
                value="0"
                ref={
                    input => {
                        if (input) {
                            input.indeterminate = status.indeterminate;
                        }
                    }
                }
            />
            Select All<br />
        </div>
    )
}