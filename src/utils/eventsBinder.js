

import {forEach} from 'lodash';

export default (vueElement, googleMapObject, events) => {
  forEach(events, (eventName) => {
    const exposedName = eventName;
    googleMapObject.addListener(eventName, (ev) => {
      if (vueElement.$listeners && vueElement.$listeners[eventName]) {
        vueElement.$emit(exposedName, ev);
      }
    });
  });
};
