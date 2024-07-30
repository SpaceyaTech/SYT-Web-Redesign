// vite.config.js
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import react from "file:///C:/Users/user/Documents/SYT-Web-Redesign/node_modules/.pnpm/@vitejs+plugin-react@4.2.1_vite@5.2.10_@types+node@20.14.1_/node_modules/@vitejs/plugin-react/dist/index.mjs";
import million from "file:///C:/Users/user/Documents/SYT-Web-Redesign/node_modules/.pnpm/million@3.0.6_rollup@4.17.2/node_modules/million/dist/packages/compiler.mjs";
import { defineConfig, loadEnv } from "file:///C:/Users/user/Documents/SYT-Web-Redesign/node_modules/.pnpm/vite@5.2.10_@types+node@20.14.1/node_modules/vite/dist/node/index.js";
var __vite_injected_original_import_meta_url = "file:///C:/Users/user/Documents/SYT-Web-Redesign/vite.config.js";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx1c2VyXFxcXERvY3VtZW50c1xcXFxTWVQtV2ViLVJlZGVzaWduXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx1c2VyXFxcXERvY3VtZW50c1xcXFxTWVQtV2ViLVJlZGVzaWduXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy91c2VyL0RvY3VtZW50cy9TWVQtV2ViLVJlZGVzaWduL3ZpdGUuY29uZmlnLmpzXCI7LyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXHJcbi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwidml0ZXN0XCIgLz5cclxuaW1wb3J0IHBhdGgsIHsgZGlybmFtZSB9IGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tIFwidXJsXCI7XHJcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcclxuaW1wb3J0IG1pbGxpb24gZnJvbSBcIm1pbGxpb24vY29tcGlsZXJcIjtcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSBcInZpdGVcIjtcclxuXHJcbmNvbnN0IF9fZmlsZW5hbWUgPSBmaWxlVVJMVG9QYXRoKGltcG9ydC5tZXRhLnVybCk7XHJcbmNvbnN0IF9fZGlybmFtZSA9IGRpcm5hbWUoX19maWxlbmFtZSk7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XHJcbiAgY29uc3QgZW52ID0gbG9hZEVudihtb2RlLCBwcm9jZXNzLmN3ZCgpLCBcIlwiKTtcclxuICByZXR1cm4ge1xyXG4gICAgZGVmaW5lOiB7XHJcbiAgICAgIFwicHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0FQSV9CQVNFX1VSTFwiOiBKU09OLnN0cmluZ2lmeShcclxuICAgICAgICBlbnYuUkVBQ1RfQVBQX0FQSV9CQVNFX1VSTFxyXG4gICAgICApLFxyXG4gICAgfSxcclxuICAgIHBsdWdpbnM6IFttaWxsaW9uLnZpdGUoeyBhdXRvOiB0cnVlIH0pLCByZWFjdCgpXSxcclxuICAgIHRlc3Q6IHtcclxuICAgICAgaW5jbHVkZTogW1wic3JjLyoqLyoudGVzdC5qc1wiXSwgXHJcbiAgICB9LFxyXG4gICAgc2VydmVyOiB7XHJcbiAgICAgIHdhdGNoOiB7XHJcbiAgICAgICAgdXNlUG9sbGluZzogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICByZXNvbHZlOiB7XHJcbiAgICAgIGFsaWFzOiB7XHJcbiAgICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH07XHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBR0EsT0FBTyxRQUFRLGVBQWU7QUFDOUIsU0FBUyxxQkFBcUI7QUFDOUIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sYUFBYTtBQUNwQixTQUFTLGNBQWMsZUFBZTtBQVAySixJQUFNLDJDQUEyQztBQVNsUCxJQUFNLGFBQWEsY0FBYyx3Q0FBZTtBQUNoRCxJQUFNLFlBQVksUUFBUSxVQUFVO0FBR3BDLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxNQUFNO0FBQ3hDLFFBQU0sTUFBTSxRQUFRLE1BQU0sUUFBUSxJQUFJLEdBQUcsRUFBRTtBQUMzQyxTQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsTUFDTixzQ0FBc0MsS0FBSztBQUFBLFFBQ3pDLElBQUk7QUFBQSxNQUNOO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUyxDQUFDLFFBQVEsS0FBSyxFQUFFLE1BQU0sS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDO0FBQUEsSUFDL0MsTUFBTTtBQUFBLE1BQ0osU0FBUyxDQUFDLGtCQUFrQjtBQUFBLElBQzlCO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixPQUFPO0FBQUEsUUFDTCxZQUFZO0FBQUEsTUFDZDtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxRQUNMLEtBQUssS0FBSyxRQUFRLFdBQVcsT0FBTztBQUFBLE1BQ3RDO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
