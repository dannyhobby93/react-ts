type SectionProps = {
    title?: string;
    children: React.ReactNode;
};

const Section = ({ title = "Subheading", children }: SectionProps) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
    );
};

export default Section;
