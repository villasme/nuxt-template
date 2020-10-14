/**
     * @desc Find pet by ID
Returns a single pet
     */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** ID of pet to return */
  petId;
}

export const init = new defs.Pet();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/pet/{petId}', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
