import { handleArraySchema } from './array';
import { handleBooleanSchema } from './boolean';
import { handleDateSchema } from './date';
import { handleMixedSchema } from './mixed';
import { handleNumberSchema } from './number';
import { handleObjectSchema } from './object';
import { handleStringSchema } from './string';

export * from './array';
export * from './boolean';
export * from './date';
export * from './mixed';
export * from './number';
export * from './object';
export * from './string';

export const typeHandlers = new Map<string, Function>();

typeHandlers.set('array', handleArraySchema);
typeHandlers.set('boolean', handleBooleanSchema);
typeHandlers.set('date', handleDateSchema);
typeHandlers.set('mixed', handleMixedSchema);
typeHandlers.set('number', handleNumberSchema);
typeHandlers.set('object', handleObjectSchema);
typeHandlers.set('string', handleStringSchema);
