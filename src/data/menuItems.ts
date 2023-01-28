import type { MenuItem } from "@/models/menuItemModel";
import { ResumeIfnoNames } from "@/router/resumeInfo.routes";
import { ResumeNames } from "@/router/resumes.routes";

const menuItems: MenuItem[] = [
  { title: ResumeNames.Main, icon: "", to: ResumeNames.Main, children: [] },
  { title: "Resume List", icon: "", to: ResumeNames.ResumeList, children: [] },
  {
    title: "Resume Information",
    icon: "",
    children: [
      { title: "Basic", icon: "", to: ResumeIfnoNames.Basic, children: [] },
    ],
  },
];
export default menuItems;
