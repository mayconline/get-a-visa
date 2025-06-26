import React from 'react';
import { render } from '@/utils/testProvider';
import { CopyMessage } from '@/pagesTemplate/HomePage/CopyMessage';

describe('<CopyMessage />', () => {
  it('should display the main title', () => {
    const { getByText } = render(<CopyMessage />);
    expect(
      getByText('Consultoria completa para tirar seu visto', { exact: false })
    ).toBeInTheDocument();
  });

  it('should display the trust message', () => {
    const { getByText } = render(<CopyMessage />);
    expect(getByText(/você esta em boas mãos/i)).toBeInTheDocument();
  });
});
