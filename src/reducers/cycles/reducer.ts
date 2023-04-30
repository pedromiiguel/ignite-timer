import { CyclesState } from '../../context/cycleContext'

import {
  ActionTypes,
  AddNewCycleAction,
  InterruptCurrentCycleAction,
  MarkCurrentCycleAsFinishedAction,
} from './actions'

type Action =
  | AddNewCycleAction
  | InterruptCurrentCycleAction
  | MarkCurrentCycleAsFinishedAction

export function cyclesReducer(state: CyclesState, action: Action) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      return {
        ...state,
        cycles: [...state.cycles, action.payload.newCycle],
        activeCycleId: action.payload.newCycle.id,
      }
    case ActionTypes.INTERRUPT_CURRENT_CYCLE: {
      const cycles = state.cycles.map((cycle) =>
        cycle.id === state.activeCycleId
          ? { ...cycle, interruptedDate: new Date() }
          : cycle,
      )

      return {
        ...state,
        cycles,
        activeCycleId: null,
      }
    }

    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {
      const cycles = state.cycles.map((cycle) =>
        cycle.id === state.activeCycleId
          ? { ...cycle, finishedDate: new Date() }
          : cycle,
      )

      return {
        ...state,
        cycles,
        activeCycleId: null,
      }
    }
    default:
      return state
  }
}
