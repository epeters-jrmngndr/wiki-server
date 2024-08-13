import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
