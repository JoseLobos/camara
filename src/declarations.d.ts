// Declaraciones simples para permitir importar archivos .jsx desde TypeScript
declare module '*.jsx' {
  const Component: any;
  export default Component;
}
