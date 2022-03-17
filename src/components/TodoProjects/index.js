import {Component} from 'react'

import {v4} from 'uuid'

import './index.css'

import TodoItems from '../TodoItems'

class TodoProjects extends Component {
  state = {
    userName: '',
    userEmail: '',
    userNumber: '',
    userProjectName: '',
    userProjectDescribtion: '',
    startDate: '',
    targetDate: '',
    projectList: [],
  }

  onChangeUserName = event => {
    this.setState({
      userName: event.target.value,
    })
  }

  onChangeUserEmail = event => {
    this.setState({
      userEmail: event.target.value,
    })
  }

  onChangeUserNumber = event => {
    this.setState({
      userNumber: event.target.value,
    })
  }

  onChangeUserProjectName = event => {
    this.setState({
      userProjectName: event.target.value,
    })
  }

  onChangeUserProjectTaskDescribtion = event => {
    this.setState({
      userProjectDescribtion: event.target.value,
    })
  }

  onChangeTargetDate = event => {
    this.setState({
      startDate: event.target.value,
    })
  }

  onChangeStartDate = event => {
    this.setState({
      targetDate: event.target.value,
    })
  }

  renderProjectList = () => {
    const {projectList} = this.state
    return projectList.map(eachProject => (
      <TodoItems key={eachProject.id} projectDetails={eachProject} />
    ))
  }

  onAddProject = event => {
    event.preventDefault()

    const newProject = {
      id: v4(),
      userName: '',
      userEmail: '',
      userNumber: '',
      userProjectName: '',
      userProjectDescribtion: '',
      startDate: '',
      targetDate: '',
    }
    this.setState(prevState => ({
      projectList: [...prevState.projectList, newProject],
      userName: '',
      userEmail: '',
      userNumber: '',
      userProjectName: '',
      userProjectDescribtion: '',
      startDate: '',
      targetDate: '',
    }))
  }

  render() {
    const {
      userName,
      userEmail,
      userNumber,
      userProjectName,
      userProjectDescribtion,
      startDate,
      targetDate,
    } = this.state
    return (
      <div className="card-container">
        <div className="todo-container">
          <h1 className="head">Todo List</h1>
          <form className="form-details" onSubmit={this.onAddProject}>
            <div className="name">
              <input
                type="text"
                placeholder="Enter person Name (3-20 charaters  only)"
                className="user-name"
                value={userName}
                onChange={this.onChangeUserName}
              />
            </div>
            <div className="email-number">
              <input
                className="email"
                type="text"
                placeholder="should be @"
                value={userEmail}
                onChange={this.onChangeUserEmail}
              />
              <input
                className="number"
                type="text"
                placeholder="should 10 numbers only"
                value={userNumber}
                onChange={this.onChangeUserNumber}
              />
            </div>
            <div className="project-details">
              <div className="project-name">
                <input
                  type="text"
                  className="project-name"
                  placeholder="project Name 3-20 num/special char"
                  value={userProjectName}
                  onChange={this.onChangeUserProjectName}
                />
              </div>
              <div className="project-name">
                <input
                  type="text"
                  className="project-name"
                  placeholder="project Task describtion 3-20 num/special char"
                  value={userProjectDescribtion}
                  onChange={this.onChangeUserProjectTaskDescribtion}
                />
              </div>
            </div>
            <div className="date-details">
              <input
                type="date"
                className="start-date"
                placeholder="startDate"
                value={startDate}
                onChange={this.onChangeStartDate}
              />
              <input
                type="date"
                className="target-date"
                placeholder="targetDate"
                value={targetDate}
                onChange={this.onChangeTargetDate}
              />
            </div>
            <div className="task-details">
              <div className="task">
                <input type="checkbox" className="planned-check" />
                <p className="planned">planned</p>
              </div>
              <div className="task">
                <input type="checkbox" className="planned-check" />
                <p className="planned">in-process</p>
              </div>
              <div className="task">
                <input type="checkbox" className="planned-check" />
                <p className="planned">done</p>
              </div>
            </div>
            <div className="button-deatils">
              <button
                className="button"
                type="submit"
                onClick={this.onClickSave}
              >
                Save
              </button>
              <button
                className="button"
                type="button"
                onClick={this.onClickEdit}
              >
                View
              </button>
            </div>
          </form>
          <ul className="project-list">{this.renderProjectList()}</ul>
        </div>
      </div>
    )
  }
}

export default TodoProjects
