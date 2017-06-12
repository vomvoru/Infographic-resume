import * as clean from 'gulp-clean'
import Task from './Task'

export default class CleanTask extends Task {
  public run(): NodeJS.ReadWriteStream {
    if(this.src === undefined){
      throw new Error('The parameter value is invalid.')
    }
    return this.src.pipe(clean({force: true}))
  }
}
