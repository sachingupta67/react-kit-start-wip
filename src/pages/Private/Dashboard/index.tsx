import React from 'react';
// import '../../../common/styles/global.scss';
import CustomEnhanceTable from '../../../Components/CustomEnhanceTable';
import { dummy } from './mock';

const headRows = [
  { label: 'Name', key: 'name' },
  { label: 'Age', key: 'age' },
  { label: 'Contact', key: 'cno' },
  { label: 'Email', key: 'email' },
];

const Dashboard: React.FC = () => {
  return (
    <div>
      <div className="attribute-container">
        <h1>Dashboard</h1>
      </div>

      <div className="attribute-table">
        <CustomEnhanceTable
          data={dummy}
          headRows={headRows}
          rowsPerPage={5}
          // rowsUI={{
          //   email: (item: { email: string }) => {
          //     return <WarningIcon />;
          //   },
          //   name: (item: { name: string }) => {
          //     return <div>{item.name}</div>;
          //   },
          // }}
        />
      </div>
    </div>
  );
};

export default Dashboard;
