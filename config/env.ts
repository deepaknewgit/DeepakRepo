import * as dotenv from 'dotenv';
dotenv.config();

export const ENV = {
  baseURLAPI: process.env.BASE_URL_API,
  tenantId: process.env.TENANT_ID!,
  appId: process.env.APPLICATION_ID!,
  authToken: process.env.AUTH_TOKEN!,
  locationId: process.env.LOCATION_ID!,
};
