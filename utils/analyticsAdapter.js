
const DBUG = process.env.NODE_ENV === `stage`;

import { isServer } from './helpers';

export const recordAction = (key = `action`, data = {}) => {
  if (isServer())
    return DBUG && console.warn(`Error - analytics not enabled on server`);
  if (typeof heap === undefined)
    return DBUG && console.warn(`Error - analytics not enabled`);
  try {
    DBUG && console.warn(`Analytics [${key}] - `, data ? JSON.stringify(data) : ``);
    heap.track(key, data);
  } catch (error) {
    DBUG && console.warn(`Error - ${error}`);
  }
};

export const recordClick = (data = {}) => recordAction(`Click`, { ...data });
export const recordResumeDownload = (data = {}) => recordAction(`Resume Download`, { ...data });
export const recordLinkClick = (data = {}) => recordAction(`Click Link`, { ...data });

export default {
  recordClick,
  recordResumeDownload,
  recordLinkClick,
}
;
