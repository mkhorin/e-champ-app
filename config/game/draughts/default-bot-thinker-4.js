/**
 * @copyright Copyright (c)2021 Maxim Khorin <maksimovichu@gmail.com>
 */
'use strict';

const defaults = require('e-champ-draughts-thinker/config/default');

module.exports = {

    ...defaults,

    label: 'Thinker Level 4',
    params: {
        ...defaults.params,

        depth: [4, 5]
    },
    translations: {
        'ru': {
            label: 'Мыслитель Уровень 4'
        }
    }
};