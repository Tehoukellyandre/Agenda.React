import { createFileRoute } from '@tanstack/react-router'
import  { Inscription } from '../pages/inscription'

export const Route = createFileRoute('/inscription')({
  component: Inscription 
})

