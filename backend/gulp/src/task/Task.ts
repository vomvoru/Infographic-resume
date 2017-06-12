import * as gulp from 'gulp'

export default abstract class Task<T = undefined> {
  constructor(
    public readonly src?: NodeJS.ReadWriteStream,
    public readonly dest?: NodeJS.ReadWriteStream,
    public readonly config?: T,
  ) {}

  public abstract run(): NodeJS.ReadWriteStream

  public regist(taskName: string): void {
    gulp.task(taskName, this.run)
  }
}
