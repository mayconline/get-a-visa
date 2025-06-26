import React from 'react';
import { render } from '@/utils/testProvider';
import { TopDestinations } from '@/pagesTemplate/HomePage/TopDestinations';

describe('<TopDestinations />', () => {
  it('should display the "Top Destinos" button', () => {
    const { getByRole } = render(<TopDestinations />);
    expect(getByRole('button', { name: /top destinos/i })).toBeInTheDocument();
  });

  it('should display the title "Destinos mais procurados"', () => {
    const { getByText } = render(<TopDestinations />);
    expect(getByText('Destinos mais procurados')).toBeInTheDocument();
  });

  it('should display the destinations description text', () => {
    const { getByText } = render(<TopDestinations />);
    expect(
      getByText(/confira os destinos mais procurados/i)
    ).toBeInTheDocument();
  });

  it('should display the "Conheça mais" button', () => {
    const { getByRole } = render(<TopDestinations />);
    expect(getByRole('button', { name: /conheça mais/i })).toBeInTheDocument();
  });

  it('should display at least 6 illustrated destinations', () => {
    const { getByAltText } = render(<TopDestinations />);
    expect(getByAltText(/bali/i)).toBeInTheDocument();
    expect(getByAltText(/nova york/i)).toBeInTheDocument();
    expect(getByAltText(/santorini/i)).toBeInTheDocument();
    expect(getByAltText(/paris/i)).toBeInTheDocument();
    expect(getByAltText(/cidade do cabo/i)).toBeInTheDocument();
    expect(getByAltText(/mumbai/i)).toBeInTheDocument();
  });
});
