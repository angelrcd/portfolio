const skills = [
  {
    groupName: "Web development",
    skills: [
      {
        name: "HTML5",
        iconUrl: "assets/skill-icons/html.svg"
      },
      {
        name: "CSS3",
        iconUrl: "assets/skill-icons/css.svg"
      },
      {
        name: "Javascript",
        iconUrl: "assets/skill-icons/javascript.svg"
      },
      {
        name: "React",
        iconUrl: "assets/skill-icons/react.svg"
      },
      {
        name: "Tailwind",
        iconUrl: "assets/skill-icons/tailwind.svg"
      },
      {
        name: "Bootstrap",
        iconUrl: "assets/skill-icons/bootstrap.svg"
      },
      {
        name: "NodeJS",
        iconUrl: "assets/skill-icons/nodejs.svg"
      },
      {
        name: "Express",
        iconUrl: "assets/skill-icons/express.svg"
      }
    ]
  },
  {
    groupName: ".NET",
    skills: [
      {
        name: "C#",
        iconUrl: "assets/skill-icons/csharp.svg"
      },
      {
        name: ".NET Core",
        iconUrl: "assets/skill-icons/netcore.svg"
      },
      {
        name: "Visual Studio",
        iconUrl: "assets/skill-icons/visualstudio.svg"
      },
      {
        name: "ASP.NET Core",
        iconUrl: "assets/skill-icons/aspnet.png"
      }
    ]
  },
  {
    groupName: "Databases",
    skills: [
      {
        name: "MongoDB",
        iconUrl: "assets/skill-icons/mongodb.svg"
      },
      {
        name: "Microsoft SQL Server",
        iconUrl: "assets/skill-icons/mssql.png"
      },
      {
        name: "MySQL",
        iconUrl: "assets/skill-icons/mysql.svg"
      },
      {
        name: "CosmosDB",
        iconUrl: "assets/skill-icons/cosmosdb.png"
      }
    ]
  },
  {
    groupName: "Administration & CI/CD",
    skills: [
      {
        name: "Azure",
        iconUrl: "assets/skill-icons/azure.svg"
      },
      {
        name: "Linux",
        iconUrl: "assets/skill-icons/linux.svg"
      },
      {
        name: "Bash",
        iconUrl: "assets/skill-icons/bash.svg"
      },
      {
        name: "NPM",
        iconUrl: "assets/skill-icons/npm.png"
      },
      {
        name: "Git",
        iconUrl: "assets/skill-icons/git.svg"
      },
      {
        name: "Github",
        iconUrl: "assets/skill-icons/github.svg"
      },
      {
        name: "Docker",
        iconUrl: "assets/skill-icons/docker.png"
      },
      {
        name: "Nginx",
        iconUrl: "assets/skill-icons/nginx.svg"
      },

    ]
  },
  {
    groupName: "Testing & others",
    skills: [
      {
        name: "Vite",
        iconUrl: "assets/skill-icons/vite.svg"
      },
      {
        name: "Webpack",
        iconUrl: "assets/skill-icons/webpack.svg"
      },
      {
        name: "Vitest",
        iconUrl: "assets/skill-icons/vitest.svg"
      },
      {
        name: "Jest",
        iconUrl: "assets/skill-icons/jest.svg"
      },
      {
        name: "Testing library",
        iconUrl: "assets/skill-icons/testinglibrary.png"
      },
      {
        name: "Figma",
        iconUrl: "assets/skill-icons/figma.svg"
      }
    ]
  }
]

export function drawSkills(){
  const skillsGroupContainer = document.querySelector(".skill-groups-container");
  skills.forEach(skillGroup => {
    const skillGroupElem = document.createElement("li");
    skillGroupElem.classList.add("skill-group");

    let skillsListText = "";

    for (let skill of skillGroup.skills){
      skillsListText += `
      <li>
        <figure>
          <img src="${skill.iconUrl}" alt="">
          <figcaption>${skill.name}</figcaption>
        </figure>
      </li>
      `
    }

    skillGroupElem.innerHTML = `
      <h4>${skillGroup.groupName}</h4>
      <ul>
        ${skillsListText}
      </ul>
    `

    skillsGroupContainer.appendChild(skillGroupElem);
  })
}