// Translation system for multi-language support
export type Language = 'tr' | 'en';

export interface Translations {
  // Direct section keys (for dot navigation)
  homeLabel: string;
  aboutLabel: string;
  skillsLabel: string;
  projectsLabel: string;
  contactLabel: string;
  
  // Navbar
  nav: {
    about: string;
    skills: string;
    projects: string;
    contact: string;
  };
  
  // Hero
  hero: {
    greeting: string;
    name: string;
    title: string;
    titleEn: string;
    summary: string;
    summaryEn: string;
    ctaProjects: string;
    ctaContact: string;
    scrollIndicator: string;
  };
  
  // About / Experience
  about: {
    title: string;
    timeline: TimelineEntry[];
  };
  
  // Projects
  projects: {
    title: string;
    subtitle: string;
    viewGithub: string;
    viewLive: string;
  };
  
  // Contact
  contact: {
    title: string;
    subtitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    sendButton: string;
    sending: string;
    success: string;
    error: string;
    nameError: string;
    emailError: string;
    emailInvalid: string;
    messageError: string;
    messageMinLength: string;
  };
  
  // Footer
  footer: {
    tagline: string;
    rights: string;
  };
}

interface TimelineEntry {
  year: string;
  yearEn: string;
  title: string;
  titleEn: string;
  company: string;
  location: string;
  locationEn: string;
  description: string;
  descriptionEn: string;
  achievements: string[];
  achievementsEn: string[];
}

