import { defs as businessDefs, business } from './business';

import { defs as systemDefs, system } from './system';

window.defs = {
  business: businessDefs,
  system: systemDefs,
};
window.API = {
  business,
  system,
};
