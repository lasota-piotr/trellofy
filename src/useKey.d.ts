type Callback = (pressedKey: number, event: KeyboardEvent) => void

declare module 'use-key-hook' {
  export default (
    callback: Callback,
    options: {
      detectKeys?: any[],
      dependencies?: any[]
    },
  ) => {}
}
