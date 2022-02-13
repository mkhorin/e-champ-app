'use strict';

const parent = require('e-champ/config/default-security');

module.exports = {

    ...parent,

    // bind users to roles
    assignments: {
        'Adam': 'administrator'
    }
};