import { useColorScheme } from 'react-native';

// Hook customizado para retornar as cores com base no esquema de cores
const useThemeColor = () => {
  const colorScheme = useColorScheme(); // Obtém o esquema de cores (light ou dark)

  // Definir as cores para dark e light
  const Color = {
    light: {
      black: 'black',
      white: 'white',
      color: '#000000',
      backgroundColor: '#ffffff',
      button: '#4b8cc8',
      pressed: 'yellow',
      render: '#f6f6f6',
    },
    dark: {
      black: 'black',
      white: 'white',
      color: '#FFFFFF',
      backgroundColor: '#313131',
      button: '#4b8cc8',
      pressed: 'yellow',
      render: '#5a5a5a',
    },
  };

  // Retorna um objeto com as duas cores
  return {
    color: colorScheme === 'dark' ? Color.dark : Color.light,
  };
};

export default useThemeColor;

//import
//const {color} = useThemeColor();