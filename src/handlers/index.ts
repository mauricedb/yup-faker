import { handleArraySchema } from './array';
import { handleMixedSchema } from './mixed';
import { handleObjectSchema } from './object';
import { handleStringSchema } from './string';

export * from './mixed';
export * from './object';
export * from './string';

export const typeHandlers = new Map<string, Function>();

typeHandlers.set('object', handleObjectSchema);
typeHandlers.set('array', handleArraySchema);
typeHandlers.set('string', handleStringSchema);
typeHandlers.set('mixed', handleMixedSchema);
// typeHandlers.set('date', handleDateSchema);
// typeHandlers.set('number', handleNumberSchema);
// typeHandlers.set('boolean', handleBooleanSchema);
