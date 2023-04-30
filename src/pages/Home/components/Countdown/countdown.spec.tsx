import { act, render, screen } from '../../../../utils/test-utils'

import { Countdown } from '.'

const useCycle = jest.spyOn(require('../../../../hooks/useCycle'), 'useCycle')

const mock = {
  id: '1681935529573',
  task: 'projeto 1',
  minutesAmount: 10,
  startDate: new Date(),
}

jest.useFakeTimers()

describe('<Countdown/>', () => {
  it('should render correctly', () => {
    useCycle.mockReturnValueOnce({
      cycles: [mock],
      activeCycle: undefined,
      activeCycleId: null,
      amountSecondsPassed: 0,
      markCurrentCycleAsFinished: jest.fn(),
      createNewCycle: jest.fn(),
      setSecondsPassed: jest.fn(),
      interruptCurrentCycles: jest.fn(),
    })

    render(<Countdown />)

    expect(screen.getAllByText('0')).toHaveLength(4)
    expect(screen.getByText(':')).toBeInTheDocument()
  })

  it('should display the correct countdown', () => {
    let amountSecondsPassed = 2

    useCycle.mockReturnValueOnce({
      activeCycle: mock,
      cycles: [mock],
      activeCycleId: null,
      amountSecondsPassed,
      createNewCycle: jest.fn(),
      markCurrentCycleAsFinished: jest.fn(),
      setSecondsPassed: jest.fn(),
      interruptCurrentCycles: jest.fn(),
    })
    render(<Countdown />)

    expect(screen.getByText('0')).toBeInTheDocument()
    expect(screen.getByText('9')).toBeInTheDocument()
    expect(screen.getByText('5')).toBeInTheDocument()
    expect(screen.getByText('8')).toBeInTheDocument()

    amountSecondsPassed = 7

    expect(screen.getByText('0')).toBeInTheDocument()
    expect(screen.getByText('9')).toBeInTheDocument()
    expect(screen.getByText('5')).toBeInTheDocument()
    expect(screen.getByText('5')).toBeInTheDocument()
  })

  it('should call markCurrentCycleAsFinished when countdown finishes', () => {
    const markCurrentCycleAsFinished = jest.fn()

    useCycle.mockReturnValueOnce({
      activeCycle: mock,
      cycles: [mock],
      activeCycleId: null,
      amountSecondsPassed: 0,
      createNewCycle: jest.fn(),
      markCurrentCycleAsFinished,
      setSecondsPassed: jest.fn(),
      interruptCurrentCycles: jest.fn(),
    })

    render(<Countdown />)

    expect(markCurrentCycleAsFinished).not.toHaveBeenCalled()

    act(() => {
      jest.advanceTimersByTime(600000)
    })
    expect(markCurrentCycleAsFinished).toHaveBeenCalled()
  })
})
