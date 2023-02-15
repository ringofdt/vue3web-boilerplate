import { createPinia } from 'pinia'

export const stores = createPinia();

export * from './auth.store';
export * from './user.store';

