import teamData from "./teamData";
import Image from "next/image";

const Team = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {teamData.map((team) => (
        <div key={team.id} className="space-y-3">
          <div className="relative h-80 w-full mx-auto overflow-hidden">
            <Image
              src={team.image}
              alt={team.name}
              fill
              style={{ objectFit: "cover", objectPosition: "top" }}
            />
          </div>
          <hgroup>
            <h3>{team.name}</h3>
            <p>{team.position}</p>
          </hgroup>
        </div>
      ))}
    </div>
  );
};

export default Team;
