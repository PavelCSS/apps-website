import { ReactNode } from 'react';

export type ErrorProps = {
  title: ReactNode;
  message: string;
  actionMessage?: string;
  description?: string;
};
