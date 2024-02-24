import { defineDocumentType, makeSource } from 'contentlayer/source-files';

const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: '**/**/*.mdx',
  fields: {
    title: {
      type: 'string',
      require: true
    },
    publishAt: {
      type: 'date',
      required: true
    },
    updatedAt: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string',
      required: true
    },
    image: {
      type: 'string',
      required: true
    },
    isPublished: {
      type: 'boolean',
      default: true
    },
    author: {
      type: 'string',
      required: true
    },
    tags: {
      type: 'list',
      of: { type: 'string' }
    }
  },

  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/blog/${doc._raw.flattenedPath}`
    }
  }
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Blog]
});
