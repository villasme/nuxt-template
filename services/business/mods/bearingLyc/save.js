/**
 * @desc save
 */

import * as defs from '~/services/baseClass';
import { PontCore } from '~/services/pontCore';

export class Params {}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/business/admin/bearingLyc/save', params, 'POST'),
    {
      method: 'POST',

      ...options,
    },
  );
}
