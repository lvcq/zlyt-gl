import { dest, series } from 'gulp';
import { createProject } from 'gulp-typescript';
import merge from 'merge2';

function tsToJs() {
    const tsProject = createProject('tsconfig.zlyt.json', { noImplicitAny: true });
    const tsResult = tsProject.src()
        .pipe(tsProject());
    return merge([
        tsResult.dts.pipe(dest('dist')),
        tsResult.js.pipe(dest('dist'))
    ]);
}

export default series(tsToJs);