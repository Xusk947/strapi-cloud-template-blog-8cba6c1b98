import type { Schema, Struct } from '@strapi/strapi';

export interface LinksCategoryLink extends Struct.ComponentSchema {
  collectionName: 'components_links_category_links';
  info: {
    description: '\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E';
    displayName: 'Category Link';
  };
  attributes: {
    category: Schema.Attribute.Relation<'oneToOne', 'api::category.category'>;
  };
}

export interface SectionsAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_sections';
  info: {
    description: '\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438';
    displayName: 'About Section';
  };
  attributes: {
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    features: Schema.Attribute.Component<'shared.feature', true>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsBenefitsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_benefits_sections';
  info: {
    description: '\u0420\u0430\u0437\u0434\u0435\u043B \u0441 \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430\u043C\u0438';
    displayName: 'Benefits Section';
  };
  attributes: {
    benefits: Schema.Attribute.Component<'shared.benefit', true>;
    description: Schema.Attribute.RichText;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsCategoriesSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_categories_sections';
  info: {
    description: '\u0420\u0430\u0437\u0434\u0435\u043B \u043E \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F\u0445';
    displayName: 'Categories Section';
  };
  attributes: {
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
    description: Schema.Attribute.RichText;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_faq_sections';
  info: {
    description: '\u0420\u0430\u0437\u0434\u0435\u043B \u0441 \u0447\u0430\u0441\u0442\u043E \u0437\u0430\u0434\u0430\u0432\u0430\u0435\u043C\u044B\u043C\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C\u0438';
    displayName: 'FAQ Section';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    faqs: Schema.Attribute.Component<'shared.faq-item', true>;
    moreLink: Schema.Attribute.String;
    moreTitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_sections';
  info: {
    description: '\u0413\u043B\u0430\u0432\u043D\u044B\u0439 \u0431\u0430\u043D\u043D\u0435\u0440 \u0441\u0430\u0439\u0442\u0430';
    displayName: 'Hero Section';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsPartnerSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_partner_sections';
  info: {
    description: '\u0420\u0430\u0437\u0434\u0435\u043B \u043E \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0430\u0445';
    displayName: 'Partner Section';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    partners: Schema.Attribute.Component<'shared.partner', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsProgressSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_progress_sections';
  info: {
    description: '\u0420\u0430\u0437\u0434\u0435\u043B \u043E \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0435 \u0438 \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F\u0445';
    displayName: 'Progress Section';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    steps: Schema.Attribute.Component<'shared.progress-step', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsProjectsTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_sections_projects_testimonials';
  info: {
    description: '\u041F\u0440\u043E\u0435\u043A\u0442\u044B \u0438 \u043E\u0442\u0437\u044B\u0432\u044B';
    displayName: 'Projects & Testimonials';
  };
  attributes: {
    projects: Schema.Attribute.Component<'shared.project', true>;
    projectsDescription: Schema.Attribute.RichText;
    projectsTitle: Schema.Attribute.String & Schema.Attribute.Required;
    testimonials: Schema.Attribute.Component<'testimonials.testimonial', true>;
    testimonialsTitle: Schema.Attribute.String;
  };
}

export interface SharedBenefit extends Struct.ComponentSchema {
  collectionName: 'components_shared_benefits';
  info: {
    description: '\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u043E';
    displayName: 'Benefit';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCategory extends Struct.ComponentSchema {
  collectionName: 'components_shared_categories';
  info: {
    description: '\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F';
    displayName: 'Category';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    icon: Schema.Attribute.String & Schema.Attribute.DefaultTo<'FaDumbbell'>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_faq_items';
  info: {
    description: '\u041E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0439 \u0432\u043E\u043F\u0440\u043E\u0441 \u0438 \u043E\u0442\u0432\u0435\u0442 \u0434\u043B\u044F \u0441\u0435\u043A\u0446\u0438\u0438 FAQ';
    displayName: 'FAQ Item';
  };
  attributes: {
    answer: Schema.Attribute.RichText & Schema.Attribute.Required;
    icon: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'FaQuestionCircle'>;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFeature extends Struct.ComponentSchema {
  collectionName: 'components_shared_features';
  info: {
    description: '\u041E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0438\u043B\u0438 \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u043E';
    displayName: 'Feature';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedPartner extends Struct.ComponentSchema {
  collectionName: 'components_shared_partners';
  info: {
    description: '\u041F\u0430\u0440\u0442\u043D\u0435\u0440';
    displayName: 'Partner';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedProgressStep extends Struct.ComponentSchema {
  collectionName: 'components_shared_progress_steps';
  info: {
    description: '\u0428\u0430\u0433 \u0432 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435 \u0438\u043B\u0438 \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u0435';
    displayName: 'Progress Step';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    number: Schema.Attribute.Integer;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedProject extends Struct.ComponentSchema {
  collectionName: 'components_shared_projects';
  info: {
    description: '\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0435';
    displayName: 'Project';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    link: Schema.Attribute.String;
    location: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: 'SEO \u043C\u0435\u0442\u0430\u0434\u0430\u043D\u043D\u044B\u0435';
    displayName: 'SEO';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaImage: Schema.Attribute.Media<'images'>;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    description: '\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u0443\u044E \u0441\u0435\u0442\u044C';
    displayName: 'Social Link';
  };
  attributes: {
    icon: Schema.Attribute.String;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSystemLabels extends Struct.ComponentSchema {
  collectionName: 'components_shared_system_labels';
  info: {
    description: '\u0421\u0438\u0441\u0442\u0435\u043C\u043D\u044B\u0435 \u043C\u0435\u0442\u043A\u0438 \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0430';
    displayName: 'System Labels';
  };
  attributes: {
    addressLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'\u0410\u0434\u0440\u0435\u0441'>;
    contactTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B'>;
    emailLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'Email'>;
    formTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443'>;
    formTypeLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'\u0422\u0438\u043F \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u044F'>;
    mapTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'\u041A\u0430\u0440\u0442\u0430 \u0441\u0430\u0439\u0442\u0430'>;
    messageLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435'>;
    nameLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'\u0412\u0430\u0448\u0435 \u0438\u043C\u044F'>;
    phoneLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'\u0422\u0435\u043B\u0435\u0444\u043E\u043D'>;
    phoneNumberLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430'>;
    socialLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'\u0421\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u0435\u0442\u0438'>;
    socialTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'\u0421\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u0435\u0442\u0438'>;
    submitButtonLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443'>;
    workHoursLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'\u0427\u0430\u0441\u044B \u0440\u0430\u0431\u043E\u0442\u044B'>;
  };
}

export interface SharedTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonials';
  info: {
    description: '\u041E\u0442\u0437\u044B\u0432 \u043A\u043B\u0438\u0435\u043D\u0442\u0430';
    displayName: 'Testimonial';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
    rating: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      >;
    role: Schema.Attribute.String;
  };
}

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
      'links.category-link': LinksCategoryLink;
      'sections.about-section': SectionsAboutSection;
      'sections.benefits-section': SectionsBenefitsSection;
      'sections.categories-section': SectionsCategoriesSection;
      'sections.faq-section': SectionsFaqSection;
      'sections.hero-section': SectionsHeroSection;
      'sections.partner-section': SectionsPartnerSection;
      'sections.progress-section': SectionsProgressSection;
      'sections.projects-testimonials': SectionsProjectsTestimonials;
      'shared.benefit': SharedBenefit;
      'shared.category': SharedCategory;
      'shared.faq-item': SharedFaqItem;
      'shared.feature': SharedFeature;
      'shared.partner': SharedPartner;
      'shared.progress-step': SharedProgressStep;
      'shared.project': SharedProject;
      'shared.seo': SharedSeo;
      'shared.social-link': SharedSocialLink;
      'shared.system-labels': SharedSystemLabels;
      'shared.testimonial': SharedTestimonial;
      'testimonials.testimonial': TestimonialsTestimonial;
    }
  }
}
