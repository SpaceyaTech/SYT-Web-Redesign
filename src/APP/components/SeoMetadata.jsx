import { Helmet } from "react-helmet-async";

export default function SeoMetadata({
  title,
  description,
  type = "website",
  url,
  ogImage = "https://apis.spaceyatech.com/media/blog-images/syt.png",
  ogImageAlt = "SpaceYaTech logo, social media handles, website URL, email, and more on a muted background.",
}) {
  return (
    <Helmet prioritizeSeoTags>
      {/* Standard metadata tags */}
      <title>{`${title} - SpaceYaTech`}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {/* End Standard metadata tags */}
      {/* Standard OpenGraph metadata tags */}
      <meta property="og:title" content={title} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={ogImageAlt} />
      {/* End standard OG metadata tags */}
      {/* Optional OG metadata tags */}
      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="480" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="SpaceYaTech" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="en_GB" />
      {/* End Optional OG metadata tags */}
      {/* Twitter tags */}
      <meta name="twitter:site" content="@SpaceYaTech" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={`${title} - SpaceYaTech`} />
      <meta name="twitter:description" content={description} />
      {/* End Twitter tags */}
    </Helmet>
  );
}
