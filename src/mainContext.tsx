import { createContext } from 'react';
import { ContextProps } from './types/';

export const MainContext = createContext<ContextProps | undefined>(undefined);
