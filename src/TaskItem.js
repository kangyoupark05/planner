const TaskItem = ({ task, toggleComplete, removeTask }) => {
    const isOverdue = task.dueDate && new Date(task.dueDate) < new Date();
  
    return (
      <div style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.name} (Due: {task.dueDate ? task.dueDate : 'No due date'})
        {isOverdue && !task.completed && <span style={{ color: 'red' }}> - Overdue!</span>}
        <button onClick={() => toggleComplete(task.id)}>Complete</button>
        <button onClick={() => removeTask(task.id)}>Delete</button>
      </div>
    );
  };
  
  export default TaskItem;
  