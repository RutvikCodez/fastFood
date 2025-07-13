import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";
import cn from "clsx";
import { customButtonProps } from "@/type";

const CustomButton = ({
  isLoading = false,
  leftIcon,
  onPress,
  style,
  textStyle,
  title = "Click Me",
}: customButtonProps) => {
  return (
    <TouchableOpacity
      className={cn(
        "bg-primary rounded-full p-3 w-full flex flex-row justify-center",
        style
      )}
      onPress={onPress}
    >
      {leftIcon}
      <View className="flex justify-center items-center flex-row">
        {isLoading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text
            className={cn(
              "text-white-100 text-base font-quicksand-semibold",
              textStyle
            )}
          >
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
