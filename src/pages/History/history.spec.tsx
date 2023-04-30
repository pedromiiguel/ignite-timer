import { History } from '.'
import { render, screen } from '../../utils/test-utils'

jest.mock('../../hooks/useCycle', () => ({
  useCycle: () => ({
    cycles: [
      {
        id: '1681935529573',
        task: 'projeto 1',
        minutesAmount: 10,
        startDate: new Date(),
      },
      {
        id: '1681935529574',
        task: 'nova task',
        minutesAmount: 20,
        startDate: new Date().getHours() - 2,
        interruptedDate: new Date().getHours() + 2,
      },

      {
        id: '1681935529575',
        task: 'new task',
        minutesAmount: 20,
        startDate: new Date().getHours() - 2,
        finishedDate: new Date().getHours() + 2,
      },
    ],
  }),
}))
describe('<History/>', () => {
  it('should renders correctly', () => {
    render(<History />)
    expect(screen.getByRole('heading', { name: 'Meu histórico' }))
    expect(screen.getByRole('columnheader', { name: /tarefa/i }))
    expect(
      screen.getByRole('columnheader', {
        name: /duração/i,
      }),
    )
    expect(
      screen.getByRole('columnheader', {
        name: /início/i,
      }),
    )
    expect(
      screen.getByRole('columnheader', {
        name: /início/i,
      }),
    )

    expect(
      screen.getByRole('cell', {
        name: /projeto 1/i,
      }),
    )

    expect(
      screen.getByRole('cell', {
        name: /10 minutos/i,
      }),
    )

    expect(
      screen.getByRole('cell', {
        name: /há menos de um minuto/i,
      }),
    )

    expect(
      screen.getByRole('cell', {
        name: /Em andamento/i,
      }),
    )
  })

  it('should render status when has interruptedDate', () => {
    render(<History />)

    expect(
      screen.getByRole('cell', {
        name: /Interrompido/i,
      }),
    )
  })

  it('should render status when has interruptedDate', () => {
    render(<History />)

    expect(
      screen.getByRole('cell', {
        name: /Concluído/i,
      }),
    )
  })
})
