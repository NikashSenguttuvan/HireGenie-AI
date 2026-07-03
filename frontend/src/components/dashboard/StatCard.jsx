import Card from "../common/Card";

export default function StatCard({ title, value, subtitle, icon: Icon }) {
  return (
    <Card className="hover:-translate-y-1">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-slate-400 text-sm">{title}</p>

          <h2 className="text-4xl font-bold mt-2">{value}</h2>

          <p className="text-green-400 text-sm mt-2">{subtitle}</p>
        </div>

        {Icon && (
          <div className="rounded-xl bg-blue-600/20 p-3">
            <Icon className="text-blue-400" />
          </div>
        )}
      </div>
    </Card>
  );
}
