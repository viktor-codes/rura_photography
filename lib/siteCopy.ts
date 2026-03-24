/**
 * Shared marketing copy: keep region wording consistent across the site.
 * Add social entries when URLs are ready (empty list = no social row in footer).
 */

export const SITE_SERVICE_TAGLINE = "Property Photography · Midlands, Ireland";

export const SITE_REGION_BYLINE = "Midlands, Ireland";

export const SITE_BOOKING_HINT = "Available for bookings";

export const SITE_BASED_BULLET =
  "Based in Midlands, Ireland — available nationwide";

export const SITE_PAGE_TITLE =
  "Viktor Rura — Property Photography | Midlands & Dublin";

export const SITE_PAGE_DESCRIPTION =
  "Midlands-based premium real estate photography for Dublin, nationwide, and across Ireland. Full-frame interiors, exteriors, and media optimised for Daft.ie, MyHome.ie, and high-converting listings.";

export type SocialLink = {
  label: string;
  href: string;
};

/** Non-empty href only. Example: { label: "Instagram", href: "https://www.instagram.com/yourhandle" } */
export const SITE_SOCIAL_LINKS: ReadonlyArray<SocialLink> = [];
