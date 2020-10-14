/**
 * @desc Deletes a pet
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** Pet id to delete */
  petId;
}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/pet/{petId}', params, 'DELETE'), {
    method: 'DELETE',

    ...options,
  });
}
