import Header from './Header';
import MainDrawer from './MainDrawer';
import { Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';

export default function App() {
  const tasks = useSelector(state => state.todo.tasks)

  const count = (tasks.filter(task => !task.done)).length;

  return (
    <>
      <Header count={count} />

      <MainDrawer/>

      <Outlet />
    </>
  );
}
