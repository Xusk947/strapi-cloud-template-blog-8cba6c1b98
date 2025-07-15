/**
 * homepage controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::homepage.homepage', ({ strapi }) => ({
    async find(ctx) {
        // Вызов стандартного метода find
        const { data, meta } = await super.find(ctx);

        // Популяция компонентов 
        const entity = await strapi.entityService.findMany('api::homepage.homepage', {
            populate: {
                hero: {
                    populate: '*',
                },
                about: {
                    populate: '*',
                },
                progress: {
                    populate: '*',
                },
                benefits: {
                    populate: {
                        benefits: {
                            populate: '*'
                        }
                    }
                },
                categories: {
                    populate: {
                        categories: {
                            populate: '*'
                        }
                    }
                },
                partners: {
                    populate: {
                        partners: {
                            populate: '*'
                        }
                    }
                },
                projects: {
                    populate: {
                        projects: {
                            populate: '*'
                        },
                        testimonials: {
                            populate: {
                                avatar: {
                                    populate: '*'
                                }
                            }
                        }
                    }
                },
                seo: {
                    populate: '*'
                },
                contact: {
                    populate: '*'
                },
            },
        });

        // Возвращаем результат с заполненными связями
        return { data: entity, meta };
    },
}));
