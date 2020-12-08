import { render, fireEvent } from '@testing-library/react'
import ShopTitle from './ShopTitle'
import user from '@testing-library/user-event'

const testDatabase = {
  shops: {
    allIds: ['x'],
    byId: {
      x: {
        id: 'x',
        title: 'shopX',
      },
    },
  },
}

const testProps = {
  shopId: 'x',
  database: testDatabase,
  changeTitle: jest.fn(),
}

describe('ShopTitle', () => {
  it('shows the correct title', () => {
    const props = { ...testProps, title: 'shopX' }
    const { getByTestId } = render(<ShopTitle {...props} />)
    const title = getByTestId('title-shop')
    expect(title).toHaveValue('shopX')
  })

  it('calls on changeTitle', () => {
    const changeTitleMock = jest.fn()
    const props = { ...testProps, changeTitle: changeTitleMock }
    const { getByTestId } = render(<ShopTitle {...props} />)
    const inputField = getByTestId('title-shop')
    fireEvent.change(inputField, { target: { value: 'test' } })
    expect(changeTitleMock).toHaveBeenCalledTimes(1)
    expect(changeTitleMock).toHaveBeenCalledWith('test')
  })
})
