/**
 * @desc save
 */

import * as defs from '../../baseClass';
import { PontCore } from '~/services/pontCore';

export class Params {}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/business/admin/chapter/save', params, 'POST'),
    {
      method: 'POST',

      ...options,
    },
  );
}
