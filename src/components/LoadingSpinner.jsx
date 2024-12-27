import React from 'react';
import { Loader2 } from 'lucide-react';

export const LoadingSpinner = () => (
  <div className="glass-card rounded-xl p-4 inline-flex">
    <Loader2 className="h-6 w-6 text-blue-600 animate-spin" />
  </div>
);

export default LoadingSpinner;
