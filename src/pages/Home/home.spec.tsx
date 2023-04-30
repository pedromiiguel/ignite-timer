import { render, fireEvent, screen, waitFor } from '../../utils/test-utils'
import { Home } from '.'

const mock = {
  id: '1681935529573',
  task: 'projeto 1',
  minutesAmount: 10,
  startDate: new Date(),
}

const useCycle = jest.spyOn(require('../../hooks/useCycle'), 'useCycle')

describe('<Home/>', () => {
  it('should renders components correctly', () => {
    render(<Home />)

    const startButton = screen.getByRole('button', { name: /começar/i })

    expect(startButton).toBeInTheDocument()
  })

  it('disables submit button when task is not filled', () => {
    render(<Home />)

    const startButton = screen.getByRole('button', { name: /começar/i })

    expect(startButton).toBeDisabled()

    const taskInput = screen.getByPlaceholderText('Dê um nome para seu projeto')
    const numberInput = screen.getByPlaceholderText('00')

    fireEvent.change(taskInput, { target: { value: 'Nova tarefa' } })
    fireEvent.change(numberInput, { target: { value: 10 } })

    expect(screen.getByRole('button', { name: 'Começar' })).not.toBeDisabled()
  })

  it('interrupts current cycle when stop button is clicked', () => {
    const interruptCurrentCyclesMock = jest.fn()

    useCycle.mockReturnValueOnce({
      activeCycle: mock,
      cycles: [mock],
      activeCycleId: mock.id,
      amountSecondsPassed: 0,
      createNewCycle: jest.fn(),
      markCurrentCycleAsFinished: jest.fn(),
      setSecondsPassed: jest.fn(),
      interruptCurrentCycles: interruptCurrentCyclesMock,
    })

    render(<Home />)

    const stopButton = screen.getByRole('button', { name: /interromper/i })

    expect(stopButton).toBeInTheDocument()

    fireEvent.click(stopButton)

    expect(interruptCurrentCyclesMock).toHaveBeenCalled()
  })

  it('creates new cycle when form is submitted', async () => {
    const mockCreateNewCycle = jest.fn()

    useCycle.mockReturnValue({
      activeCycle: undefined,
      cycles: [],
      activeCycleId: null,
      amountSecondsPassed: 0,
      createNewCycle: mockCreateNewCycle,
      markCurrentCycleAsFinished: jest.fn(),
      setSecondsPassed: jest.fn(),
      interruptCurrentCycles: jest.fn(),
    })

    render(<Home />)

    const startButton = screen.getByRole('button', { name: /começar/i })
    const taskInput = screen.getByPlaceholderText('Dê um nome para seu projeto')
    const numberInput = screen.getByPlaceholderText('00')

    fireEvent.change(taskInput, { target: { value: 'Nova tarefa 2' } })
    fireEvent.change(numberInput, { target: { value: 20 } })

    expect(taskInput).toHaveValue('Nova tarefa 2')
    expect(startButton).toBeInTheDocument()

    expect(startButton).not.toBeDisabled()

    fireEvent.submit(startButton)

    await waitFor(() => {
      expect(mockCreateNewCycle).toHaveBeenCalled()
      expect(mockCreateNewCycle).toBeCalledWith({
        task: 'Nova tarefa 2',
        minutesAmount: 20,
      })
    })
  })
})
