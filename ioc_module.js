'use strict';

const schemasIocModule = require('./ioc.schemas');

function registerInContainer (container, registrationSettings) {

  schemasIocModule.registerInContainer(container, registrationSettings);
}

module.exports.registerInContainer = registerInContainer;
