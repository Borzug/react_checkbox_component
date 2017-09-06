import React from 'react';

import MainSelector from './MainSelector';
import Checkboxes from './Checkboxes';

class CheckboxContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            status: {
                checked: false,
                indeterminate: false
            }
        }
        this.check = this.check.bind(this);
        this.toggle = this.toggle.bind(this);

    }
    componentDidMount() {
        const checkboxes = this.props.data.map((item, idx) => {
            return {
                id: idx,
                checked: false,
                value: item
            };
        });        
        this.setState({
            items: checkboxes
        });
    }
    toggle() {
        const isAllChecked = this.state.status.checked;
        const newCheckboxes = this.state.items.map(item => {
            return {
                id: item.id,
                name: item.name,
                checked: !isAllChecked,
                value: item.value
            };
        });
        this.setState({
            items: newCheckboxes
        });
        this.setState({
            status: {
                checked: !isAllChecked,
                indeterminate: false
            }
        });
    }

    check(event) {
        const id = event.currentTarget.id;
        const newCheckboxes = this.state.items;
        newCheckboxes[id].checked = !this.state.items[id].checked;
        this.setState({
            items: newCheckboxes
        });
        const checked = newCheckboxes.filter(chkbx => chkbx.checked);
        this.setState({
            status: {
                checked: checked.length === this.state.items.length,
                indeterminate: checked.length > 0 && checked.length !== this.state.items.length
            }
        })
    }

    render() {
        return ( 
            <div>
                <MainSelector 
                    toggle = {this.toggle}
                    status = {this.state.status}
                />
                <Checkboxes 
                    items = {this.state.items}
                    check = {this.check}
                    getLabelText = {this.props.getLabelText} //Only app should know about how to deal with data passed;
                />
            </div>
        )
    }
}

export default CheckboxContainer;