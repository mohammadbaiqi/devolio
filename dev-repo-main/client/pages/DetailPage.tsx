import { ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usePortfolio } from "@/context/PortfolioContext";

type ProjectInfo = {
  year?: string;
  team?: string;
  role?: string;
  duration?: string;
};

type ProjectDetail = {
  heroImage?: string;
  tagline?: string;
  overview?: string;
  info?: ProjectInfo;
  liveDemoUrl?: string;
  gallery?: string[];
  techStack?: { tech: string; icon: string }[];
  whatIBuilt?: BuildSection[];
};

type BuildPoint = {
  description: string;
};

type BuildSection = {
  title: string;
  points: BuildPoint[];
};

export default function DetailPage() {
  const { name } = usePortfolio();
  const { portoId } = useParams<{ portoId: string }>();

  const [project, setProject] = useState<ProjectDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!name || !portoId) return;

    const loadProject = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/portofolio/${name}/${portoId}`);
        const data = (await response.json()) as ProjectDetail;
        setProject(data);
      } catch (error) {
        console.error("Failed to load project detail", error);
      } finally {
        setLoading(false);
      }
    };

    loadProject();
  }, [name, portoId]);

  if (loading) {
    return (
      <div className="px-6 py-24 text-[#FFFFFF] flex items-center gap-3">
        <div className="w-6 h-6 rounded-full border-2 border-[#FFB000] border-t-transparent animate-spin" />
        Loading project…
      </div>
    );
  }

  if (!project) {
    return <div className="px-6 py-24 text-[#FFFFFF]">Project not found.</div>;
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 text-[#FFFFFF] md:px-12 md:py-24">
      {project.heroImage ? (
        <img src={project.heroImage} alt={project.tagline} className="mb-8 h-[320px] w-full rounded-3xl object-cover" />
      ) : null}

      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-4xl font-semibold md:text-5xl">{project.tagline ?? "Project Detail"}</h1>
        <a
          href={project.liveDemoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-[#FFB000] px-8 py-3 text-sm font-medium text-[#0D0D0D] transition hover:bg-[#E69E00]"
        >
          Live Demo
          <ExternalLink size={18} className="h-4 w-4" />
        </a>
      </div>

      <p className="justify mb-8 max-w-6xl text-lg text-[#A3A3A3]">{project.overview}</p>

      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {project.techStack?.map((tech) => (
            <div
              key={tech.tech}
              className="flex items-center gap-2 rounded-full border border-[#262629] bg-[#1C1C1E] px-4 py-2"
            >
              <img src={tech.icon} alt={tech.tech} className="h-5 w-5 brightness-0 invert" />
              <span className="text-sm text-[#A3A3A3]">{tech.tech}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8 grid gap-4 rounded-3xl border border-[#262629] bg-[#1C1C1E] p-6 md:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-[#A3A3A3]">Year</p>
          <p className="mt-2 text-lg">{project.info?.year ?? "—"}</p>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-[#A3A3A3]">Team</p>
          <p className="mt-2 text-lg">{project.info?.team ?? "—"}</p>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-[#A3A3A3]">Role</p>
          <p className="mt-2 text-lg">{project.info?.role ?? "—"}</p>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-[#A3A3A3]">Duration</p>
          <p className="mt-2 text-lg">{project.info?.duration ?? "—"}</p>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="mb-4 text-2xl font-semibold">What I Built</h2>
        {project.whatIBuilt?.map((section) => (
          <div
            key={section.title}
            className="rounded-3xl border border-[#262629] bg-[#1C1C1E] p-6"
          >
            <h3 className="mb-4 text-xl font-semibold">{section.title}</h3>
            <ul className="list-disc space-y-3 pl-6 text-[#A3A3A3]">
              {section.points.map((point, index) => (
                <li key={index}>{point.description}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}