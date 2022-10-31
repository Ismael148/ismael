export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'companyName',
      title: 'CompanyName',
      type: 'string',
    },
    {
      name: 'jobTitle',
      title: 'JobTitle',
      type: 'string',
    },
    {
      name: 'companyImage',
      title: 'CompanyImage',
      type: 'image',
      otpions: {
        hotspot: true,
      },
    },
    {
      name: 'dateStarted',
      title: 'dateStarted',
      type: 'string',
    },
    {
      name: 'dateEnded',
      title: 'DateEnded',
      type: 'string',
    },
    {
      name: 'isCurrentlyWorkingHere',
      title: 'IsCurrentlyWorkinghere',
      type: 'boolean',
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'skill' } }],
    },
    {
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};
