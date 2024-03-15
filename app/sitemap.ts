import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://hudzilin.vc',
      lastModified: new Date(),
    },
  ];
}
