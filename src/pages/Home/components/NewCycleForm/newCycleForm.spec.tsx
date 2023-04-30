import { fireEvent, render, screen } from '../../../../utils/test-utils'
import { NewCycleForm } from '.'

jest.mock('react-hook-form', () => ({
  useForm: () => ({
    register: jest.fn(),
    handleSubmit: jest.fn(),
  }),
  useFormContext: () => ({
    register: jest.fn(),
  }),
}))

const useCycle = jest.spyOn(require('../../../../hooks/useCycle'), 'useCycle')
describe('<NewCycleForm />', () => {
  it('should renders input fields with correct labels and placeholders', () => {
    render(<NewCycleForm />)

    expect(screen.getByLabelText('Vou trabalhar em')).toBeInTheDocument()
    expect(screen.getByLabelText('durante')).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText('Dê um nome para seu projeto'),
    ).toBeInTheDocument()
    expect(screen.getByPlaceholderText('00')).toBeInTheDocument()
  })

  it('should render a list of task suggestions', () => {
    render(<NewCycleForm />)

    const input = screen.getByRole('combobox', { name: /vou trabalhar em/i })

    fireEvent.click(input)

    expect(input).toBeInTheDocument()
    fireEvent.change(input, { target: { value: 'projeto 2' } })
    const selectedOption = screen.getByDisplayValue('projeto 2')

    expect(selectedOption).toHaveValue('projeto 2')
  })

  const mock = {
    id: '1681935529573',
    task: 'projeto 1',
    minutesAmount: 10,
    startDate: '2023-04-19T20:18:49.573Z',
  }

  it('should not disabled input fields when  not there is an active cycle', () => {
    useCycle.mockReturnValueOnce({
      activeCycle: undefined,
      cycles: [mock],
      activeCycleId: null,
      amountSecondsPassed: 0,
      createNewCycle: jest.fn(),
      markCurrentCycleAsFinished: jest.fn(),
      setSecondsPassed: jest.fn(),
      interruptCurrentCycles: jest.fn(),
    })
    render(<NewCycleForm />)

    const input = screen.getByRole('combobox', { name: /vou trabalhar em/i })

    expect(input).not.toBeDisabled()
    expect(
      screen.getByRole('spinbutton', {
        name: /durante/i,
      }),
    ).not.toBeDisabled()
  })
  it('should disables input fields when there is an active cycle', () => {
    useCycle.mockReturnValueOnce({
      activeCycle: mock,
      cycles: [mock],
      activeCycleId: null,
      amountSecondsPassed: 0,
      createNewCycle: jest.fn(),
      markCurrentCycleAsFinished: jest.fn(),
      setSecondsPassed: jest.fn(),
      interruptCurrentCycles: jest.fn(),
    })

    render(<NewCycleForm />)

    const input = screen.getByRole('combobox', { name: /vou trabalhar em/i })

    expect(input).toBeDisabled()
    expect(
      screen.getByRole('spinbutton', {
        name: /durante/i,
      }),
    ).toBeDisabled()
  })
})
