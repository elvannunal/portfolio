export interface Project {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  tags: string[];
  image?: string;
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    id: "7",
    title: "Architecture Banner Page",
    titleEn: "Architecture Banner Page",
    description: "Mimarlık projesi için tek HTML açılış sayfası.",
    descriptionEn: "Single HTML landing page for architecture project banner.",
    tags: ["HTML", "CSS", "Design"],
    image: "https://i.ibb.co/mV7HZ6Vc/df6a1918-4aea-4db4-915f-4a2b72d3b600.jpg",
    github: "https://github.com/elvannunal/banner-page",
  },
  {
    id: "6",
    title: "Cafe Landing Page",
    titleEn: "Cafe Landing Page",
    description: "Modern UI tasarımına sahip cafe projesi için açılış sayfası.",
    descriptionEn: "Landing page for a cafe project with modern UI design.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    image: "https://i.ibb.co/PZtnmbN2/image.png",
    github: "https://github.com/elvannunal/CakeMake",
  },
  {
    id: "2",
    title: "ETS Tur Clone",
    titleEn: "ETS Tur Clone",
    description: "ETS Tur web sitesinin Angular, HTML, Bootstrap ve SCSS ile yapılmış duyarlı ve stilize ön yüz klonu.",
    descriptionEn: "Frontend clone of ETS Tur website built with Angular, HTML, Bootstrap, and SCSS for responsive and styled development.",
    tags: ["Angular", "HTML", "Bootstrap", "SCSS"],
    image: "https://i.ibb.co/G34XC7B9/desktop1.png",
    github: "https://github.com/elvannunal/EtsturClone",
  },
  {
    id: "1",
    title: "Task Manager Application",
    titleEn: "Task Manager Application",
    description: "Full-stack görev yönetimi uygulaması. ASP.NET Core Web API backend ve Angular frontend ile PostgreSQL veritabanı kullanılarak geliştirildi.",
    descriptionEn: "Full-stack task manager application built with ASP.NET Core Web API backend, Angular frontend, and PostgreSQL database.",
    tags: ["ASP.NET Core Web API", "Angular", "PostgreSQL", "TypeScript"],
    image: "https://i.ibb.co/67H2T5yF/Ekran-Resmi-2026-02-20-21-53-50.png",
    github: "https://github.com/elvannunal/TaskManagerAPI",
  },
  {
    id: "3",
    title: "Small Messaging App",
    titleEn: "Small Messaging App",
    description: "ASP.NET Core Web API ve SignalR kullanılarak geliştirilen gerçek zamanlı mesajlaşma uygulaması.",
    descriptionEn: "Real-time messaging application built with ASP.NET Core Web API and SignalR.",
    tags: ["ASP.NET Core Web API", "SignalR", "Angular", "Real-time"],
    image: "https://i.ibb.co/Ps61tRWF/Ekran-Resmi-2026-02-21-16-17-43.png",
    github: "https://github.com/elvannunal/MailAPI",
  },
  {
    id: "5",
    title: "Candy Crush Clone",
    titleEn: "Candy Crush Clone",
    description: "HTML, CSS ve JavaScript ile yapılmış basit Candy Crush tarzı oyun.",
    descriptionEn: "Simple Candy Crush style game built with HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "https://i.ibb.co/TxhGN6Yw/Ekran-Resmi-2026-02-21-16-19-10.png",
    github: "https://github.com/elvannunal/CANDY_CRUSH",
  },
];

export const socialLinks = {
  github: "https://github.com/elvannunal",
  linkedin: "https://www.linkedin.com/in/elvan-%C3%BCnal-b88a33225/",
  email: "mailto:elvanunalll@gmail.com"
};

