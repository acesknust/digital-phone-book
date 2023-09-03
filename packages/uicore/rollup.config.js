import { swc, defineRollupSwcOption } from "rollup-plugin-swc3";
import autoprefixer from "autoprefixer";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import css from "rollup-plugin-css-porter";

const entryPoints = ["kiosk", "kioskadmin", "site", "superadmin", "shared"];

const external = [
	"react",
	"clsx",
	"next/link",
	"styled-jsx",
	"next/navigation",
	"react/jsx-runtime",
	"react-router-dom",
	"browser-image-compression",
];

const generateConfig = (name) => {
	return [
		{
			plugins: [dts(), css({ dest: `dist/${name}.css` })],
			input: [`src/entry/${name}.ts`],
			output: [
				{
					file: `dist/${name}.d.ts`,
					format: "es",
					exports: "named",
				},
			],
			external: external,
		},
		{
			plugins: [
				swc(
					defineRollupSwcOption({
						minify: true,
					})
				),
				postcss({
					plugins: [autoprefixer()],
					extract: true,
					minimize: true,
				}),
			],
			input: [`src/entry/${name}.ts`],
			output: [
				{
					file: `dist/${name}.esm.js`,
					format: "es",
					exports: "named",
				},
				{
					file: `dist/${name}.cjs`,
					format: "cjs",
					exports: "named",
				},
			],
			external: external,
		},
	];
};

const rollupConfig = entryPoints.flatMap(generateConfig);

export default rollupConfig;
