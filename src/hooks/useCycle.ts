import { useContext } from 'react'
import { CyclesContext } from '../context/cycleContext'

export const useCycle = () => useContext(CyclesContext)
