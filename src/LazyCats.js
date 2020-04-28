import React, { Suspense, lazy } from 'react'
const LazyCats = lazy(() => import('./Cats.js'))

export default function Cats() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyCats />
      </Suspense>
    </div>
  )
}