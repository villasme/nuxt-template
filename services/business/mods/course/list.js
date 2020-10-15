/**
 * @desc list
 */

import * as defs from '~/services/baseClass';
import { PontCore } from '~/services/pontCore';

export class Params {
  /** page */
  page;
  /** size */
  size;
}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/business/admin/course/list', params, 'GET'),
    {
      method: 'GET',

      ...options,
    },
  );
}
