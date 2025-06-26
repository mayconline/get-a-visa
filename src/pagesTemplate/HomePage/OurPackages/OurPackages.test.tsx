import React from 'react';
import { render, within } from '@/utils/testProvider';
import { OurPackages } from '@/pagesTemplate/HomePage/OurPackages';

describe('<OurPackages />', () => {
  it('should display the "Pacotes" button', () => {
    const { getByRole } = render(<OurPackages />);
    expect(getByRole('button', { name: /pacotes/i })).toBeInTheDocument();
  });

  it('should display the title "Confira nossos pacotes"', () => {
    const { getByText } = render(<OurPackages />);
    expect(getByText(/confira nossos pacotes/i)).toBeInTheDocument();
  });

  it('should display the package names in their respective cards', () => {
    const { getAllByTestId } = render(<OurPackages />);
    const cards = getAllByTestId('package-card');
    expect(within(cards[0]).getByText(/passaporte/i)).toBeInTheDocument();
    expect(
      within(cards[1]).getByText(/passaporte \+ visto/i)
    ).toBeInTheDocument();
    expect(
      within(cards[2]).getByText(/consultoria completa/i)
    ).toBeInTheDocument();
  });

  it('should display navigation buttons', () => {
    const { getByRole } = render(<OurPackages />);

    expect(getByRole('button', { name: /arrow-left/i })).toBeInTheDocument();
    expect(getByRole('button', { name: /arrow-right/i })).toBeInTheDocument();
  });
});
