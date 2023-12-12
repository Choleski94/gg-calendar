import React from 'react';
import { Button, Menu } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { EyeOutlined, EditOutlined, LockOutlined, DeleteOutlined } from '@ant-design/icons';

import uniqueId from '@utils/uinqueId';
import { crud } from '@store/crud/actions';
import DataTable from '@components/DataTable';
import { useCrudContext } from '@store/context/crud';
import { selectItemById } from '@store/crud/selectors';

const AddNewItem = ({ config }) => {
	const { crudContextAction } = useCrudContext();
	const { collapsedBox, panel } = crudContextAction;

	const { ADD_NEW_ENTITY } = config;

	const handelClick = () => {
		panel.open();
		collapsedBox.close();
	};

	return (
		<Button onClick={handelClick} type="primary">
			{ADD_NEW_ENTITY}
		</Button>
	);
}

const DropDownRowMenu = ({ row }) => {
	const dispatch = useDispatch();
	const { crudContextAction } = useCrudContext();
	const { panel, collapsedBox, modal, advancedBox, readBox, editBox } = crudContextAction;
	const item = useSelector(selectItemById(row._id));

	const Show = () => {
		dispatch(crud.currentItem({ data: item }));
		panel.open();
		collapsedBox.open();
		readBox.open();
	};

	const Edit = () => {
		dispatch(crud.currentItem({ data: item }));
		dispatch(crud.currentAction({ actionType: 'update', data: item }));
		editBox.open();
		panel.open();
		collapsedBox.open();
	}

	const UpdatePassword = () => {
		dispatch(crud.currentItem({ data: item }));
		dispatch(crud.currentAction({ actionType: 'update', data: item }));
		advancedBox.open();
		panel.open();
		collapsedBox.open();
	}

	const Delete = () => {
		dispatch(crud.currentAction({ actionType: 'delete', data: item }));
		modal.open();
	}

	return (
		<Menu style={{ minWidth: 130 }}>
			<Menu.Item key={`${uniqueId()}`} icon={<EyeOutlined />} onClick={Show}>
				Show
			</Menu.Item>
			<Menu.Item key={`${uniqueId()}`} icon={<EditOutlined />} onClick={Edit}>
				Edit
			</Menu.Item>
			<Menu.Item key={`${uniqueId()}`} icon={<LockOutlined />} onClick={UpdatePassword}>
				Update Password
			</Menu.Item>
			<Menu.Item key={`${uniqueId()}`} icon={<DeleteOutlined />} onClick={Delete}>
				Delete
			</Menu.Item>
		</Menu>
	);
}

const AdminCrudModule = ({ config }) => (
	<DataTable 
		config={config} 
		DropDownRowMenu={DropDownRowMenu} 
		AddNewItem={AddNewItem} 
	/>
);

export default AdminCrudModule;
