/// <reference types="react-scripts" />

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  IpAddress: string;
  TotalClicks: number;
  TotalPageViews: number;
}

interface State {
  isLoading: boolean;
  phones: User[];
}