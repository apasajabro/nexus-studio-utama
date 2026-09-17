export type AppPrivacyPolicy = {
  slug: string;
  appName: string;
  developerName: string;
  appPackage?: string;
  companyWebsite: string;
  publicPolicyUrl?: string;
  contactEmail: string;
  effectiveDate: string;
  lastUpdated: string;
  country: string;
  shortDescription: string;
  dataCollectionSummary: string;
  features: {
    localStorage: boolean;
    ads: boolean;
    analytics: boolean;
    crashReporting: boolean;
    inAppPurchases: boolean;
    subscriptions: boolean;
    notifications: boolean;
    location: boolean;
    microphone: boolean;
    camera: boolean;
    mediaFiles: boolean;
    deviceAuthentication: boolean;
    accountSystem: boolean;
    cloudSync: boolean;
  };
};

export const privacyPolicies: AppPrivacyPolicy[] = [
  {
    slug: 'nexus-notes-memo-and-ideas',
    appName: 'Nexus Notes: Memo & Ideas',
    developerName: 'Nexus Studio Utama',
    appPackage: 'com.nexusstudioutama.nexusnotes',
    companyWebsite: 'https://nexustudio.my.id',
    publicPolicyUrl: 'https://nexustudio.my.id/privacy-policy/nexus-notes-memo-and-ideas/',
    contactEmail: 'nexusmonetize@gmail.com',
    effectiveDate: '2026-09-18',
    lastUpdated: '2026-09-18',
    country: 'Indonesia',
    shortDescription:
      'Privacy Policy for Nexus Notes: Memo & Ideas, a local-first productivity app for notes and ideas.',
    dataCollectionSummary:
      'Notes and attachments may be stored locally on your device to provide the features you request.',
    features: {
      localStorage: true,
      ads: false,
      analytics: false,
      crashReporting: false,
      inAppPurchases: false,
      subscriptions: false,
      notifications: false,
      location: false,
      microphone: true,
      camera: true,
      mediaFiles: true,
      deviceAuthentication: true,
      accountSystem: false,
      cloudSync: false
    }
  },
  {
    slug: 'general-mobile-app-privacy-policy',
    appName: 'General Mobile Application Privacy Policy',
    developerName: 'PT Nexus Studio Utama',
    companyWebsite: 'https://nexustudio.my.id',
    contactEmail: 'nexusmonetize@gmail.com',
    effectiveDate: '2026-06-28',
    lastUpdated: '2026-06-28',
    country: 'Indonesia',
    shortDescription:
      'General privacy policy for mobile applications published, managed, or supported by PT Nexus Studio Utama.',
    dataCollectionSummary:
      'This policy explains how mobile applications may collect, use, store, and protect user information depending on the features enabled in each application.',
    features: {
      localStorage: true,
      ads: true,
      analytics: true,
      crashReporting: true,
      inAppPurchases: true,
      subscriptions: true,
      notifications: true,
      location: false,
      microphone: false,
      camera: false,
      mediaFiles: false,
      deviceAuthentication: false,
      accountSystem: false,
      cloudSync: false
    }
  }
];

export function getPrivacyPolicyBySlug(slug: string): AppPrivacyPolicy | undefined {
  return privacyPolicies.find((policy) => policy.slug === slug);
}
