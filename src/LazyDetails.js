import React, { Suspense, lazy } from 'react'
const LazyDetails = lazy(() => import('./Details.js'))

export default function Cats() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyDetails />
      </Suspense>
    </div>
  )
}