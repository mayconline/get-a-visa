import React from 'react';
import { render } from '@/utils/testProvider';
import { Copyright } from '@/pagesTemplate/HomePage/Copyright';

describe('<Copyright />', () => {
  it('should display the copyright text with the current year', () => {
    const { getByText } = render(<Copyright />);
    const year = new Date().getFullYear();
    expect(
      getByText(`© ${year} Tirar Visto - Todos os Direitos Reservados`)
    ).toBeInTheDocument();
  });
});
