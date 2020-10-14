/**
 * @desc Get user by user name
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** The name that needs to be fetched. Use user1 for testing.  */
  username;
}

export const init = new defs.User();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/user/{username}', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
