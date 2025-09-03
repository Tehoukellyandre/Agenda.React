import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterWrapper }from '@/shared/component/router.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterWrapper />
  </StrictMode>,
)
