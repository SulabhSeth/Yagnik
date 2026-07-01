interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-14 text-center max-w-2xl mx-auto">
      <h2 className="heading-lg mb-4">
        {title}
      </h2>

      {subtitle && (
        <p className="text-muted leading-8">
          {subtitle}
        </p>
      )}
    </div>
  );
}