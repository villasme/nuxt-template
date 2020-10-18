/**
 * @desc test
 */

import * as defs from '../../baseClass';
import { PontCore } from '~/services/pontCore';

export class Params {}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/system/test', params, 'TRACE'), {
    method: 'TRACE',

    ...options,
  });
}
