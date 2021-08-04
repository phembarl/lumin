import { bool, func } from 'prop-types';
import React from 'react';

export default function BackDrop({ sideDrawerVisibility, toggleSideDrawer }) {
    return (
        <div
            onKeyPress={toggleSideDrawer}
            onClick={toggleSideDrawer}
            role="presentation"
            className={` ${sideDrawerVisibility ? 'backdrop' : ''}`}
        />
    );
}

BackDrop.propTypes = {
    sideDrawerVisibility: bool.isRequired,
    toggleSideDrawer: func.isRequired
};
