import { PlaywrightTestArgs, PlaywrightTestOptions } from '@playwright/test';

import {
  ConfigurationFixtures,
  CustomConfigFields,
  PageFixtures,
} from '../interfaces';

export type CommonFixtures = CustomConfigFields &
  PageFixtures &
  ConfigurationFixtures &
  PlaywrightTestArgs &
  PlaywrightTestOptions;
