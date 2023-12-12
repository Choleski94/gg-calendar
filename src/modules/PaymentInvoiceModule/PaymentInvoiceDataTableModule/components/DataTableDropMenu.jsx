import {
	EyeOutlined,
	EditOutlined,
	DeleteOutlined,
	FilePdfOutlined,
	CreditCardOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import uniqueId from '@utils/uinqueId';
import { erp } from '@store/erp/actions';
import { useErpContext } from '@store/context/erp';
import { selectItemById } from '@store/erp/selectors';
import { DOWNLOAD_BASE_URL } from '@config/serverApiConfig';

const DataTableDropMenu = ({ row, entity }) => {
	const dispatch = useDispatch();
	const history = useHistory();

	const { erpContextAction } = useErpContext();
	const { modal } = erpContextAction;

	const item = useSelector(selectItemById(row._id));

	const Read = () => {
		dispatch(erp.currentItem({ data: item }));
		history.push(`/payment/invoice/read/${row._id}`);
	}

	const Edit = () => {
		dispatch(erp.currentAction({ actionType: 'update', data: item }));
		history.push(`/payment/invoice/update/${row._id}`);
	}

	const Delete = () => {
		dispatch(erp.currentAction({ actionType: 'delete', data: item }));
		modal.open();
	}

	const Download = () => {
		window.open(`${DOWNLOAD_BASE_URL}${entity}/${row._id}`, '_blank');
	}

	return (
		<Menu style={{ minWidth: 130 }}>
			<Menu.Item key={`${uniqueId()}`} icon={<EyeOutlined />} onClick={Read}>
				Show
			</Menu.Item>
			<Menu.Item key={`${uniqueId()}`} icon={<EditOutlined />} onClick={Edit}>
				Edit
			</Menu.Item>
			<Menu.Item key={`${uniqueId()}`} icon={<FilePdfOutlined />} onClick={Download}>
				Download
			</Menu.Item>
			<Menu.Item key={`${uniqueId()}`} icon={<DeleteOutlined />} onClick={Delete}>
				Delete
			</Menu.Item>
		</Menu>
	);
}

export default DataTableDropMenu;
