import type { CmsConfig } from "netlify-cms-core";

const config: CmsConfig = {
  backend: {
    name: 'github',
    repo: 'krolebord/tk-timetable',
    branch: 'main',
    site_domain: 'tk31.netlify.app',
  },
  site_url: 'https://tk31.netlify.app',
  display_url: 'https://tk31.netlify.app',
  media_folder: '/uploads',
  media_library: { name: '' },
  publish_mode: 'simple',
  collections: [
    {
      name: 'subjects',
      label: 'Subjects',
      folder: 'data/subjects',
      create: true,
      fields: [
        { label: 'Name', name: 'name', widget: 'string' },
      ]
    }
  ]
};

export default config;
