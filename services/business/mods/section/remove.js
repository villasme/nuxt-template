/**
 * @desc delete
 */

import * as defs from '../../baseClass';
import { PontCore } from '~/services/pontCore';

export class Params {
  /** id */
  id;
}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/business/admin/section/delete/{id}', params, 'DELETE'),
    {
      method: 'DELETE',

      ...options,
    },
  );
}
