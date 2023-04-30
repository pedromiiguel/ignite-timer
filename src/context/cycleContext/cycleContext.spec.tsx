import { differenceInSeconds } from 'date-fns'
import { useCycle } from '../../hooks/useCycle'
import { act, renderHook } from '@testing-library/react'
import { CyclesContextProvider } from '.'

describe('useCycle', () => {
  it('should return initial values when dont have cycles in local storage', () => {
    const { result } = renderHook(() => useCycle(), {
      wrapper: CyclesContextProvider,
    })

    expect(result.current.activeCycle).toEqual(undefined)
    expect(result.current.activeCycleId).toBe(null)
    expect(result.current.cycles).toEqual([])
    expect(result.current.amountSecondsPassed).toBe(0)
  })

  it('should return initial values when have cycles in local storage', () => {
    const mock = {
      cycles: [
        {
          id: '1681419834220',
          task: 'projeto 1',
          minutesAmount: 10,
          startDate: '2023-04-13T21:03:54.220Z',
          finishedDate: '2023-04-13T21:13:54.671Z',
        },
        {
          id: '1682126267341',
          task: 'projeto 4',
          minutesAmount: 20,
          startDate: new Date().toISOString(),
        },
      ],
      activeCycleId: '1682126267341',
    }

    Storage.prototype.getItem = jest.fn(() => JSON.stringify(mock))

    const { result } = renderHook(() => useCycle(), {
      wrapper: CyclesContextProvider,
    })

    expect(result.current.cycles).toEqual(mock.cycles)
    expect(result.current.activeCycleId).toEqual('1682126267341')
    expect(result.current.activeCycle).toEqual(mock.cycles[1])
    expect(result.current.amountSecondsPassed).toBe(0)
  })

  it('should create a new cycle', () => {
    const { result } = renderHook(() => useCycle(), {
      wrapper: CyclesContextProvider,
    })

    act(() => {
      result.current.createNewCycle({
        task: 'testando custom hook',
        minutesAmount: 30,
      })
    })
    const index = result.current.cycles.length - 1

    expect(result.current.cycles).toHaveLength(3)
    expect(result.current.amountSecondsPassed).toEqual(0)
    expect(result.current.cycles[index].task).toBe('testando custom hook')
    expect(result.current.cycles[index].minutesAmount).toBe(30)
  })

  it('should mark current cycle as finished', () => {
    const { result } = renderHook(() => useCycle(), {
      wrapper: CyclesContextProvider,
    })

    act(() => {
      result.current.markCurrentCycleAsFinished()
    })
    expect(result.current.activeCycle).toBeUndefined()
    expect(result.current.activeCycleId).toBeNull()
  })

  it('should interrupt current cycle', () => {
    const { result } = renderHook(() => useCycle(), {
      wrapper: CyclesContextProvider,
    })

    act(() => {
      result.current.interruptCurrentCycles()
    })
    expect(result.current.activeCycle).toBeUndefined()
    expect(result.current.activeCycleId).toBeNull()
  })

  it('should set Seconds Passed', () => {
    const { result } = renderHook(() => useCycle(), {
      wrapper: CyclesContextProvider,
    })

    act(() => {
      result.current.setSecondsPassed(600)
    })

    expect(result.current.amountSecondsPassed).toEqual(600)
  })

  it('should set amountSecondsPassed to the difference in seconds between current time and start time of active cycle', () => {
    const mockActiveCycle = {
      id: '123',
      task: 'test',
      minutesAmount: 25,
      startDate: new Date().toISOString(),
    }
    const mockState = {
      cycles: [mockActiveCycle],
      activeCycleId: '123',
    }
    Storage.prototype.getItem = jest.fn(() => JSON.stringify(mockState))

    const { result } = renderHook(() => useCycle(), {
      wrapper: CyclesContextProvider,
    })

    const expectedAmountSecondsPassed = differenceInSeconds(
      new Date(),
      new Date(mockActiveCycle.startDate),
    )

    expect(result.current.activeCycle).toEqual(mockActiveCycle)
    expect(result.current.amountSecondsPassed).toEqual(
      expectedAmountSecondsPassed,
    )
  })
})
