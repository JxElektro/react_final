import '@testing-library/jest-dom/extend-expect';
import React from 'react'
import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Askme from '../Componentes/form'


test.skip('rendering and submitting a basic Formik form', async () => {
  const handleSubmit = jest.fn()
  render(<Askme onSubmit={handleSubmit} />)
  const user = userEvent.setup()

  await user.type(screen.getByLabelText(/name/i), 'John')
  await user.type(screen.getByLabelText(/email/i), 'john.dee@someemail.com')

  await user.click(screen.getByRole('button', {name: /submit/i}))

  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith({
      email: 'john.dee@someemail.com',
      name: 'John',
    }),
  )
})
