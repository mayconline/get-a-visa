import React from 'react';
import { render, within } from '@/utils/testProvider';
import { Hero } from '@/pagesTemplate/HomePage/Hero';

describe('<Hero />', () => {
  it('should display the main title', () => {
    const { getByText } = render(<Hero />);
    expect(
      getByText('Tire seu Visto conosco e não tenha nenhuma surpresa negativa!')
    ).toBeInTheDocument();
  });

  it('should display the consultancy text', () => {
    const { getByText } = render(<Hero />);
    expect(
      getByText(/consultoria completa para você e sua família/i)
    ).toBeInTheDocument();
  });

  it('should display the "Saiba mais" button', () => {
    const { getByRole } = render(<Hero />);
    expect(getByRole('button', { name: /saiba mais/i })).toBeInTheDocument();
  });

  it('should display the "Conheça a Bruna" text', () => {
    const { getByText } = render(<Hero />);
    expect(getByText(/conheça a bruna/i)).toBeInTheDocument();
  });

  it('should display the "Ver vídeo" text', () => {
    const { getByText } = render(<Hero />);
    expect(getByText(/ver vídeo/i)).toBeInTheDocument();
  });

  it('should display the statistics', () => {
    const { getByText } = render(<Hero />);
    expect(getByText('509')).toBeInTheDocument();
    expect(getByText('Vistos Tirados')).toBeInTheDocument();
    expect(getByText('602')).toBeInTheDocument();
    expect(getByText('Passaportes Tirados')).toBeInTheDocument();
    expect(getByText('634')).toBeInTheDocument();
    expect(getByText('Famílias Felizes')).toBeInTheDocument();
  });

  it('should display the dream call to action', () => {
    const { getByText, getByRole } = render(<Hero />);
    expect(
      getByText('Realize o seu sonho com a ajuda da Tirar Visto!')
    ).toBeInTheDocument();
    expect(
      getByText(/você não terá dor de cabeça para todo o processo do visto/i)
    ).toBeInTheDocument();
    expect(
      getByRole('button', { name: /tirar meu visto agora/i })
    ).toBeInTheDocument();
  });

  it('should display the navigation menu items on desktop', () => {
    const { getByTestId } = render(<Hero />);
    const desktopMenu = getByTestId('desktop-menu');
    expect(
      within(desktopMenu).getByRole('link', { name: /home/i })
    ).toBeInTheDocument();
    expect(
      within(desktopMenu).getByRole('link', { name: /quem somos/i })
    ).toBeInTheDocument();
    expect(
      within(desktopMenu).getByRole('link', { name: /serviços/i })
    ).toBeInTheDocument();
    expect(
      within(desktopMenu).getByRole('link', { name: /contato/i })
    ).toBeInTheDocument();
  });

  it('should display the navigation menu items on mobile after opening the menu', () => {
    const { getByTestId } = render(<Hero />);
    const mobileMenu = getByTestId('mobile-menu');
    const menuButton = within(mobileMenu).getByLabelText(/menu/i);
    menuButton.click();
    expect(
      within(mobileMenu).getByRole('link', { name: /home/i })
    ).toBeInTheDocument();
    expect(
      within(mobileMenu).getByRole('link', { name: /quem somos/i })
    ).toBeInTheDocument();
    expect(
      within(mobileMenu).getByRole('link', { name: /serviços/i })
    ).toBeInTheDocument();
    expect(
      within(mobileMenu).getByRole('link', { name: /contato/i })
    ).toBeInTheDocument();
  });
});
