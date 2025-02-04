export const currencies = [
  { name: 'US Dollar', code: 'USD', symbol: '$' },
  { name: 'British Pound', code: 'GBP', symbol: '£' },
  { name: 'Australian Dollar', code: 'AUD', symbol: '$' },
  { name: 'Canadian Dollar', code: 'CAD', symbol: '$' }
];

export const currencyMap = currencies.reduce((acc, currency) => {
  acc[currency.code] = currency;
  return acc;
}, {} as Record<string, typeof currencies[0]>);
