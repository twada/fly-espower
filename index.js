/**
 * fly-espower
 *   Fly plugin for power-assert
 * 
 * https://github.com/twada/fly-espower
 *
 * Copyright (c) 2015 Takuto Wada
 * Licensed under the MIT license.
 *   http://twada.mit-license.org/
 */
'use strict';

var espowerSource = require('espower-source');

module.exports = function () {
    this.espower = function (opts) {
        return this
            .filter((data) => {
                try {
                    return espowerSource(data, null, opts);
                } catch (e) {
                    this.notify('plugin_error', {
                        plugin: 'espower',
                        error: e
                    });
                }
            }).notify('plugin_run', { plugin: 'espower' });
    };
};
