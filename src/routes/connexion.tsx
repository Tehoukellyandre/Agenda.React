import { createFileRoute } from '@tanstack/react-router'
import  { Connexion } from '../pages/connexion'

export const Route = createFileRoute('/connexion')({
  component: Connexion 
})