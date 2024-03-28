export default function ProjectList() {
    const project = [
      {
        name: "OLX",
        img_url:
          "https://i.pinimg.com/236x/76/a0/55/76a0559e38785778f7204968d466a98b.jpg",
      },
      {
        name: "Mitra Sepulu",
        img_url:
          "https://i.pinimg.com/736x/b0/e8/56/b0e856ebaf48b66322a9829d857b03ff.jpg",
      },
      {
        name: "Mitra Sepulu",
        img_url:
          "https://i.pinimg.com/736x/b0/e8/56/b0e856ebaf48b66322a9829d857b03ff.jpg",
      },
      {
        name: "Mitra Sepulu",
        img_url:
          "https://i.pinimg.com/736x/b0/e8/56/b0e856ebaf48b66322a9829d857b03ff.jpg",
      },
      {
        name: "Mitra Sepulu",
        img_url:
          "https://i.pinimg.com/736x/b0/e8/56/b0e856ebaf48b66322a9829d857b03ff.jpg",
      },
      {
        name: "Mitra Sepulu",
        img_url:
          "https://i.pinimg.com/736x/b0/e8/56/b0e856ebaf48b66322a9829d857b03ff.jpg",
      },
      {
        name: "Mitra Sepulu",
        img_url:
          "https://i.pinimg.com/736x/b0/e8/56/b0e856ebaf48b66322a9829d857b03ff.jpg",
      },
      {
        name: "Mitra Sepulu",
        img_url:
          "https://i.pinimg.com/736x/b0/e8/56/b0e856ebaf48b66322a9829d857b03ff.jpg",
      },
      {
        name: "Mitra Sepulu",
        img_url:
          "https://i.pinimg.com/736x/b0/e8/56/b0e856ebaf48b66322a9829d857b03ff.jpg",
      },
      {
        name: "Mitra Sepulu",
        img_url:
          "https://i.pinimg.com/736x/b0/e8/56/b0e856ebaf48b66322a9829d857b03ff.jpg",
      },
      {
        name: "Mitra Sepulu",
        img_url:
          "https://i.pinimg.com/736x/b0/e8/56/b0e856ebaf48b66322a9829d857b03ff.jpg",
      },
      {
        name: "Mitra Sepulu",
        img_url:
          "https://i.pinimg.com/736x/b0/e8/56/b0e856ebaf48b66322a9829d857b03ff.jpg",
      },
      {
        name: "Mitra Sepulu",
        img_url:
          "https://i.pinimg.com/736x/b0/e8/56/b0e856ebaf48b66322a9829d857b03ff.jpg",
      },
      {
        name: "Mitra Sepulu",
        img_url:
          "https://i.pinimg.com/736x/b0/e8/56/b0e856ebaf48b66322a9829d857b03ff.jpg",
      },
      {
        name: "Mitra Sepulu",
        img_url:
          "https://i.pinimg.com/736x/b0/e8/56/b0e856ebaf48b66322a9829d857b03ff.jpg",
      },
    ];
    return (
      <div className="flex overflow-x-auto w-full mx-20 py-5">
        {project.map((val, key) => (
          <Project key={key} {...val} />
        ))}
      </div>
    );
  }
  
  export function Project({ name, img_url }) {
    return (
      <div className="project mx-3 min-w-64 flex flex-col justify-center items-center">
        <p className="text-center text-2xl">{name}</p>
        <img className="h-full aspect-square object-contain" src={img_url} alt="" />
      </div>
    );
  }