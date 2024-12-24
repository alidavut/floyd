const lit = (s: TemplateStringsArray, ...args: unknown[]): string => s.map((ss, i) => `${ss}${args[i] || ''}`).join('');

export const sql = lit;
