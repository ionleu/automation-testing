import { join } from 'path';

export const getStorageStatePathForUser = (username: string): string => {
  return join(__dirname, `../../../outputs/contexts/${username}.context.json`);
};
