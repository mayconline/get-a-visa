import React from 'react';
import { render } from '@/utils/testProvider';
import { HowWorking } from '@/pagesTemplate/HomePage/HowWorking';

describe('<HowWorking />', () => {
  it('should display the "Veja como funciona" button', () => {
    const { getByRole } = render(<HowWorking />);
    expect(
      getByRole('button', { name: /veja como funciona/i })
    ).toBeInTheDocument();
  });

  it('should display the main title', () => {
    const { getByText } = render(<HowWorking />);
    expect(getByText(/sua tranquilidade não tem preço/i)).toBeInTheDocument();
  });

  it('should display the process steps', () => {
    const { getByText } = render(<HowWorking />);
    expect(getByText(/etapa inicial/i)).toBeInTheDocument();
    expect(getByText(/processo de entrevista/i)).toBeInTheDocument();
    expect(getByText(/entrega de documentos/i)).toBeInTheDocument();
  });
});
