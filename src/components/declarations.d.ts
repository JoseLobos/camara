// Declaraciones simples para permitir importar archivos .jsx desde TypeScript
declare module '*.jsx' {
  const Component: any;
  export default Component;
}

declare module '../Navbar/Navbar.jsx' {
  const Component: any;
  export default Component;
}

declare module '../Tabs/Tabs.jsx' {
  const Component: any;
  export default Component;
}
