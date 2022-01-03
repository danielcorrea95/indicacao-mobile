export type HomeNavigationProps = {
  id: number;
}

export type StatusesNavigationProps = {
  id: number;
  statuses_id?: number
}

export type AwardsNavigationProps = {
  id: number;
}

export type NotificationNavigationProps = {
  id: number;
}

export type AwardsNavigationProps = {
  id: number;
}

export type ProfileNavigationProps = {
  id: number;
}

export declare global {
  namespace ReactNavigation{
    interface RootParamList {
      home: HomeNavigationProps;
      statuses: StatusesNavigationProps;
      awards: AwardsNavigationProps;
      notification: NotificationNavigationProps;
      profile: ProfileNavigationProps;
    }    
  }
}