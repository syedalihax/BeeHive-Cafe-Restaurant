export function Poppins(config: any) {
  return {
    variable: config?.variable || '--font-poppins',
    className: 'font-sans',
    style: {
      fontFamily: 'Poppins, sans-serif'
    }
  };
}

export function Playfair_Display(config: any) {
  return {
    variable: config?.variable || '--font-playfair',
    className: 'font-serif',
    style: {
      fontFamily: 'Playfair Display, serif'
    }
  };
}
