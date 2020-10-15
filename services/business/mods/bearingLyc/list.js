/**
 * @desc list
 */

import * as defs from '~/services/baseClass';
import { PontCore } from '~/services/pontCore';

export class Params {
  /** list */
  list;
  /** page */
  page;
  /** size */
  size;
  /** total */
  total;
}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/business/admin/bearingLyc/list', params, 'POST'),
    {
      method: 'POST',

      ...options,
    },
  );
}
