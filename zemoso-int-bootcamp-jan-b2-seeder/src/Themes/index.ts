
type ColorPalette = {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
  
  type Typography = {
    fontFamily: string[];
    fontSize: string;
    fontWeight: string;
    color: string;
  };
  
  type Spacing = {
    small: string;
    medium: string;
    large: string;
  };
  type Button = {
      backgroundColor: string;
      color: string;
      borderRadius: string;
      padding: string;
      fontSize: string;
      fontWeight: string;
    };
    type Icon = {
      size: string;
      color: string;
    };
    type CheckboxStyles = {
      color: string;
      size: number;
      
    }
    
    type ImageStyles = {
      width: string;
      height: string;
      
    }
    
    type TextFieldStyles = {
      backgroundColor: string;
      borderRadius: string;
      padding: string;
      fontSize: string;
      
    }
    type Avatar = {
      width: string;
      height: string;
      backgroundColor: string;
      borderRadius: string;
      fontSize: string;
      fontWeight: string;
      color: string;
    };
    
    type Slider = {
      thumbSize: string;
      thumbColor: string;
      railColor: string;
      trackColor: string;
    };
  type Theme = {
    colors: ColorPalette;
    typography: {
      h1: Typography;
      h2: Typography;
      h3: Typography;
      h4: Typography;
      h5: Typography;
      h6: Typography;
      body1: Typography;
      body2: Typography;
      subtitle1:Typography;
      subtitle2:Typography;
    };
    spacing: Spacing;
    buttons: {
      primary: Button;
      secondary: Button;
      tertiary: Button;
    };
    icons: {
      logo: Icon;
      menu: Icon;
      search: Icon;
    };
    checkbox: CheckboxStyles;
    image: ImageStyles;
    textfield: TextFieldStyles;
    avatar: Avatar;
    slider: Slider;
  };
  
  const theme: Theme = {
    colors: {
      primary: "#0072C6",
      secondary: "#9BC2E6",
      background: "#F7F7F7",
      text: "#333333",
    },
    typography: {
      h1: {
        fontFamily: ["Roboto",'Open Sans'],
        fontSize: "100px",
        fontWeight: "bold",
        color:"blue",
      },
      h2: {
        fontFamily: ["Roboto",'Open Sans'],
        fontSize: "70px",
        fontWeight: "bold",
        color: "red",
      },
      h3: {
        fontFamily: ["Roboto",'Open Sans'],
        fontSize: "40px",
        fontWeight: "bold",
        color: "#333333",
      },
      h4: {
        fontFamily: ["Roboto",'Open Sans'],
        fontSize: "20px",
        fontWeight: "bold",
        color: "#333333",
      },
      h5: {
        fontFamily: ["Roboto",'Open Sans'],
        fontSize: "15px",
        fontWeight: "bold",
        color: "#333333",
      },
      h6: {
        fontFamily: ["Roboto",'Open Sans'],
        fontSize: "15px",
        fontWeight: "bold",
        color: "#333333",
      },
      body1: {
        fontFamily: ["Roboto",'Open Sans'],
        fontSize: "10px",
        fontWeight: "normal",
        color: "#666666",
      },
      body2: {
        fontFamily: ["Roboto",'Open Sans'],
        fontSize: "10px",
        fontWeight: "normal",
        color: "#666666",
      },
      subtitle1: {
          fontFamily: ["Roboto",'Open Sans'],
          fontSize: "10px",
          fontWeight: "normal",
          color: "#666666",
        },
      subtitle2: {
          fontFamily: ["Roboto",'Open Sans'],
          fontSize: "10px",
          fontWeight: "normal",
          color: "#666666",
        },
    },
    spacing: {
      small: "8px",
      medium: "16px",
      large: "24px",
    },
    buttons: {
      primary: {
        backgroundColor: '#0072C6',
        color: '#FFFFFF',
        borderRadius: '4px',
        padding: '8px 16px',
        fontSize: '16px',
        fontWeight: 'bold',
      },
      secondary: {
        backgroundColor: '#FFFFFF',
        color: '#0072C6',
        borderRadius: '4px',
        padding: '8px 16px',
        fontSize: '16px',
        fontWeight: 'bold',
      },
      tertiary: {
        backgroundColor: 'transparent',
        color: '#0072C6',
        borderRadius: '4px',
        padding: '8px 16px',
        fontSize: '16px',
        fontWeight: 'normal',
      },
    },
    icons: {
      logo: {
        size: '48px',
        color: '#0072C6',
      },
      menu: {
        size: '24px',
        color: '#333333',
      },
      search: {
        size: '24px',
        color: '#333333',
      },
    },
    checkbox: {
      color: "#0072C6",
      size: 30,
      
    },
    image: {
      width: "100%",
      height: "auto",
      
    },
    textfield: {
      backgroundColor: "#F7F7F7",
      borderRadius: "4px",
      padding: "12px",
      fontSize: "16px",
      
    },
    avatar: {
      width: '48px',
      height: '48px',
      backgroundColor: '#9BC2E6',
      borderRadius: '50%',
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#FFFFFF',
    },
    slider: {
      thumbSize: '24px',
      thumbColor: '#0072C6',
      railColor: '#9BC2E6',
      trackColor: '#0072C6',
    },
  
  };
  
  export default theme;
  
  export {}