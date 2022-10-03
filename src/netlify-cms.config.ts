import type { CmsCollectionFile, CmsConfig } from "netlify-cms-core";

const subjectsConfig: CmsCollectionFile = {
  name: 'subjects',
  label: 'Subjects',
  file: '/src/data/subjects.json',
  fields: [{
    label: 'Subjects',
    name: 'subjects',
    widget: 'list',
    fields: [
      { label: 'Name', name: 'name', widget: 'string', default: "Emmet" }
    ]}
  ]
};

const subjectSetsConfig: CmsCollectionFile = {
  name: 'subjectSets',
  label: 'Subject Sets',
  file: '/src/data/subjectSets.json',
  fields: [{
    label: 'Subject Sets',
    name: 'subjectSets',
    widget: 'list',
    fields: [
      { label: 'Name', name: 'name', widget: 'string' },
      {
        label: 'Subject',
        name: 'subject',
        widget: 'relation',
        collection: 'tk31',
        file: 'subjects',
        multiple: true,
        search_fields: ['subjects.*.name'],
        display_fields: ['subjects.*.name'],
        value_field: 'subjects.*.name',
      }
    ]
  }]
};


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
  local_backend: true,
  collections: [
    {
      name: 'tk31',
      label: 'TK31',
      extension: 'json',
      editor: { preview: false },
      files: [
        subjectsConfig,
        subjectSetsConfig
      ]
    }
  ]
};

export default config;
