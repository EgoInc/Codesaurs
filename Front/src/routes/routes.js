import {PersonalArea} from "../pages/personalArea/personalArea"

// export interface IRoute {
//   path: string;
//   component: React.ComponentType;
//   exact?: boolean;
// }
//
// export enum RouteTypes {
//   PERSONAL_AREA = '/personal_area',
//   PROFILE = '/profile',
//   TASKS = '/tasks',
//   COURSE = '/course',
// }

export const privateRoutes = [
  { path: '/personal_area', component: PersonalArea, exact: true },
  // { path: RouteTypes.TASKS, component: Profile, exact: true },
  // { path: RouteTypes.EDITOR, component: Editor, exact: true },
  // { path: RouteTypes.CRM, component: CRM, exact: true },
]
