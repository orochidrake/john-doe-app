export const removeMaskCpf = (str: string) =>
  str ? str.toString().replace(/\D/g, '') : ''

export const addMaskCpf = (str: string) => {
  let ret = removeMaskCpf(str)
  const l = ret.length

  if (l > 3) {
    ret = ret.substr(0, 3) + '.' + ret.substr(3)
  }
  if (l > 6) {
    ret = ret.substr(0, 7) + '.' + ret.substr(7)
  }
  if (l > 9) {
    ret = ret.substr(0, 11) + '-' + ret.substr(11, 2)
  }

  return ret
}
