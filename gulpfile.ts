import { dest, series } from 'gulp';
import { createProject } from 'gulp-typescript';
import merge from 'merge2';
import del from 'del';

function tsToJs() {
    const tsProject = createProject('tsconfig.zlyt.json', { noImplicitAny: true });
    const tsResult = tsProject.src()
        .pipe(tsProject());
    return merge([
        tsResult.dts.pipe(dest('dist')),
        tsResult.js.pipe(dest('dist'))
    ]);

}

async function cleanExamplesDist(){
   await  del(['examples/dist/**'])
}

function buildExamplesf() {
    const tsProject = createProject('tsconfig.examples.json', { noImplicitAny: true });
    const tsResult = tsProject.src()
        .pipe(tsProject());
    return merge([
        tsResult.dts.pipe(dest('examples/dist')),
        tsResult.js.pipe(dest('examples/dist'))
    ]);
}

export default series(tsToJs);
export const buildExamples = series(cleanExamplesDist,buildExamplesf)