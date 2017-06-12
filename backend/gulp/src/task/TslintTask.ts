import gulpTslint from 'gulp-tslint'
import * as tslint from 'tslint'
import Task from './Task'

export default class TslintTask extends Task<TslintTaskConfig> {
  public run() {
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

interface TslintTaskConfig {
  tsconfig: string
}
