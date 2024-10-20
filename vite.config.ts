import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // let port = 3000;
  // if (+process.env.APP_PORT) {
  //   port = +process.env.APP_PORT;
  // }
  return {
    plugins: [react()],
    // server: {
    //   port: port,
    // }
  }
})
