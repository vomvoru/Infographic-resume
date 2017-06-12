import gulpTslint from 'gulp-tslint'
import * as tslint from 'tslint'
import Task from './Task'

export default class TslintTask extends Task<TslintTaskConfig> {
  public run(): NodeJS.ReadWriteStream {
    if(this.src === undefined || this.config === undefined) {
      throw new Error('The parameter value is invalid.')
    }

    const tsProject = tslint.Linter.createProgram(this.config.tsconfig)

    const tslintConfig = {
      program: tsProject,
      formatter: 'verbose',
    }

    const tslintReportConfig = {
      reportLimit: 2,
      allowWarnings: true,
    }

    return this.src
      .pipe(gulpTslint(tslintConfig))
      .pipe(gulpTslint.report(tslintReportConfig))
  }
}

export interface TslintTaskConfig {
  tsconfig: string
}
