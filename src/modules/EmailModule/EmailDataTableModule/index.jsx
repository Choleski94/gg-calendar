import { ErpLayout } from '@components/layout';
import ErpPanel from '@modules/ErpPanelModule';

import DataTableDropMenu from './components/DataTableDropMenu';

const EmailDataTableModule = ({ config }) => (
	<ErpLayout>
		<ErpPanel config={config} DataTableDropMenu={DataTableDropMenu}></ErpPanel>
	</ErpLayout>
);

export default EmailDataTableModule;
