/**
 * Sleep for a given number of seconds, can use fractions of a second
 * @param seconds
 * @returns Promise<number>
 * @example await sleep(0.5)
 */
export function sleep (seconds: number) {
  return new Promise<number>(resolve =>
    setTimeout(() => resolve(seconds), seconds * 1000)
  )
}
