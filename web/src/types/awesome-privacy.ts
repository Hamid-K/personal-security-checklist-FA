export interface AwesomePrivacyService {
  name: string;
  url: string;
  description?: string;
  followWith?: string;
  github?: string;
  opensource?: boolean;
  openSource?: boolean;
  securityAudited?: boolean;
  tosdrId?: string;
  androidApp?: string;
  iosApp?: string;
  subreddit?: string;
  icon?: string;
  acceptsCrypto?: boolean;
  [key: string]: any;
  category?: string;
  section?: string;
  slug?: string;
}

export interface AwesomePrivacySection {
  name: string;
  alternativeTo?: string[];
  services: AwesomePrivacyService[];
  notableMentions?: AwesomePrivacyService[];
  furtherInfo?: string;
}

export interface AwesomePrivacyCategory {
  name: string;
  sections: AwesomePrivacySection[];
}
