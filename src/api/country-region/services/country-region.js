'use strict';

/**
 * country-region service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::country-region.country-region');
