export const isNumber = (obj: string): boolean => {
  return (/^\d+$/g).test(obj)
}