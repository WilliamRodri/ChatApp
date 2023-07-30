import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: {
            primary: string,
            secondary: string,
            terceira: string,

            background: string,
            backgroundOther: string,
            textColor: string,
            colorIcons: string,
        }
    }
}