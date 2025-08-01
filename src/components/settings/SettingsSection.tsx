interface SettingsSectionProps {
    title: string;
    description?: string;
    children: React.ReactNode;
    className?: string;
}

export const SettingsSection = ({ title, description, children, className = "" }: SettingsSectionProps) => (
    <section className={`bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 ${className}`}>
        <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
            {description && <p className="text-gray-600">{description}</p>}
        </div>
        {children}
    </section>
);