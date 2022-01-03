export interface NavigationProps {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  navigation: CommonTypes.NavigationType[];
}
