import * as chai from 'chai'
import * as helper from '../../helper'
import * as chaiPromised from 'chai-as-promised'

import { normalize } from 'path'

chai.should()
chai.use(chaiPromised)

describe('gulp helper module', () => {
  describe('getTaskname function', () => {
    it('should return current filename', () => {
      // when
      const taskname = helper.getTaskname(__filename)

      // then
      taskname.should.equal('helper.test')
    })
  })

  describe('createAllFilePath function', () => {
    // given
    const rootPath = `./src`

    it(`should return rootPath/**/*.*`, () => {
      // when
      const allfilePath = helper.createAllFilePath(rootPath)

      // then
      allfilePath.should.equal(normalize(`${rootPath}/**/*.*`))
    })

    it(`should return ${normalize('./app/bcd')} rootPath/**/*.ext`, () => {
      // given
      const ext = 'js'

      // when
      const allfilePath = helper.createAllFilePath(rootPath, ext)

      // then
      allfilePath.should.equal(normalize(`${rootPath}/**/*.${ext}`))
    })

    it(`should return rootPath/**/*.+(ext1|ext2)`, () => {
      // given
      const ext = ['ts', 'tsx']

      // when
      const allfilePath = helper.createAllFilePath(rootPath, ext)

      // then
      allfilePath.should.equal(normalize(`${rootPath}/**/*.+(${ext[0]}|${ext[1]})`))
    })
  })
})
