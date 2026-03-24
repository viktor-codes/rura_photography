/**
 * Единый источник опций и допустимых значений для формы контакта и POST /api/contact.
 */

export type ContactEnquiryPayload = {
  name: string;
  email: string;
  propertyType: string;
  packageType: string;
  message: string;
};

export const PROPERTY_TYPE_OPTIONS = [
  { value: "Apartment", label: "Apartment" },
  { value: "House", label: "House" },
  { value: "Commercial", label: "Commercial" },
  { value: "New development", label: "New development" },
  { value: "Other", label: "Other" },
] as const;

export const PACKAGE_OPTIONS = [
  {
    value: "Listing Photography — from €250",
    label: "Listing Photography — from €250",
  },
  {
    value: "Premium Property Pack — from €550",
    label: "Premium Property Pack — from €550",
  },
  {
    value: "Agent Partnership — custom",
    label: "Agent Partnership — custom",
  },
] as const;

const propertyTypeValues = new Set<string>(
  PROPERTY_TYPE_OPTIONS.map((item) => item.value),
);

const packageTypeValues = new Set<string>(
  PACKAGE_OPTIONS.map((item) => item.value),
);

export function isAllowedPropertyType(value: string): boolean {
  return propertyTypeValues.has(value);
}

export function isAllowedPackageType(value: string): boolean {
  return packageTypeValues.has(value);
}
