import { Image,ScrollView, Text, View } from "react-native";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "expo-router";
//94d75e2519fd3276fbf8419ba859e0eb
//Read access
//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGQ3NWUyNTE5ZmQzMjc2ZmJmODQxOWJhODU5ZTBlYiIsIm5iZiI6MTc1MDU0NjAwNy4wNzEsInN1YiI6IjY4NTczNjU3NmI1N2M4MTg0NDAzNjgyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g6VGeFhRb1laijM98WwRlh2-rmm0ivT3NKIlJobixHI
export default function Index() {
  const router = useRouter();
  return (
    <View className = "flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0"/>
      <ScrollView className="flex-1 px-5" 
      showsVerticalScrollIndicator={false} 
      contentContainerStyle={{
        minHeight: "100%",
        paddingBottom: 10,
      }}> 
          <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto"/>
          <View className="flex-1 mt-5">
            <SearchBar 
                onPress={() => router.push("/search")} 
                placeholder="Search for a movie"/>
          </View>
      </ScrollView>
    </View>
  );
}
