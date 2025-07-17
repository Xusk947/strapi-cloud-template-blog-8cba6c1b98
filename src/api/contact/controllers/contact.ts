/**
 * Contact controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::contact.contact', ({ strapi }) => ({
  async find(ctx) {
    // Вызов стандартного метода find для получения meta данных
    const { meta } = await super.find(ctx);

    // Для singleType используем findOne с правильной популяцией
    const entity = await strapi.entityService.findOne('api::contact.contact', 1, {
      populate: {
        socialLinks: true,
        labels: true,
        seo: {
          populate: ['metaImage']
        }
      },
      locale: ctx.query.locale || ctx.locale
    });
      
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
      
    return this.transformResponse(sanitizedEntity, { meta });
  }
}));
