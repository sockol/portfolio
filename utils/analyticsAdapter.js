
const DBUG = process.env.NODE_ENV === `stage`;

import { isServer } from './helpers';

export const recordAction = (key = `action`, data = {}) => {
  if (isServer())
    return DBUG && console.warn(`Error - analytics not enabled on server`);
  if (!heap)
    return DBUG && console.warn(`Error - analytics not enabled`);
  try {
    DBUG && console.warn(`Analytics [${key}] - `, data ? JSON.stringify(data) : ``);
    heap.track(key, data);
  } catch (error) {
    DBUG && console.warn(`Error - ${error}`);
  }
};

export const recordClick = (data = {}) => recordAction(`Click`, { ...data });
export const recordClickReport = (data = {}) => recordAction(`Report Click`, { ...data });

export default {
  recordClickReport,
}
;