export const translations: Record<Language, Translations> = {
  tr: {
    // Direct section labels (for dot navigation)
    homeLabel: "Ana Sayfa",
    aboutLabel: "Hakkımda",
    skillsLabel: "Yetenekler",
    projectsLabel: "Projeler",
    contactLabel: "İletişim",
    
    nav: {
      about: "Hakkımda",
      skills: "Yetenekler",
      projects: "Projeler",
      contact: "İletişim",
    },
    
    hero: {
      greeting: "Merhaba, ben",
      name: "Elvan Ünal",
      title: "Ölçeklenebilir ve Performans Odaklı Yazılım Geliştirici",
      titleEn: "Performance-Driven Full-Stack Software Developer",
      summary: "C#, .NET teknolojileri ve modern JavaScript framework'leri konusunda güçlü bir altyapıya sahip Yazılım Geliştiriciyim. ASP.NET Core kullanarak ölçeklenebilir ve güvenli RESTful API'ler tasarlama ve geliştirme konusunda deneyimliyim; aynı zamanda React ve Angular ile yüksek performanslı, etkileşimli kullanıcı arayüzleri geliştiriyorum. Clean Code, SOLID prensipleri ve Agile metodolojileri benimseyerek sürdürülebilir, güvenilir ve uçtan uca ölçeklenebilir dijital çözümler üretmeyi hedefliyorum.",
      summaryEn: "Software Developer with strong expertise in C#, .NET technologies, and modern JavaScript frameworks. Experienced in designing and implementing high-scale RESTful APIs and secure backend architectures using ASP.NET Core, alongside developing high-performance, interactive user interfaces with React and Angular. Passionate about clean code principles, SOLID architecture, and Agile methodologies to deliver scalable, reliable, and seamless end-to-end digital solutions.",
      ctaProjects: "Projelerimi İncele",
      ctaContact: "İletişime Geç",
      scrollIndicator: "Aşağı kaydır",
    },
    
    about: {
      title: "Deneyimlerim",
      timeline: [
        {
          year: "Mart 2024 – Temmuz 2025",
          yearEn: "March 2024 – July 2025",
          title: "Frontend Developer",
          titleEn: "Frontend Developer",
          company: "Raiffeisen-Tours RT-Reisen GmbH (RTK)",
          location: "Almanya",
          locationEn: "Germany",
          description: "KAIROS Projesi kapsamında global turizm ve acente yönetim platformu için Angular ve TypeScript kullanarak yüksek performanslı ve responsive arayüzler geliştirdim.",
          descriptionEn: "Developed high-performance and responsive Angular & TypeScript interfaces for the KAIROS Project, a global tourism and agency management platform.",
          achievements: [
            "KAIROS Projesi için Angular & TypeScript ile yüksek performanslı arayüzler geliştirdim",
            "Frontend optimizasyonları ile yüklenme sürelerini önemli ölçüde azaltarak kullanıcı deneyimini artırdım",
            "RESTful API entegrasyonları ile güvenilir veri akışı sağladım",
            "Otomatik test altyapıları kurarak kod güvenilirliğini artırdım",
            "UI bileşenlerini standartlaştırarak erişilebilirlik uyumluluğunu geliştirdim",
          ],
          achievementsEn: [
            "Developed high-performance and responsive Angular & TypeScript interfaces for the KAIROS Project",
            "Significantly reduced frontend load times through optimization strategies, improving user retention",
            "Collaborated with backend teams to integrate RESTful APIs, ensuring reliable data flow",
            "Implemented automated testing frameworks to enhance code stability and reduce production defects",
            "Standardized UI components to ensure design consistency and improved accessibility compliance",
          ],
        },
        {
          year: "Temmuz 2023 – Ekim 2023",
          yearEn: "July 2023 – October 2023",
          title: "Full-Stack Developer",
          titleEn: "Full-Stack Developer",
          company: "DGTLFACE",
          location: "Antalya, Türkiye",
          locationEn: "Antalya, Türkiye",
          description: "ASP.NET Core MVC ve Angular (TypeScript) kullanarak uçtan uca web uygulamaları geliştirdim.",
          descriptionEn: "Designed and developed full-stack web applications using ASP.NET Core MVC and Angular with TypeScript.",
          achievements: [
            "ASP.NET Core MVC ve Angular ile uçtan uca web uygulamaları geliştirdim",
            "Ölçeklenebilir RESTful API'ler tasarlayarak çok platformlu arayüzlerin entegrasyonunu sağladım",
            "Veritabanı sorgularını optimize ederek uygulama performansını artırdım",
            "SOLID prensipleri ve Clean Code yaklaşımıyla sürdürülebilir backend mimarileri oluşturdum",
            "Otomatik test çözümleri ile sistem güvenilirliğini artırdım",
          ],
          achievementsEn: [
            "Designed and developed full-stack web applications using ASP.NET Core MVC and Angular with TypeScript",
            "Architected scalable RESTful APIs serving dynamic multi-platform frontend applications",
            "Optimized database queries and backend logic, significantly improving application performance",
            "Applied SOLID principles and Clean Code methodologies to create maintainable backend architectures",
            "Implemented automated testing solutions to enhance system reliability",
          ],
        },
        {
          year: "Ağustos 2022 – Nisan 2023",
          yearEn: "August 2022 – April 2023",
          title: "Frontend Developer",
          titleEn: "Frontend Developer",
          company: "Sedna Cloud",
          location: "Antalya, Türkiye",
          locationEn: "Antalya, Türkiye",
          description: "Veboni ERP Projesi için Angular, TypeScript ve DevExtreme kullanarak dinamik ERP arayüzleri geliştirdim.",
          descriptionEn: "Developed dynamic ERP interfaces for the Veboni ERP Project using Angular, TypeScript, and DevExtreme.",
          achievements: [
            "Veboni ERP Projesi için Angular, TypeScript ve DevExtreme ile arayüzler geliştirdim",
            "ASP.NET Core Web API tabanlı mikroservis mimarisinde backend servisler geliştirdim",
            "RESTful API'leri SOLID prensiplerine uygun şekilde tasarladım",
            "Modern CSS/HTML standartları ile erişilebilirlik ve kullanıcı deneyimini iyileştirdim",
          ],
          achievementsEn: [
            "Developed dynamic ERP interfaces for the Veboni ERP Project using Angular, TypeScript, and DevExtreme",
            "Contributed to backend services within a microservices-based architecture using ASP.NET Core Web API",
            "Designed and implemented RESTful APIs following SOLID and clean architecture principles",
            "Enhanced UI accessibility and usability through modern CSS/HTML best practices",
          ],
        },
      ],
    },
    
    projects: {
      title: "Projelerim",
      subtitle: "Ölçülebilir sonuçlar ve iş değeri yaratan projeler. Her biri performans, ölçeklenebilirlik ve kullanıcı deneyimi odaklı tasarlandı.",
      viewGithub: "GitHub'da Görüntüle",
      viewLive: "Canlı Demo",
    },
    
    contact: {
      title: "İletişim",
      subtitle: "Bir projede birlikte çalışmak ister misiniz? İş birliği fırsatları ve projeleriniz için benimle iletişime geçebilirsiniz.",
      namePlaceholder: "Adınız",
      emailPlaceholder: "email@ornek.com",
      messagePlaceholder: "Mesajınız...",
      sendButton: "Mesaj Gönder",
      sending: "Gönderiliyor...",
      success: "Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağım!",
      error: "Bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
      nameError: "İsim alanı zorunludur",
      emailError: "E-posta alanı zorunludur",
      emailInvalid: "Geçerli bir e-posta adresi girin",
      messageError: "Mesaj alanı zorunludur",
      messageMinLength: "Mesaj en az 10 karakter olmalıdır",
    },
    
    footer: {
      tagline: "Yazılım Geliştirici",
      rights: "Tüm hakları saklıdır.",
    },
  },
  
  en: {
    // Direct section labels (for dot navigation)
    homeLabel: "Home",
    aboutLabel: "About",
    skillsLabel: "Skills",
    projectsLabel: "Projects",
    contactLabel: "Contact",
    
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    
    hero: {
      greeting: "Hello, I'm",
      name: "Elvan Ünal",
      title: "Performance-Driven Full-Stack Software Developer",
      titleEn: "Performance-Driven Full-Stack Software Developer",
      summary: "Software Developer with strong expertise in C#, .NET technologies, and modern JavaScript frameworks. Experienced in designing and implementing high-scale RESTful APIs and secure backend architectures using ASP.NET Core, alongside developing high-performance, interactive user interfaces with React and Angular. Passionate about clean code principles, SOLID architecture, and Agile methodologies to deliver scalable, reliable, and seamless end-to-end digital solutions.",
      summaryEn: "Software Developer with strong expertise in C#, .NET technologies, and modern JavaScript frameworks. Experienced in designing and implementing high-scale RESTful APIs and secure backend architectures using ASP.NET Core, alongside developing high-performance, interactive user interfaces with React and Angular. Passionate about clean code principles, SOLID architecture, and Agile methodologies to deliver scalable, reliable, and seamless end-to-end digital solutions.",
      ctaProjects: "View My Work",
      ctaContact: "Get In Touch",
      scrollIndicator: "Scroll down",
    },
    
    about: {
      title: "Experience",
      timeline: [
        {
          year: "March 2024 – July 2025",
          yearEn: "March 2024 – July 2025",
          title: "Frontend Developer",
          titleEn: "Frontend Developer",
          company: "Raiffeisen-Tours RT-Reisen GmbH (RTK)",
          location: "Germany",
          locationEn: "Germany",
          description: "Developed high-performance and responsive Angular & TypeScript interfaces for the KAIROS Project, a global tourism and agency management platform.",
          descriptionEn: "Developed high-performance and responsive Angular & TypeScript interfaces for the KAIROS Project, a global tourism and agency management platform.",
          achievements: [
            "Developed high-performance and responsive Angular & TypeScript interfaces for the KAIROS Project",
            "Significantly reduced frontend load times through optimization strategies, improving user retention and platform responsiveness",
            "Collaborated closely with backend teams to integrate RESTful APIs, ensuring reliable data flow",
            "Implemented automated testing frameworks to enhance code stability and reduce production defects",
            "Standardized UI components to ensure design consistency and improved accessibility compliance",
          ],
          achievementsEn: [
            "Developed high-performance and responsive Angular & TypeScript interfaces for the KAIROS Project",
            "Significantly reduced frontend load times through optimization strategies, improving user retention and platform responsiveness",
            "Collaborated closely with backend teams to integrate RESTful APIs, ensuring reliable data flow",
            "Implemented automated testing frameworks to enhance code stability and reduce production defects",
            "Standardized UI components to ensure design consistency and improved accessibility compliance",
          ],
        },
        {
          year: "July 2023 – October 2023",
          yearEn: "July 2023 – October 2023",
          title: "Full-Stack Developer",
          titleEn: "Full-Stack Developer",
          company: "DGTLFACE",
          location: "Antalya, Türkiye",
          locationEn: "Antalya, Türkiye",
          description: "Designed and developed full-stack web applications using ASP.NET Core MVC and Angular with TypeScript.",
          descriptionEn: "Designed and developed full-stack web applications using ASP.NET Core MVC and Angular with TypeScript.",
          achievements: [
            "Designed and developed full-stack web applications using ASP.NET Core MVC and Angular with TypeScript",
            "Architected scalable RESTful APIs serving dynamic multi-platform frontend applications",
            "Optimized database queries and backend logic, significantly improving application performance",
            "Applied SOLID principles and Clean Code methodologies to create maintainable backend architectures",
            "Implemented automated testing solutions to enhance system reliability",
          ],
          achievementsEn: [
            "Designed and developed full-stack web applications using ASP.NET Core MVC and Angular with TypeScript",
            "Architected scalable RESTful APIs serving dynamic multi-platform frontend applications",
            "Optimized database queries and backend logic, significantly improving application performance",
            "Applied SOLID principles and Clean Code methodologies to create maintainable backend architectures",
            "Implemented automated testing solutions to enhance system reliability",
          ],
        },
        {
          year: "August 2022 – April 2023",
          yearEn: "August 2022 – April 2023",
          title: "Frontend Developer",
          titleEn: "Frontend Developer",
          company: "Sedna Cloud",
          location: "Antalya, Türkiye",
          locationEn: "Antalya, Türkiye",
          description: "Developed dynamic ERP interfaces for the Veboni ERP Project using Angular, TypeScript, and DevExtreme.",
          descriptionEn: "Developed dynamic ERP interfaces for the Veboni ERP Project using Angular, TypeScript, and DevExtreme.",
          achievements: [
            "Developed dynamic ERP interfaces for the Veboni ERP Project using Angular, TypeScript, and DevExtreme",
            "Contributed to backend services within a microservices-based architecture using ASP.NET Core Web API",
            "Designed and implemented RESTful APIs following SOLID and clean architecture principles",
            "Enhanced UI accessibility and usability through modern CSS/HTML best practices",
          ],
          achievementsEn: [
            "Developed dynamic ERP interfaces for the Veboni ERP Project using Angular, TypeScript, and DevExtreme",
            "Contributed to backend services within a microservices-based architecture using ASP.NET Core Web API",
            "Designed and implemented RESTful APIs following SOLID and clean architecture principles",
            "Enhanced UI accessibility and usability through modern CSS/HTML best practices",
          ],
        },
      ],
    },
    
    projects: {
      title: "Projects",
      subtitle: "Projects delivering measurable results and business value. Each designed with focus on performance, scalability, and user experience.",
      viewGithub: "View on GitHub",
      viewLive: "Live Demo",
    },
    
    contact: {
      title: "Contact",
      subtitle: "Would you like to collaborate on a project? Feel free to get in touch to discuss opportunities.",
      namePlaceholder: "Your name",
      emailPlaceholder: "email@example.com",
      messagePlaceholder: "Your message...",
      sendButton: "Send Message",
      sending: "Sending...",
      success: "Your message has been sent successfully. I'll get back to you soon!",
      error: "An error occurred. Please try again later.",
      nameError: "Name is required",
      emailError: "Email is required",
      emailInvalid: "Please enter a valid email",
      messageError: "Message is required",
      messageMinLength: "Message must be at least 10 characters",
    },
    
    footer: {
      tagline: "Software Developer",
      rights: "All rights reserved.",
    },
  },
};

