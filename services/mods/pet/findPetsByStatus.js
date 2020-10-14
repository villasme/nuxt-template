/**
     * @desc Finds Pets by status
Multiple status values can be provided with comma separated strings
     */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** Status values that need to be considered for filter */
  status;
}

export const init = [];

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/pet/findByStatus', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
