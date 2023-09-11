import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT")
 
const config: Config = withMT(
  {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {},
    },
    daisyui: {
      themes: [
        {
          mytheme: {
            primary: "#FD5E53",
  
            secondary: "#6D9886",
  
            accent: "#e6ec34",
  
            neutral: "#f1feff",
  
            "base-100": "#FFFFFF",
  
            info: "#3ABFF8",
  
            success: "#e6ec34",
  
            warning: "#1490a3d6",
  
            error: "#F87272",
          },
        },
      ],
    },
    plugins: [require("daisyui")],
  }
)
export default config
 
