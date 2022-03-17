import './index.css'

import {AiFillEdit, AiOutlineDelete} from 'react-icons/ai'

const TodoItems = props => {
  const {projectDetails} = props

  const {
    id,
    userName,
    userEmail,
    userNumber,
    userProjectName,
    userProjectDescribtion,
    startDate,
    targetDate,
  } = projectDetails

  return (
    <div className="projects-list">
      <table>
        <tr className="row-value">
          <th>S.no</th>
          <th>Name</th>
          <th>Project</th>
          <th>Task</th>
          <th>Status</th>
          <th>startDate</th>
          <th>EndDate</th>
          <th>Edit/delete</th>
        </tr>
        <tbody>
          <td>{id}</td>
          <td>{userName}</td>
          <td>{userEmail}</td>
          <td>{userNumber}</td>
          <td>{userProjectName}</td>
          <td>{userProjectDescribtion}</td>
          <td>{startDate}</td>
          <td>{targetDate}</td>
          <td className="edit">
            <AiFillEdit className="edit" />
            <AiOutlineDelete className="edit" />
          </td>
        </tbody>
      </table>
    </div>
  )
}

export default TodoItems
