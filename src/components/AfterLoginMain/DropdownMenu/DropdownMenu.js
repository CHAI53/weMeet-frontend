import React, { Component } from 'react';
import './DropdownMenu.scss';
import DropdownData from './DropdownData';

export class DropdownMenu extends Component {
    constructor() {
        super()
        this.state = {
            data: DropdownData
        }
    }

    createDropdownMenu = () => {
        let dropdownGroup = [];
        for (let i = 0; i < 4; i++) {
            let dropdownSingle = [];
            let start = i*6;
            for (let j = start; j < start + 6; j++) {
                dropdownSingle.push(
                <li>
                    <a href>
                        {this.state.data[j].data_value}
                    </a>
                </li>)
            }
            dropdownGroup.push(
            <li>
                <ul>
                    {dropdownSingle}
                </ul>
            </li>)
        }
        return dropdownGroup;
    }

    render() {
        return (
            <ul className={this.props.className}>
                {this.createDropdownMenu()}
            </ul>
        )
    }
}

export default DropdownMenu