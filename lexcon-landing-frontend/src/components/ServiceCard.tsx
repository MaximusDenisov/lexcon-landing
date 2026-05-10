type ServiceCardProps = {
  title: string;
  description: string;
};

export function ServiceCard({
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8 transition duration-300 hover:-translate-y-1 hover:border-amber-400">
      <h3 className="text-2xl font-semibold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-300">
        {description}
      </p>
    </div>
  );
}