'use strict';

/**
 * sitemap-custom service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sitemap-custom.sitemap-custom');
