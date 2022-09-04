import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('should display inner text', async () => {
    render(<Button>Hazme click</Button>)
    const buttonFound = await screen.findByText('Hazme click')
    expect(buttonFound).toBeDefined()
    expect(buttonFound).toHaveTextContent('Hazme click')
  })

  it('should trigger the click', async () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Hazme click</Button>)
    const buttonFound = await screen.findByText('Hazme click')
    fireEvent(buttonFound,new CustomEvent('clickbutton',{})) //eventValue y detail for pichincha
    expect(onClick).toBeCalled()

  })
})
