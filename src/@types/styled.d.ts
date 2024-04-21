// Importa a biblioteca styled-components
import 'styled-components';

// Importa o tema padrão da pasta themes (provavelmente de um arquivo separado)
import { defaultTheme } from '../styles/themes/default';

// Define uma interface chamada ThemeType que corresponde à estrutura do objeto defaultTheme
type ThemeType = typeof defaultTheme;

// Estende o export padrão de styled-components com a interface ThemeType
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {} // Use DefaultTheme para consistência
}
