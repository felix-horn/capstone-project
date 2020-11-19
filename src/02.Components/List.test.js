import { render } from '@testing-library/react'
import List from './List'

describe('List', () => {
  it('renders the list correctly', () => {
    const { container } = render(
      <List
        list={{
          allIds: ['02c41e96', '0cb406e2', '7374dca9'],
          byId: {
            '02c41e96': {
              id: '02c41e96',
              titleListItem: 'Milk',
              isChecked: false,
            },
            '0cb406e2': {
              id: '0cb406e2',
              titleListItem: 'Butter',
              isChecked: false,
            },
            '7374dca9': {
              id: '7374dca9',
              titleListItem: 'Cheese',
              isChecked: true,
            },
          },
        }}
      />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
