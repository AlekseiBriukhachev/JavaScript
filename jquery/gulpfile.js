const gulp = require("gulp");
const browsersync = require("browser-sync");
const webpack = require("webpack-stream");

gulp.task("watch", () => {
	browsersync.init({
		server: "",
		port: 4000,
		notify: true,
	});

	gulp.watch("index.html");
});

gulp.task("build-js", () => {
	return gulp
		.src("./script.js")
		.pipe(
			webpack( {
				mode: "development",
				output: {
					filename: "bundle.js",
				},
				watch: true,
				devtool: "source-map",
				module: {
					rules: [
						{
							test: /\.m?js$/,
							exclude: /(node_modules|bower_components)/,
							use: {
								loader: 'babel-loader',
								options: {
									presets: [['@babel/preset-env', {
										debug: true,
										corejs: 3,
										useBuiltIns: "usage"
									}]]
								}
							}
						}
					]
				}
			})
		)
		.pipe(gulp.dest( "./dist"))
		.pipe(browsersync.stream());
});

gulp.task("default", gulp.parallel("watch", "build-js"));
