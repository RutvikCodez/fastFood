import { images, offers } from "@/constants";
import { Fragment } from "react";
import {
  Button,
  FlatList,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import cn from "clsx";
import CartButton from "@/components/CartButton";


export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={offers}
        renderItem={({ item, index }) => {
          const isEven = index % 2 === 0;
          return (
            <View>
              <Pressable
                className={cn(
                  "w-full h-48 my-3 rounded-xl overflow-hidden shadow-lg flex items-center gap-5",
                  isEven ? "flex-row-reverse" : "flex-row"
                )}
                style={{ backgroundColor: item.color }}
                android_ripple={{ color: "#ffff22" }}
              >
                {({ pressed }) => (
                  <Fragment>
                    <View className="h-full w-1/2">
                      <Image
                        source={item.image}
                        className="size-full"
                        resizeMode="contain"
                      />
                    </View>
                    <View
                      className={cn(
                        "flex-1 h-full flex flex-col justify-center items-start gap-4",
                        isEven ? "pl-10" : "pr-10"
                      )}
                    >
                      <Text className="text-3xl font-quicksand-bold text-white leading-tight">
                        {item.title}
                      </Text>
                    </View>
                    <Image
                      source={images.arrowRight}
                      className="size-10"
                      resizeMode="contain"
                      tintColor="#ffffff"
                    />
                  </Fragment>
                )}
              </Pressable>
            </View>
          );
        }}
        contentContainerClassName="pb-28 px-5"
        ListHeaderComponent={() => (
          <View className="flex items-center justify-between flex-row w-full my-5">
            <View className="flex items-start justify-center">
              <Text className="text-xs font-quicksand-bold text-primary uppercase">
                Deliver To
              </Text>
              <TouchableOpacity className="flex items-center justify-center flex-row gap-x-1 mt-0.5">
                <Text className="text-base font-quicksand-bold text-dark-100">
                  Croatia
                </Text>
                <Image
                  source={images.arrowDown}
                  className="size-3"
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
            <CartButton />
          </View>
        )}
      />
    </SafeAreaView>
  );
}
