import SetingsSection from '../components/SetingsSection';
import GeneralSettingForm from './forms/GeneralSettingForm';
import SettingModuleLayout from '../components/SettingModuleLayout';

const GeneralSettingsModule({ config }) => (
	<SettingModuleLayout config={config}>
		<SetingsSection title="Company" description="Update your company name and logo">
			<GeneralSettingForm />
		</SetingsSection>

		{/* <SetingsSection title="information" description="Update your company Email, phone and adress">
			<GeneralSettingForm />
		</SetingsSection>

		<SetingsSection title="Other details" description="Add your website and other links">
			<GeneralSettingForm />
		</SetingsSection> */}
	</SettingModuleLayout>
);

export default GeneralSettingsModule;
