import { INoDataProps } from './enhance-table';
import NoAssetFoundsrc from '../../assets2/images/No-asset-found.svg';
const NoData: React.FC<INoDataProps> = (props) => {
  const { colSpan = 0 } = props;
  return (
    <tr className="astm-table-tr">
      <td className="astm-table-td no-data" colSpan={colSpan}>
        <img src={NoAssetFoundsrc} alt="No asset found" className="placeholder-img" />
        <h4>No asset found</h4>
      </td>
    </tr>
  );
};

export default NoData;
