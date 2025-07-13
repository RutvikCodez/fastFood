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
}
