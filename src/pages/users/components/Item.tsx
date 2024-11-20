import { IUser } from '../../../domain/schema/users/types'
import { DeleteUser, SelectUser } from '../../../domain/schema/users/actions'
import ButtonComponent from '../../../ui/Button'

const Item = ({ item, onDelete, onSelect }: {
  item: IUser,
  onDelete: DeleteUser,
  onSelect: SelectUser
}) => {
  const { name, id } = item
  return (
    <li className='w-full grid grid-cols-4 items-center gap-4 text-white'>
      <p>{name}</p>
      <div className='flex justify-end gap-4'>
        <ButtonComponent
          className='max-w-32 bg-blue-500/50'
          onClick={() => onSelect(id)}
        >
          Ver mas
        </ButtonComponent>
        <ButtonComponent.Link
          to={`/home/users/edit/${id}`}
          className='max-w-16 bg-gray-700/50 mr-4'
        >
          Editar
        </ButtonComponent.Link>
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