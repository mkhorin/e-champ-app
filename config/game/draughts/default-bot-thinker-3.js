'use strict';

const defaults = require('e-champ-draughts-thinker/config/default');

module.exports = {

    ...defaults,

    label: 'Thinker Level 3',
    params: {
        ...defaults.params,

        depth: [5, 6]
    },
    translations: {
        'ru': {
            label: 'Мыслитель Уровень 3'
        }
    }
};