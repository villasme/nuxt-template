/**
     * @desc Find purchase order by ID
For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
     */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** ID of pet that needs to be fetched */
  orderId;
}

export const init = new defs.Order();

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/store/order/{orderId}', params, 'GET'),
    {
      method: 'GET',

      ...options,
    },
  );
}
