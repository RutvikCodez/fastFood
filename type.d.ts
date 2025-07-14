import { Models } from "react-native-appwrite";

type customInputProps = {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  label: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
};

type customButtonProps = {
  onPress?: () => void;
  title?: string;
  style?: string;
  leftIcon?: React.ReactNode;
  textStyle?: string;
  isLoading?: boolean;
};

type createUserProps = {
  email: string;
  password: string;
  name: string;
};

type signInProps = {
  email: string;
  password: string;
};

type user = Models.Document & {
  name: string;
  email: string;
  avatar: string;
};

type authState = {
  isAuthenticated: boolean;
  user: user | null;
  isLoading: boolean;
  setIsAuthenticated: (value: boolean) => void;
  setUser: (user: user | null) => void;
  setIsLoading: (value: boolean) => void;
  fecthAuthenticatedUser: () => Promise<void>;
};

type tabBarIconProps = {
  focused: boolean;
  icon: ImageSourcePropType;
  title: string;
};

type getMenuProps = {
  category: string;
  query: string;
};
