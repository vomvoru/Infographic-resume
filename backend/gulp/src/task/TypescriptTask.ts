import * as ts from 'gulp-typescript'
import Task from './Task'

export default class TypescriptTask extends Task<TypescriptTaskConfig> {
  public run() {
    if(this.src === undefined || this.dest === undefined || this.config === undefined) {
      return
    }
    const tsProject = ts.createProject(this.config.tsconfig)
    const tsResult = this.src.pipe(tsProject())

    return tsResult.js.pipe(this.dest)
  }
}

interface TypescriptTaskConfig {
  tsconfig: string
}
