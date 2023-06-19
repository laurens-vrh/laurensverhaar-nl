import { defineConfig } from "astro/config";
import compress from "astro-compress";

import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
	outDir: "./dist",
	integrations: [
		purgecss(),
		compress({
			css: true,
			html: true,
			img: true,
			js: true,
			svg: true,
			path: "./dist"
		})
	]
});
