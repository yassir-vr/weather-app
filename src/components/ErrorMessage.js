import React from 'react';
import { AlertCircle } from 'lucide-react';

export const ErrorMessage = ({ message }) => (
  <div className="flex items-center gap-3 text-red-500">
    <AlertCircle className="h-5 w-5 flex-shrink-0" />
    <span className="text-lg">{message}</span>
  </div>
);