import React from 'react'
import { Tabs } from 'antd';
import { routes } from '@/router';
import Board from '../Board';
import Detail from '../Detail';
import { useNavigate } from 'react-router-dom';
export default function Layout() {
  const layoutRoutes = routes.filter(route => route.path === '/')[0].children;
  const navigate = useNavigate();
  console.log(layoutRoutes);

  const items = [
    {
      key: '/',
      label: 'Tab 1',
      children: <Board />,
    },
    {
      key: '/about',
      label: 'Tab 2',
      children: <Detail />,
    }
  ];
  const onChange = (key) => {
    console.log(key);
    
    navigate(key)
  };
  return (
    <div>
      <Tabs defaultActiveKey='/' items={items} onChange={onChange} />
    </div>
  )
}
