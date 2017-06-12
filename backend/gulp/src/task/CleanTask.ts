import * as gulp from 'gulp'
import * as clean from 'gulp-clean'
import Task from './Task'

export default class CleanTask extends Task {
  public run() {
    if(this.src === undefined){
      return
    }
    return this.src.pipe(clean({force: true}))
  }
}
