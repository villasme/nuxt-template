import { defs as businessDefs, business } from '~/services/business';

import { defs as systemDefs, system } from '~/services/system';

if (process.client) {
  (window as any).defs = {
    business: businessDefs,
    system: systemDefs
  };
  window.API = {
    business,
    system,
  };
} else {
  (global as any).defs = {
    business: businessDefs,
    system: systemDefs
  };
  global.API = {
    business,
    system,
  };
}


