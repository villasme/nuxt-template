/**
 * @desc Updates a pet in the store with form data
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** ID of pet that needs to be updated */
  petId;
}

export const init = undefined;

export function request(params, form, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/pet/{petId}', params, 'POST'), {
    method: 'POST',
    body: form,

    ...options,
  });
}
