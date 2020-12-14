let count = 0

export async function getNextNumber(): Promise<number> {
  const result = new Promise<number>(resolve => {
    setTimeout(() => resolve(count++))
  })
  return result
}
