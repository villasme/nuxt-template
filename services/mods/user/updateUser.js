/**
     * @desc Updated user
This can only be done by the logged in user.
     */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** name that need to be updated */
  username;
}

export const init = undefined;

export function request(params, body, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/user/{username}', params, 'PUT'), {
    method: 'PUT',

    body,
    ...options,
  });
}
