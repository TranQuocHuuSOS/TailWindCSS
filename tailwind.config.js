/** @type {import('tailwindcss').Config} */
module.exports = {
  purge:[
    "**/*.html"
  ],
  content: ["./src/**/*.{html,js}"],
  darkMode:"class",
  theme: {
    container:{
      center:true,
    },
    
    fontFamily:{
      'body':["'Poppins', sans-serif"]
    },
    extend: {
      boxShadow:{
        "pricing":"0px 2px 8px rgba(0,0,0,0.25)"
      },
      borderWidth:{
        "3":"3px",
      },
      maxWidth:{
        'xxs':"240px"
      },
      fontSize:{
        "h2":["40px",{lineHeight:1.5}],
        "h3":["32px",{lineHeight:1.5}],
        "h4":["22px",{lineHeight:1.5}],
        "h4-2":["24px",{lineHeight:"40px"}],
        "p-l":["18px",{lineHeight:"28px"}]
      },
      backgroundImgae:{
        'bg-1':"url(../images/bg/bg-1.svg)",
        'bg-1-dark':"url(../images/bg/bg-1-dark.svg)",
        'bg-2':"url(../images/bg/bg-2.svg)",
      },
      backgroundPosition:{
        'center-top':'center-top'
      },
      colors:{
        "second-text":"#AFAFAF",
        "light":'#BCD0E5',
        "secondary":'#173A56',
        "primary":'#02897A',
        "gray":{
          "1000":"#DEDEDE",
          "1001":"#EFEFEF",
        },
        "dark":{
          "DEFAULT":'#1F2E35',
          "800":'#22343D',
          "900":'#2F281E'
        }
      }
    },
  },
  variants:{
    extend:{
      backgroundColor:['dark']
    },
  },
  plugins: [],
}
