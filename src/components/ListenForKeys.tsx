import * as React from 'react'
import useKey from 'use-key-hook'

enum Keys {
  Esc = 27,
  Enter = 13,
}

type ArgsType<T> = T extends (...args: infer U) => any ? U : never

interface ListenForKeysProps {
  callback: ArgsType<typeof useKey>[0]
  options?: ArgsType<typeof useKey>[1]
}


const ListenForKeys: React.FC<ListenForKeysProps> = ({
  callback,
  options = {
    detectKeys: [Keys.Enter, Keys.Esc],
  },
}) => {
  useKey(callback, options)
  return null
}

export default ListenForKeys
