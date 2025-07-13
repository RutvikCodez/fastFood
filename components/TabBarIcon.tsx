import { View, Text, Image } from "react-native";
import React from "react";
import cn from "clsx";
import { tabBarIconProps } from "@/type";

const TabBarIcon = ({ focused, icon, title }: tabBarIconProps) => {
  return (
    <View className="flex min-w-20 items-center justify-center min-h-full gap-1 mt-12">
      <Image
        source={icon}
        className="size-7"
        resizeMode="contain"
        tintColor={focused ? "#FE8C00" : "#5D5F6D"}
      />
      <Text
        className={cn(
          "text-sm font-bold",
          focused ? "text-primary" : "text-gray-200"
        )}
      >
        {title}
      </Text>
    </View>
  );
};

export default TabBarIcon;
