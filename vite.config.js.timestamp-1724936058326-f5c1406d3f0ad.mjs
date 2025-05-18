// vite.config.js
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import react from "file:///home/andrew-dev/Desktop/Dev/SYT/SYT-Web-Redesign/node_modules/.pnpm/@vitejs+plugin-react@4.3.1_vite@5.4.2_@types+node@20.16.2_/node_modules/@vitejs/plugin-react/dist/index.mjs";
import million from "file:///home/andrew-dev/Desktop/Dev/SYT/SYT-Web-Redesign/node_modules/.pnpm/million@3.1.11_rollup@4.21.1/node_modules/million/dist/packages/compiler.mjs";
import { defineConfig, loadEnv } from "file:///home/andrew-dev/Desktop/Dev/SYT/SYT-Web-Redesign/node_modules/.pnpm/vite@5.4.2_@types+node@20.16.2/node_modules/vite/dist/node/index.js";
var __vite_injected_original_import_meta_url = "file:///home/andrew-dev/Desktop/Dev/SYT/SYT-Web-Redesign/vite.config.js";
var __filename = fileURLToPath(__vite_injected_original_import_meta_url);
var __dirname = dirname(__filename);
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.REACT_APP_API_BASE_URL": JSON.stringify(
        env.REACT_APP_API_BASE_URL
      )
    },
    plugins: [million.vite({ auto: true }), react()],
    test: {
      include: ["src/**/*.test.js"]
    },
    server: {
      watch: {
        usePolling: true
      }
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src")
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9hbmRyZXctZGV2L0Rlc2t0b3AvRGV2L1NZVC9TWVQtV2ViLVJlZGVzaWduXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9hbmRyZXctZGV2L0Rlc2t0b3AvRGV2L1NZVC9TWVQtV2ViLVJlZGVzaWduL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2FuZHJldy1kZXYvRGVza3RvcC9EZXYvU1lUL1NZVC1XZWItUmVkZXNpZ24vdml0ZS5jb25maWcuanNcIjsvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4vLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpdGVzdFwiIC8+XG5pbXBvcnQgcGF0aCwgeyBkaXJuYW1lIH0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tIFwidXJsXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5pbXBvcnQgbWlsbGlvbiBmcm9tIFwibWlsbGlvbi9jb21waWxlclwiO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSBcInZpdGVcIjtcblxuY29uc3QgX19maWxlbmFtZSA9IGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKTtcbmNvbnN0IF9fZGlybmFtZSA9IGRpcm5hbWUoX19maWxlbmFtZSk7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XG4gIGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSwgXCJcIik7XG4gIHJldHVybiB7XG4gICAgZGVmaW5lOiB7XG4gICAgICBcInByb2Nlc3MuZW52LlJFQUNUX0FQUF9BUElfQkFTRV9VUkxcIjogSlNPTi5zdHJpbmdpZnkoXG4gICAgICAgIGVudi5SRUFDVF9BUFBfQVBJX0JBU0VfVVJMXG4gICAgICApLFxuICAgIH0sXG4gICAgcGx1Z2luczogW21pbGxpb24udml0ZSh7IGF1dG86IHRydWUgfSksIHJlYWN0KCldLFxuICAgIHRlc3Q6IHtcbiAgICAgIGluY2x1ZGU6IFtcInNyYy8qKi8qLnRlc3QuanNcIl0sXG4gICAgfSxcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIHdhdGNoOiB7XG4gICAgICAgIHVzZVBvbGxpbmc6IHRydWUsXG4gICAgICB9LFxuICAgIH0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IHtcbiAgICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFHQSxPQUFPLFFBQVEsZUFBZTtBQUM5QixTQUFTLHFCQUFxQjtBQUM5QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxhQUFhO0FBQ3BCLFNBQVMsY0FBYyxlQUFlO0FBUG9LLElBQU0sMkNBQTJDO0FBUzNQLElBQU0sYUFBYSxjQUFjLHdDQUFlO0FBQ2hELElBQU0sWUFBWSxRQUFRLFVBQVU7QUFHcEMsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDeEMsUUFBTSxNQUFNLFFBQVEsTUFBTSxRQUFRLElBQUksR0FBRyxFQUFFO0FBQzNDLFNBQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxNQUNOLHNDQUFzQyxLQUFLO0FBQUEsUUFDekMsSUFBSTtBQUFBLE1BQ047QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTLENBQUMsUUFBUSxLQUFLLEVBQUUsTUFBTSxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUM7QUFBQSxJQUMvQyxNQUFNO0FBQUEsTUFDSixTQUFTLENBQUMsa0JBQWtCO0FBQUEsSUFDOUI7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLE9BQU87QUFBQSxRQUNMLFlBQVk7QUFBQSxNQUNkO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsS0FBSyxLQUFLLFFBQVEsV0FBVyxPQUFPO0FBQUEsTUFDdEM7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
