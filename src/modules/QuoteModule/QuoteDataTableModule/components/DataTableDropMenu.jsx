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

import config from '@config';
import uniqueId from '@utils/uinqueId';
import { erp } from '@store/erp/actions';
import { useErpContext } from '@store/context/erp';
import { selectItemById } from '@store/erp/selectors';

const DataTableDropMenu = ({ row, entity }) => {
	const dispatch = useDispatch();
	const history = useHistory();

	const { erpContextAction } = useErpContext();
	const { recordPanel, modal } = erpContextAction;
	const item = useSelector(selectItemById(row._id));

	const Read = () => {
		dispatch(erp.currentItem({ data: item }));
		// readPanel.open();
		history.push(`/quote/read/${row._id}`);
	}

	const Edit = () => {
		dispatch(erp.currentAction({ actionType: 'update', data: item }));
		// updatePanel.open();
		history.push(`/quote/update/${row._id}`);
	}

	const Delete = () => {
		dispatch(erp.currentAction({ actionType: 'delete', data: item }));
		modal.open();
	}

	const Download = () => {
		if (typeof window !== 'undefined') {
			window.open(`${config.download.base_url}${entity}/${row._id}`, '_blank');
		}
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
