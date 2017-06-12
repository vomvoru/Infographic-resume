import * as path from 'path'
import { createAllFilePath } from './helper'

const exts = {
  typescript: ['ts', 'tsx', 'js', 'jsx'],
}

const src = './src'
const dist = './dist'

export const paths = {
  src,
  dist,
  distFiles: createAllFilePath(src, exts.typescript),
  tsFiles : createAllFilePath(dist),
  tsconfig : './tsconfig.json',
}
