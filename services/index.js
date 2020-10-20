import { defs as businessDefs, business } from './business';

import { defs as systemDefs, system } from './system';

if (process.client) {
  window.defs = {
    business: businessDefs,
    system: systemDefs,
  };
  window.API = {
    business,
    system,
  };
} else {
  global.defs = {
    business: businessDefs,
    system: systemDefs,
  };
  global.API = {
    business,
    system,
  };
}
