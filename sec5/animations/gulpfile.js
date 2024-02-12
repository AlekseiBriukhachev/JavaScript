const gulp = require("gulp");
const browsersync = require("browser-sync");

gulp.task("watch", () => {
	browsersync.init({
		server: "",
		port: 4000,
		notify: true,
	});

	gulp.watch("index.html");
});

gulp.task("default", gulp.parallel("watch"));
