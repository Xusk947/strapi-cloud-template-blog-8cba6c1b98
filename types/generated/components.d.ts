import type { Schema, Struct } from '@strapi/strapi';

export interface TestimonialsTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_testimonials_testimonials';
  info: {
    description: '\u041E\u0442\u0437\u044B\u0432\u044B \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u043E \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0438';
    displayName: '\u041E\u0442\u0437\u044B\u0432';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images'>;
    company: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
    rating: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<5>;
    role: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'testimonials.testimonial': TestimonialsTestimonial;
    }
  }
}
