import Card from "../common/Card";

export default function SkillTags({ title, skills }) {
  return (
    <Card>
      <h2 className="mb-5 text-xl font-semibold">{title}</h2>

      <div className="flex flex-wrap gap-3">
        {skills?.map((skill, index) => (
          <span
            key={index}
            className="
              rounded-full
              border
              border-blue-500/30
              bg-blue-500/10
              px-4
              py-2
              text-sm
              font-medium
              text-blue-300
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-blue-500
              hover:text-white
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </Card>
  );
}
