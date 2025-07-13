import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import cn from "clsx";
const CustomInput = ({
  placeholder,
  value,
  onChangeText,
  label,
  secureTextEntry = false,
  keyboardType = "default",
}: customInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View className="w-full">
      <Text className="text-base text-start w-full font-quicksand-medium text-gray-500 pl-2">
        {label}
      </Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        value={value}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholderTextColor="#888"
        className={cn(
          "rounded-lg p-3 w-full text-base font-quicksand-semibold text-dark-100 border-b leading-5",
          isFocused ? "border-primary" : "border-gray-300"
        )}
      />
    </View>
  );
};

export default CustomInput;
