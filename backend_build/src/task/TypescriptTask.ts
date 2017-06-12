import * as ts from 'gulp-typescript'
import Task from './Task'

export default class TypescriptTask extends Task<TypescriptTaskConfig> {
  public run(): NodeJS.ReadWriteStream {
    if(this.src === undefined || this.dest === undefined || this.config === undefined) {
      throw new Error('The parameter value is invalid.')
    }
    const tsProject = ts.createProject(this.config.tsconfig)
    const tsResult = this.src.pipe(tsProject())

    return tsResult.js.pipe(this.dest)
  }
}

export interface TypescriptTaskConfig {
  tsconfig: string
}
