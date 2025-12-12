interface ProjectHeaderProps {
  title: string;
  subtitle: string;
  team?: string[];
  tools?: string[];
  faculty?: string;
  role: string;
  duration: string;
  location: string;
}

export default function ProjectHeader({ title, subtitle, team = [], tools = [], faculty, role, duration, location }: ProjectHeaderProps) {
  return (
    <section className="w-full  flex flex-col gap-6 py-10">
      {/* Title + Subtitle */}
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-lg text-muted-foreground">{subtitle}</p>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
        {/* Team */}
        {team.length > 0 && (
          <div>
            <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Team</h3>
            <ul className="text-sm mt-1 leading-relaxed">
              {team.map((member, i) => (
                <li key={i}>{member}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Tools */}
        {tools.length > 0 && (
          <div>
            <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Tools Used</h3>
            <ul className="text-sm mt-1 leading-relaxed">
              {tools.map((tool, i) => (
                <li key={i}>{tool}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Faculty (optional) */}
        {faculty && (
          <div>
            <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Faculty</h3>
            <p className="text-sm mt-1 leading-relaxed">{faculty}</p>
          </div>
        )}

        {/* Role */}
        <div>
          <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Role</h3>
          <p className="text-sm mt-1 leading-relaxed">{role}</p>
        </div>

        {/* Duration */}
        <div>
          <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Duration</h3>
          <p className="text-sm mt-1 leading-relaxed">{duration}</p>
        </div>

        {/* Location */}
        <div>
          <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Location</h3>
          <p className="text-sm mt-1 leading-relaxed">{location}</p>
        </div>
      </div>
    </section>
  );
}
