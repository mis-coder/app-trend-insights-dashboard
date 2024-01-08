import {
  Bot,
  Filter,
  LayoutDashboard,
  PieChart,
  TrendingUp,
} from "lucide-react";

export const sidebarItems = [
  {
    id: "overview",
    title: "Overview",
    icon: LayoutDashboard,
    actionUrl: "/",
  },
  {
    id: "filters",
    title: "Filters",
    icon: Filter,
    actionUrl: "/#",
  },
  {
    id: "categoryAnalysis",
    title: "Category Analysis",
    icon: PieChart,
    actionUrl: "/#",
  },
  {
    id: "riskAssesment",
    title: "Risk Assesment",
    icon: TrendingUp,
    actionUrl: "/#",
  },
  {
    id: "askTrendzAi",
    title: "Ask Trendz AI",
    icon: Bot,
    actionUrl: "/#",
  },
];
