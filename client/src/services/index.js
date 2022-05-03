/* eslint-disable no-alert */

import { postWithoutHeader } from './config';

// Auth
export const login = postWithoutHeader('dashboard/login/');
