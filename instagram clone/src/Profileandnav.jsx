
import Profile from './Profile';
import Sidebar from './Sidebar';

const Profileandnav = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ width: '20%' }}>
        <Sidebar />
      </div>
      <div style={{ width: '100%', borderRight: '1px solid gray' }}>
        <Profile />
      </div>
    </div>
  );
};

export default Profileandnav;
