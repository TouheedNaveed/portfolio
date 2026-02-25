export type Project = {
    slug: string;
    title: string;
    description: string;
    tags: string[];
    category: "Frontend" | "Full-Stack" | "Mobile App";
    coverGradient: string;
    image?: string;          // path relative to /public, e.g. "/project-images/iphone.png"
    liveUrl?: string;
    githubUrl?: string;
    featured: boolean;
    caseStudy: {
        overview: string;
        problem: string;
        solution: string;
        features: { title: string; description: string }[];
        outcomes: { value: string; label: string }[];
        timeline: string;
        role: string;
        stack: string;
    };
};

export const projects: Project[] = [
    {
        slug: "Iphone Clone",
        title: "Animated Apple Iphone Clone",
        description:
            "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.",
        tags: ["React", "Three.js", "GSAP"],
        category: "Frontend",
        coverGradient: "from-accent-1 via-accent-2 to-accent-3",
        image: "/project-images/iphone.png",
        liveUrl: "https://iphonegadgets.netlify.app/",
        githubUrl: "https://github.com/TouheedNaveed/Iphone",
        featured: true,
        caseStudy: {
            overview:
                "A comprehensive analytics platform for SaaS businesses to track key metrics, manage users, and visualize revenue trends in real-time.",
            problem:
                "SaaS companies were struggling to consolidate data from multiple sources — Stripe, Mixpanel, Intercom — into a single coherent view. Teams spent hours exporting CSVs and building manual reports each week instead of acting on the data.\n\nThe client needed a unified dashboard that ingested data from all their tools, refreshed in real-time, and gave each team member a role-based view of the metrics they cared about.",
            solution:
                "Built a multi-tenant Next.js application using `App Router` with Server Components for fast initial loads and React Query for client-side data freshness. The backend is a tRPC API layer backed by PostgreSQL with `TimescaleDB` for time-series data. Redis handles session caching and real-time pub/sub via WebSockets.",
            features: [
                {
                    title: "Real-time metrics pipeline",
                    description:
                        "WebSocket-powered dashboard that updates MRR, churn, and DAU without page refresh.",
                },
                {
                    title: "Multi-tenant architecture",
                    description:
                        "Row-level security in PostgreSQL ensures complete data isolation between organisations.",
                },
                {
                    title: "Role-based access control",
                    description:
                        "Granular RBAC with 5 predefined roles and custom permission sets for enterprise plans.",
                },
                {
                    title: "Exportable reports",
                    description:
                        "One-click PDF and CSV exports using Puppeteer for any date range and metric combination.",
                },
            ],
            outcomes: [
                { value: "40%", label: "Faster decisions" },
                { value: "3×", label: "User engagement" },
                { value: "99.9%", label: "Uptime SLA" },
            ],
            timeline: "6 months",
            role: "Lead Developer",
            stack: "Next.js · PostgreSQL · Redis · tRPC",
        },
    },
    {
        slug: "Brainwave - AI Chatting Website",
        title: "Brainwave - AI Chatting Website",
        description:
            "Brainwave unlocks the potential of AI-powered applications.The world's most powerfull AI photo and video art generation engine.",
        tags: ["React.js", "Tailwind CSS", "Three.js"],
        category: "Frontend",
        coverGradient: "from-accent-2 via-accent-3 to-accent-4",
        image: "/project-images/brainwave.png",
        liveUrl: "https://brainwve.netlify.app/",
        githubUrl: "https://github.com/TouheedNaveed/brainwave",
        featured: false,
        caseStudy: {
            overview:
                "A battle-tested e-commerce backend powering a Shopify-alternative platform with real-time inventory and payment processing.",
            problem:
                "The existing monolith couldn't handle peak traffic during sales events, causing widespread 503 errors and lost revenue.",
            solution:
                "Migrated to a microservices architecture with a GraphQL federation gateway. Each service is containerised with `Docker` and orchestrated via Kubernetes with horizontal pod autoscaling.",
            features: [
                {
                    title: "GraphQL Federation",
                    description:
                        "Unified schema across inventory, orders, and payments services.",
                },
                {
                    title: "Redis caching layer",
                    description: "95% cache hit rate reducing DB load dramatically.",
                },
                {
                    title: "Stripe integration",
                    description:
                        "Webhooks-based payment reconciliation with idempotency keys.",
                },
                {
                    title: "Zero-downtime deploys",
                    description: "Blue-green deployment strategy via Kubernetes.",
                },
            ],
            outcomes: [
                { value: "10k+", label: "Daily transactions" },
                { value: "95%", label: "Cache hit rate" },
                { value: "0", label: "Downtime deploys" },
            ],
            timeline: "4 months",
            role: "Backend Engineer",
            stack: "Node.js · GraphQL · Docker · Redis",
        },
    },
    {
        slug: "The News Horizon",
        title: "The News Horizon",
        description:
            "Find the latest news from all over the world.",
        tags: ["React", "Bootstrap"],
        category: "Full-Stack",
        coverGradient: "from-accent-3 via-accent-4 to-accent-1",
        image: "/project-images/newshorizon.png",
        liveUrl: "/",
        githubUrl: "https://github.com/TouheedNaveed/The-News-Horizon",
        featured: false,
        caseStudy: {
            overview:
                "An enterprise design system that unified the visual language across 4 product teams and cut new feature development time by 30%.",
            problem:
                "Four product teams were building the same UI patterns independently — buttons, forms, modals — each with slight visual inconsistencies that eroded brand trust.",
            solution:
                "Built a monorepo with Turbo containing a `React` component library, a `Figma` token pipeline (via Style Dictionary), and a `Storybook` documentation site deployed on Vercel.",
            features: [
                {
                    title: "100+ components",
                    description: "Fully accessible, keyboard-navigable, dark-mode ready.",
                },
                {
                    title: "Figma → Code token sync",
                    description: "Style Dictionary auto-generates CSS variables from Figma tokens.",
                },
                {
                    title: "Visual regression testing",
                    description: "Chromatic catches unintended visual changes on every PR.",
                },
                {
                    title: "Accessibility audit",
                    description: "WCAG 2.1 AA compliance verified with axe-core in CI.",
                },
            ],
            outcomes: [
                { value: "30%", label: "Faster features" },
                { value: "100+", label: "Components" },
                { value: "4", label: "Teams using it" },
            ],
            timeline: "3 months",
            role: "Design Engineer",
            stack: "React · Storybook · Figma · Turbo",
        },
    },
    {
        slug: "iNotebook",
        title: "iNotebook",
        description:
            "iNotebook, your ultimate digital notebook designed to keep your thoughts, ideas, and important information organized and accessible.",
        tags: ["React", "Bootstrap"],
        category: "Full-Stack",
        coverGradient: "from-accent-4 via-accent-1 to-accent-2",
        image: "/project-images/inotebook.png",
        liveUrl: "https://inotebk.netlify.app/",
        githubUrl: "https://github.com/TouheedNaveed/iNotebook",
        featured: false,
        caseStudy: {
            overview:
                "An open-source CLI that reduces deployment setup from hours to minutes by abstracting common DevOps patterns.",
            problem:
                "Setting up CI/CD for new projects required copy-pasting boilerplate across GitHub Actions, Dockerfile configs, and cloud provider CLIs.",
            solution:
                "A Python CLI with a Rust core for performance-sensitive operations. Uses `typer` for the CLI interface and ships as a single binary via PyInstaller.",
            features: [
                {
                    title: "One-command deploys",
                    description: "deploy --env production provisions and deploys in one step.",
                },
                {
                    title: "Multi-cloud support",
                    description: "Supports AWS, GCP, and Fly.io with a unified config.",
                },
                {
                    title: "Plugin system",
                    description: "Extend via Python plugins with a stable hook API.",
                },
                {
                    title: "Config as code",
                    description: "YAML-defined pipelines checked into your repo.",
                },
            ],
            outcomes: [
                { value: "2k+", label: "GitHub stars" },
                { value: "500+", label: "Monthly users" },
                { value: "90%", label: "Setup time saved" },
            ],
            timeline: "Ongoing",
            role: "Creator & Maintainer",
            stack: "Python · Rust · Docker · GitHub Actions",
        },
    },
    {
        slug: "Flex Pulse",
        title: "Flex Pulse",
        description:
            "Empowering Every Move, Elevating Your Fitness. This emphasizes the focus on exercise and personal growth through movement.",
        tags: ["React", "Material UI"],
        category: "Full-Stack",
        coverGradient: "from-accent-2 via-accent-1 to-accent-3",
        image: "/project-images/flexpulse.png",
        liveUrl: "https://flexpulsegym.netlify.app/",
        githubUrl: "https://github.com/TouheedNaveed/flexpulse",
        featured: false,
        caseStudy: {
            overview:
                "A Slack-like chat application with end-to-end encryption, file sharing, and a 50ms median message latency.",
            problem:
                "Existing solutions were either expensive SaaS products or complex self-hosted setups. Teams needed a simple, secure, self-hostable option.",
            solution:
                "Next.js front-end paired with a Node.js WebSocket server. Messages are encrypted client-side with the `libsodium` library. `Prisma` + PostgreSQL stores metadata; files are streamed to S3.",
            features: [
                { title: "E2E encryption", description: "Messages encrypted with X25519 key exchange." },
                {
                    title: "Presence indicators",
                    description: "Online/typing status via heartbeat WebSocket events.",
                },
                { title: "File sharing", description: "Drag-and-drop uploads streamed to S3." },
                { title: "Threaded replies", description: "Nested threads without UX complexity." },
            ],
            outcomes: [
                { value: "50ms", label: "Message latency" },
                { value: "E2E", label: "Encrypted" },
                { value: "1k+", label: "Daily messages" },
            ],
            timeline: "3 months",
            role: "Full-Stack Engineer",
            stack: "Next.js · WebSockets · Prisma · S3",
        },
    },
    {
        slug: "AORA",
        title: "AORA",
        description:
            "Where Creativity meets innovation. An AI video generated application.",
        tags: ["React Native", "Expo Go", "Framer Motion"],
        category: "Mobile App",
        coverGradient: "from-accent-1 via-accent-3 to-accent-4",
        image: "/project-images/aora.png",
        liveUrl: "/",
        githubUrl: "https://github.com/TouheedNaveed/Aora.git",
        featured: false,
        caseStudy: {
            overview:
                "The open-source template that powers this very portfolio — a dark-first, animation-rich starter for developer portfolios.",
            problem:
                "Most portfolio templates are either too generic or too opinionated. Developers needed a beautiful starting point they could quickly make their own.",
            solution:
                "A fully customisable Next.js template with a structured `data/` layer so you only need to edit one file to personalise all content. One-click deploy to Vercel.",
            features: [
                { title: "Data-driven", description: "Edit src/data/ to personalise everything." },
                { title: "Fully animated", description: "Framer Motion entrance animations on every section." },
                { title: "Dark + Light mode", description: "System-aware with manual toggle." },
                { title: "One-click deploy", description: "Vercel deploy button in README." },
            ],
            outcomes: [
                { value: "500+", label: "Downloads" },
                { value: "4.9★", label: "GitHub rating" },
                { value: "100", label: "Lighthouse score" },
            ],
            timeline: "2 months",
            role: "Creator",
            stack: "Next.js · Tailwind CSS · Framer Motion",
        },
    },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const getProjectBySlug = (slug: string) =>
    projects.find((p) => p.slug === slug);
