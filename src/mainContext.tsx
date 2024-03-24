import { createContext } from 'react';
import { ContextProps } from './types/types';

export const MainContext = createContext<ContextProps | undefined>(undefined);
