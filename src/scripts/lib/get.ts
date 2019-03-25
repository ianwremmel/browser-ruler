import {TypeNarrowingError} from './type-narrowing-error';

export function get<IT extends Record<string, any>, T>(
  map: WeakMap<IT, T>,
  instance: IT
) {
  const ret = map.get(instance);
  if (!ret) {
    throw new TypeNarrowingError();
  }
  return ret;
}
