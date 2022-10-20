import React from 'react';
import { userData } from '../../../common/mock-data';
import CustomEnhanceTable from '../../../Components/CustomEnhanceTable';
import CustomTable from '../../../Components/CustomTable';
import './style.css';

const attr = [
  { label: 'Marklogic Attribute', key: 'ml_attr' },
  { label: 'Metadata Attribute', key: 'md_attr' },
  { label: 'Is required?', key: 'is_req' },
];

const data = [
  { id: 1, ml_attr: 'Organisation ID', md_attr: 'Metadata Attribute', is_req: 'Yes' },
  { id: 2, ml_attr: 'Asset ID', md_attr: 'Metadata Attribute', is_req: 'No' },
  { id: 3, ml_attr: 'Language Code', md_attr: 'Metadata Attribute', is_req: 'Yes' },
];

const ManageAttributes: React.FC = () => {
  return (
    <div>
      <div className="attribute-container">
        <h1>Manage Attributes</h1>
      </div>

      <div className="attribute-table">
        <CustomEnhanceTable data={data} headRows={attr} />
        {/* <CustomTable
          data={userData}
          headData={[
            'Organisation ID',
            'Asset ID',
            'Title',
            'Language Code',
            'Publisher Name',
            'Page Count',
          ]}
          omitCellKeys={['id']}
          isGeneralSearch
        /> */}
      </div>
    </div>
  );
};

export default ManageAttributes;
