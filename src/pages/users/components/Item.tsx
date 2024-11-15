import React from 'react'
import { IUser } from '../../../domain/schema/users/types'
import { DeleteUser, UpdateUser } from '../../../domain/schema/users/actions'
import ButtonComponent from '../../../ui/Button'

const Item = ({ item, onDelete, onEdit }: {
  item: IUser,
  onDelete: DeleteUser,
  onEdit: UpdateUser
}) => {
  const { name, id } = item
  return (
    <li className='w-full grid grid-cols-4 items-center gap-4 text-white'>
      <p>{name}</p>
      <div>
        <ButtonComponent
          className='max-w-16 bg-gray-500/50 mr-4'
          onClick={() => onEdit(id, item)}
        >
          Editar
        </ButtonComponent>
        <ButtonComponent
          className='max-w-32 bg-red-500/70'
          onClick={() => onDelete(id)}
        >
          Eliminar
        </ButtonComponent>
      </div>
    </li>
  )
}

export default Item