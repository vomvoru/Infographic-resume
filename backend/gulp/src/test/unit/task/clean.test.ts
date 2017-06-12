import * as chai from 'chai'
import * as helper from '../../../helper'
import * as chaiPromised from 'chai-as-promised'
import * as fs from 'fs'

import CleanTask from '../../../task/CleanTask'
import * as gulp from 'gulp'

import * as streamToPromise from 'stream-to-promise'

chai.should()
chai.use(chaiPromised)

describe('clean task', () => {
  before(function () {
    var exists = fs.existsSync('./tmp');
    if (!exists) { fs.mkdirSync('./tmp'); }
  });

  it('should return current filename', async () => {
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

  after(function () {
    var exists = fs.existsSync('./tmp');
    if (!exists) { fs.mkdirSync('./tmp'); }
  });
})
