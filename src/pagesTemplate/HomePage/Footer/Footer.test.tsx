import React from 'react';
import { render, within } from '@/utils/testProvider';
import { Footer } from '@/pagesTemplate/HomePage/Footer';

describe('<Footer />', () => {
  it('should render the CallCenter section', () => {
    const { getByRole, getByText } = render(<Footer />);
    expect(
      getByRole('button', { name: /central de atendimento/i })
    ).toBeInTheDocument();
    expect(getByText(/está com alguma dúvida/i)).toBeInTheDocument();
  });

  it('should render the Newsletter section', () => {
    const { getByText } = render(<Footer />);
    expect(getByText(/receba novidades/i)).toBeInTheDocument();
  });

  it('should render the SocialLinks section and its buttons', () => {
    const { getByText, getByRole } = render(<Footer />);
    expect(getByText(/siga em nossa redes/i)).toBeInTheDocument();
    expect(getByRole('button', { name: /instagram/i })).toBeInTheDocument();
    expect(getByRole('button', { name: 'X' })).toBeInTheDocument();
    expect(getByRole('button', { name: /facebook/i })).toBeInTheDocument();
    expect(getByRole('button', { name: /youtube/i })).toBeInTheDocument();
  });
});

describe('FooterLinks sections', () => {
  it('should render Empresa links inside Empresa section', () => {
    const { getByTestId } = render(<Footer />);
    const empresaSection = getByTestId('footer-empresa');
    expect(within(empresaSection).getByText(/home/i)).toBeInTheDocument();
    expect(within(empresaSection).getByText(/quem somos/i)).toBeInTheDocument();
    expect(within(empresaSection).getByText(/serviços/i)).toBeInTheDocument();
    expect(within(empresaSection).getByText(/contato/i)).toBeInTheDocument();
  });

  it('should render Novidades links inside Novidades section', () => {
    const { getByTestId } = render(<Footer />);
    const novidadesSection = getByTestId('footer-novidades');
    expect(
      within(novidadesSection).getByText(/passaporte/i)
    ).toBeInTheDocument();
    expect(within(novidadesSection).getByText(/visto/i)).toBeInTheDocument();
    expect(
      within(novidadesSection).getByText(/entrevista/i)
    ).toBeInTheDocument();
    expect(
      within(novidadesSection).getByText(/polícia federal/i)
    ).toBeInTheDocument();
  });

  it('should render Suporte links inside Suporte section', () => {
    const { getByTestId } = render(<Footer />);
    const suporteSection = getByTestId('footer-suporte');
    expect(within(suporteSection).getByText(/faq/i)).toBeInTheDocument();
    expect(within(suporteSection).getByText(/^contato$/i)).toBeInTheDocument();
    expect(
      within(suporteSection).getByText(/dúvidas frequentes/i)
    ).toBeInTheDocument();
  });
});
