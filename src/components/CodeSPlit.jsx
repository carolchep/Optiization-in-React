import React, { lazy, Suspense } from 'react';

const ProductPage = lazy(() => import('./ProductPage'));

const App = () => (
  <div>
    <Suspense fallback={<div>Loading...</div>}>
      <ProductPage />
    </Suspense>
  </div>
);
//In this example, the ProductPage component is loaded lazily, 
//or only when it's needed, and the Suspense component provides 
//a fallback UI to display while the component is being loaded. T
T//his allows you to split your application's code into smaller chunks, 
//improving the performance of your application.