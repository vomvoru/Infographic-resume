import * as path from 'path'

export function getTaskname(filename: string) {
  return path.parse(filename).name
}

export function createAllFilePath(rootPath: string, ext?: string[] | string): string {
  const extGlobPart = getExtGlobPart()

  return path.join(rootPath, '**', `*.${extGlobPart}`)

  function getExtGlobPart() {
    if (typeof ext === 'string') {
      return ext
    }
    if (Array.isArray(ext)) {
      return `+(${ext.join('|')})`
    }
    return '*'
  }
}
