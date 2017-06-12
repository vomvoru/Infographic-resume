import * as chai from 'chai'
import * as chaiPromised from 'chai-as-promised'
import * as fs from 'fs'

import CleanTask from '../../../task/CleanTask'
import * as gulp from 'gulp'

import * as streamToPromise from 'stream-to-promise'

chai.should()
chai.use(chaiPromised)

describe('clean task', () => {
  beforeEach(function () {
    var exists = fs.existsSync('./tmp');
    if (!exists) { fs.mkdirSync('./tmp'); }
  });

  it('remove a file', async () => {
    // given
    const tmpFile = './tmp/dir/test.js'
    const clean = new CleanTask(gulp.src('./tmp'))

    fs.mkdirSync('./tmp/dir')
    fs.writeFileSync(tmpFile, 'content')

    // when
    await streamToPromise(clean.run())

    // then
    fs.existsSync(tmpFile).should.equal(false)
  })

  afterEach(async () => {
    const clean = new CleanTask(gulp.src('./tmp'))

    await streamToPromise(clean.run())
  });
})
